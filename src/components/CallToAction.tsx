
import React from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl overflow-hidden relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 -z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="py-16 px-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Creating Amazing Images <span className="gradient-text">Today</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of creators, marketers, and designers who are transforming 
              their ideas into stunning visuals with our AI image generation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient text-lg px-8">
                <NavLink to="/signup">Get Started Free</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <NavLink to="/pricing">View Pricing</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
