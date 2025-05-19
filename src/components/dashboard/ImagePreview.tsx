
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ImagePreviewProps {
  isGenerating: boolean;
  generatedImage: string | null;
  onRegenerate: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  isGenerating, 
  generatedImage, 
  onRegenerate 
}) => {
  const handleSaveToGallery = () => {
    // This would save to a database in a real app
    toast.success('Image saved to gallery');
  };

  return (
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
              onClick={onRegenerate}
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
  );
};

export default ImagePreview;
