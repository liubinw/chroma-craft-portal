
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "High-Quality Results",
    description: "Generate photorealistic images with exceptional detail and quality using our advanced AI model.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
    )
  },
  {
    title: "Unlimited Creativity",
    description: "Express your ideas with complete freedom and watch the AI bring them to life in stunning detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2h-8v13a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>
    )
  },
  {
    title: "Super Fast Generation",
    description: "Get your AI-generated images in seconds, not minutes. Perfect for quick iterations and inspiration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="m13 2-2 2.5h3L12 7"/><path d="M19 2H5v12h14zm1 14H4v3h16z"/><circle cx="9" cy="9" r="2"/><path d="M9 19.2c0 .4.3.8.7.8h4.6c.4 0 .7-.4.7-.8v-.4H9Z"/></svg>
    )
  },
  {
    title: "Custom Style Control",
    description: "Choose from various artistic styles or create your own unique aesthetic with fine-tuned controls.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
    )
  },
  {
    title: "Commercial Usage",
    description: "Use generated images for your business, marketing, or creative projects with our flexible licensing options.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
  },
  {
    title: "Secure Cloud Storage",
    description: "All your generated images are securely stored in the cloud and accessible anytime, anywhere.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M6 18h8"/><path d="M20 7h-9"/><circle cx="10" cy="7" r="3"/><circle cx="16" cy="18" r="3"/></svg>
    )
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-brand-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to create amazing AI-generated images for your projects,
            all in one intuitive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-none hover-lift">
              <CardContent className="p-6 flex flex-col items-start">
                <div className="h-12 w-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
