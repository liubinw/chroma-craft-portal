import React from 'react';
import ImageGeneratorForm from './ImageGeneratorForm';
import ImagePreview from './ImagePreview';
import useImageGenerator from '@/hooks/useImageGenerator';

const ImageGenerator = () => {
  const { 
    isGenerating, 
    generatedImage, 
    generateImage, 
    resetImage 
  } = useImageGenerator();

  const handleGenerate = (options: {
    prompt: string;
    negativePrompt: string;
    style: string;
    dimensions: string;
    creativity: number;
  }) => {
    generateImage(options);
  };

  const handleRegenerate = () => {
    resetImage();
    // Re-trigger the form submission
    // This would ideally store the last used options in the hook
    // and reuse them here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ImageGeneratorForm 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
      />
      <ImagePreview 
        isGenerating={isGenerating} 
        generatedImage={generatedImage} 
        onRegenerate={handleRegenerate} 
      />
    </div>
  );
};

export default ImageGenerator;
