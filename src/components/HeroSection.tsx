
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Transform Your Ideas</span>
              <br />
              Into Stunning Images
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Create beautiful, unique images in seconds with our AI-powered image generation platform.
              No design skills required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-gradient text-lg px-8">
                <NavLink to="/signup">Get Started Free</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <NavLink to="/about">Learn More</NavLink>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              No credit card required • Free tier available
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4 pt-8">
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="AI Generated Image 1" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="AI Generated Image 2" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="AI Generated Image 3" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="AI Generated Image 4" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
