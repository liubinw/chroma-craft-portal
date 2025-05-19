
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
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

// Style options
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

interface ImageGeneratorFormProps {
  onGenerate: (options: {
    prompt: string;
    negativePrompt: string;
    style: string;
    dimensions: string;
    creativity: number;
  }) => void;
  isGenerating: boolean;
}

const ImageGeneratorForm: React.FC<ImageGeneratorFormProps> = ({ 
  onGenerate, 
  isGenerating 
}) => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [dimensions, setDimensions] = useState('1:1');
  const [creativity, setCreativity] = useState([5]);

  const handleSubmit = () => {
    onGenerate({
      prompt,
      negativePrompt,
      style,
      dimensions,
      creativity: creativity[0]
    });
  };

  return (
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
            onClick={handleSubmit}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate Image'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGeneratorForm;
