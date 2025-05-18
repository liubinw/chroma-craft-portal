
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const isLoggedIn = !!user;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="glass-navbar fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-brand-purple text-3xl font-bold">Imagine</span>
          <span className="bg-brand-purple text-white px-2 py-1 rounded-md text-xs">AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="text-foreground hover:text-brand-purple transition-colors">
            Home
          </NavLink>
          <NavLink to="/about" className="text-foreground hover:text-brand-purple transition-colors">
            About
          </NavLink>
          <NavLink to="/pricing" className="text-foreground hover:text-brand-purple transition-colors">
            Pricing
          </NavLink>
        </div>

        {/* Auth Buttons or User Menu */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.user_metadata?.avatar_url || "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"} alt={user?.user_metadata?.username || "User"} />
                    <AvatarFallback><UserRound className="h-5 w-5" /></AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <NavLink to="/dashboard" className="flex w-full">Dashboard</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/profile" className="flex w-full">Profile</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/settings" className="flex w-full">Settings</NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <span className="flex w-full">Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <NavLink to="/login">Log in</NavLink>
              </Button>
              <Button className="btn-gradient" asChild>
                <NavLink to="/signup">Sign up</NavLink>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="glass-navbar md:hidden py-4 px-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className="text-foreground hover:text-brand-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="text-foreground hover:text-brand-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/pricing" className="text-foreground hover:text-brand-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </NavLink>
            
            {isLoggedIn ? (
              <>
                <NavLink to="/dashboard" className="text-foreground hover:text-brand-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Dashboard
                </NavLink>
                <NavLink to="/profile" className="text-foreground hover:text-brand-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Profile
                </NavLink>
                <button 
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-foreground hover:text-brand-purple transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" asChild onClick={() => setMobileMenuOpen(false)}>
                  <NavLink to="/login">Log in</NavLink>
                </Button>
                <Button className="btn-gradient" asChild onClick={() => setMobileMenuOpen(false)}>
                  <NavLink to="/signup">Sign up</NavLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
