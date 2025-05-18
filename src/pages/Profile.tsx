
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserProfile from '@/components/profile/UserProfile';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
          
          <UserProfile />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
