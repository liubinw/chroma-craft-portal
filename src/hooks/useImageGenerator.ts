
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ImageGenerationOptions {
  prompt: string;
  negativePrompt?: string;
  style: string;
  dimensions: string;
  creativity: number;
}

export const useImageGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [predictionId, setPredictionId] = useState<string | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  // Clean up polling on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval) clearInterval(pollingInterval);
    };
  }, [pollingInterval]);

  // Poll for prediction status
  const pollPredictionStatus = async (id: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { predictionId: id },
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("Poll response:", data);
      
      // Check if the prediction is complete
      if (data.status === "succeeded") {
        if (data.output && data.output.length > 0) {
          setGeneratedImage(data.output[0]);
          setIsGenerating(false);
          if (pollingInterval) clearInterval(pollingInterval);
          setPollingInterval(null);
          toast.success('Image generated successfully!');
        }
      } else if (data.status === "failed") {
        setIsGenerating(false);
        if (pollingInterval) clearInterval(pollingInterval);
        setPollingInterval(null);
        toast.error('Image generation failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error("Error polling prediction status:", error);
    }
  };

  const generateImage = async (options: ImageGenerationOptions) => {
    if (!options.prompt.trim()) {
      toast.error('Please enter a prompt first');
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);
    setPredictionId(null);
    
    try {
      // Build a complete prompt that includes the style
      const fullPrompt = `${options.prompt}, ${options.style} style`;
      
      // Invoke the edge function
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt: fullPrompt },
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("Generation response:", data);
      
      if (data.prediction && data.prediction.id) {
        setPredictionId(data.prediction.id);
        
        // Start polling for the prediction status
        const interval = setInterval(() => {
          pollPredictionStatus(data.prediction.id);
        }, 2000); // Poll every 2 seconds
        
        setPollingInterval(interval);
      } else {
        throw new Error('Invalid response from image generation service');
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setIsGenerating(false);
      toast.error(`Failed to generate image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const resetImage = () => {
    setGeneratedImage(null);
  };

  return {
    isGenerating,
    generatedImage,
    generateImage,
    resetImage
  };
};

export default useImageGenerator;
