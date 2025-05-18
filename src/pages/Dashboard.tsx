
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGenerator from '@/components/dashboard/ImageGenerator';
import ImageGallery from '@/components/dashboard/ImageGallery';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Create and manage your AI-generated images</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="btn-gradient">
                Upgrade to Pro
              </Button>
            </div>
          </div>
          
          <Card className="glass-card border-none p-4 mb-8">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="font-medium">Credits Available</h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-1">150</span>
                  <span className="text-muted-foreground">/ 200</span>
                </div>
              </div>
              <Button variant="outline">Buy More</Button>
            </div>
          </Card>
          
          <Tabs defaultValue="create" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="create">Create</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="focus-visible:outline-none focus-visible:ring-0">
              <ImageGenerator />
            </TabsContent>
            <TabsContent value="gallery" className="focus-visible:outline-none focus-visible:ring-0">
              <ImageGallery />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
