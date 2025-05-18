
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

// Sample user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  joinDate: "May 10, 2023",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  credits: 150,
  creditsTotal: 200,
  imagesGenerated: 87,
  accountType: "Pro"
};

const UserProfile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* User info card */}
      <Card className="glass-card border-none md:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={userData.profileImage} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-muted-foreground mb-4">{userData.email}</p>
            <Button variant="outline" size="sm" className="mb-6">Edit Profile</Button>
            
            <div className="w-full space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Account Type</p>
                  <p className="text-sm font-medium">{userData.accountType}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Join Date</p>
                  <p className="text-sm font-medium">{userData.joinDate}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Images Generated</p>
                  <p className="text-sm font-medium">{userData.imagesGenerated}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium">Credits Remaining</p>
                  <p className="text-sm font-medium">{userData.credits}/{userData.creditsTotal}</p>
                </div>
                <Progress value={(userData.credits / userData.creditsTotal) * 100} className="h-2" />
                <div className="mt-4 flex justify-center">
                  <Button size="sm" className="btn-gradient">Buy Credits</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats and activity */}
      <Card className="glass-card border-none md:col-span-2">
        <CardHeader>
          <CardTitle>Activity & Stats</CardTitle>
          <CardDescription>Your usage statistics and recent activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-brand-purple/10 rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-1">Total Images</p>
              <p className="text-3xl font-semibold">{userData.imagesGenerated}</p>
            </div>
            <div className="bg-brand-blue/10 rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-1">This Month</p>
              <p className="text-3xl font-semibold">24</p>
            </div>
            <div className="bg-brand-teal/10 rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-1">Average Per Day</p>
              <p className="text-3xl font-semibold">3.2</p>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {/* Activity items */}
            <div className="flex items-start">
              <div className="bg-brand-purple/10 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                  <path d="M5 3a2 2 0 0 0-2 2"/>
                  <path d="M19 3a2 2 0 0 1 2 2"/>
                  <path d="M21 19a2 2 0 0 1-2 2"/>
                  <path d="M5 21a2 2 0 0 1-2-2"/>
                  <path d="M9 3h1"/>
                  <path d="M9 21h1"/>
                  <path d="M14 3h1"/>
                  <path d="M14 21h1"/>
                  <path d="M3 9v1"/>
                  <path d="M21 9v1"/>
                  <path d="M3 14v1"/>
                  <path d="M21 14v1"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Generated "Futuristic city with neon lights"</p>
                <p className="text-xs text-muted-foreground">Today, 2:34 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-blue/10 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M8 19l-4-4 4-4"/>
                  <path d="M16 5l4 4-4 4"/>
                  <path d="M16 9h-8"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Edited "Mountain landscape at sunset"</p>
                <p className="text-xs text-muted-foreground">Yesterday, 5:12 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-teal/10 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Purchased 50 additional credits</p>
                <p className="text-xs text-muted-foreground">May 14, 2023</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
