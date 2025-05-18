
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    prompt: "Futuristic city with neon lights and flying cars",
    date: "2023-05-15"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    prompt: "Mountain landscape at sunset with reflective lake",
    date: "2023-05-14"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    prompt: "Abstract digital art with flowing colors",
    date: "2023-05-12"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    prompt: "Cyberpunk character with glowing eyes",
    date: "2023-05-10"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    prompt: "Enchanted forest with magical creatures",
    date: "2023-05-08"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    prompt: "Futuristic space station orbiting Earth",
    date: "2023-05-05"
  }
];

const ImageGallery = () => {
  const downloadImage = (url: string) => {
    // In a real app, this would trigger a download
    toast.success('Image download started');
  };
  
  const deleteImage = (id: number) => {
    toast.success('Image deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Gallery</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Sort
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="glass-card border-none overflow-hidden group hover-lift">
            <div className="relative aspect-square">
              <img 
                src={image.url} 
                alt={image.prompt} 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with controls - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-white text-sm line-clamp-2 mb-2">{image.prompt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-xs">{image.date}</span>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 bg-white/20 hover:bg-white/40"
                      onClick={() => downloadImage(image.url)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 bg-white/20 hover:bg-white/40"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Prompt</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Use as Reference</DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-500 focus:text-red-500"
                          onClick={() => deleteImage(image.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
};

export default ImageGallery;
