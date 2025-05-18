
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Mock style options
const styleOptions = [
  { value: "realistic", label: "Realistic" },
  { value: "anime", label: "Anime" },
  { value: "digital-art", label: "Digital Art" },
  { value: "oil-painting", label: "Oil Painting" },
  { value: "watercolor", label: "Watercolor" },
  { value: "sketch", label: "Sketch" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "fantasy", label: "Fantasy" },
];

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [dimensions, setDimensions] = useState('1:1');
  const [creativity, setCreativity] = useState([5]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [predictionId, setPredictionId] = useState<string | null>(null);
  const [pollingInterval, setPollingInterval] = useState<number | null>(null);

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

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt first');
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);
    setPredictionId(null);
    
    try {
      // Build a complete prompt that includes the style
      const fullPrompt = `${prompt}, ${style} style`;
      
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

  const handleRegenerate = () => {
    // Reset state and generate again
    setGeneratedImage(null);
    handleGenerate();
  };

  const handleSaveToGallery = () => {
    // This would save to a database in a real app
    toast.success('Image saved to gallery');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Prompt Panel */}
      <Card className="glass-card border-none">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Image</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prompt">Prompt</Label>
              <Textarea
                id="prompt"
                placeholder="Describe what you want to generate..."
                className="glass-input min-h-[100px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="negative-prompt">Negative Prompt (Optional)</Label>
              <Textarea
                id="negative-prompt"
                placeholder="What you don't want to see in the image..."
                className="glass-input"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="style">Style</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="glass-input" id="style">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dimensions">Dimensions</Label>
                <Select value={dimensions} onValueChange={setDimensions}>
                  <SelectTrigger className="glass-input" id="dimensions">
                    <SelectValue placeholder="Select dimensions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1:1">Square (1:1)</SelectItem>
                    <SelectItem value="4:3">Landscape (4:3)</SelectItem>
                    <SelectItem value="3:4">Portrait (3:4)</SelectItem>
                    <SelectItem value="16:9">Widescreen (16:9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="creativity">Creativity Level</Label>
                <span className="text-sm text-muted-foreground">{creativity[0]}</span>
              </div>
              <Slider
                id="creativity"
                min={1}
                max={10}
                step={1}
                value={creativity}
                onValueChange={setCreativity}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Accurate</span>
                <span>Creative</span>
              </div>
            </div>
            
            <Button 
              className="btn-gradient w-full" 
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Image'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Image Preview Panel */}
      <Card className="glass-card border-none">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          
          <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted/50 flex items-center justify-center">
            {isGenerating ? (
              <div className="text-center p-8">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-4 text-muted-foreground">Creating your masterpiece with Black Forest Labs AI...</p>
              </div>
            ) : generatedImage ? (
              <img 
                src={generatedImage} 
                alt="Generated" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-foreground/50 mb-4">
                  <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/>
                  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>
                  <path d="M12 12v4"/>
                  <path d="M10 14h4"/>
                </svg>
                <p className="text-muted-foreground">Your generated image will appear here</p>
              </div>
            )}
          </div>
          
          {generatedImage && (
            <div className="mt-4 flex justify-end space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRegenerate}
              >
                Regenerate
              </Button>
              <Button 
                size="sm"
                onClick={handleSaveToGallery}
              >
                Save to Gallery
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageGenerator;
