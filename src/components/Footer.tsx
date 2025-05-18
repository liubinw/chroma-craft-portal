
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-purple/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-brand-purple text-2xl font-bold">Imagine</span>
              <span className="bg-brand-purple text-white px-2 py-1 rounded-md text-xs">AI</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transform your ideas into stunning images with our AI-powered image generation platform.
              Fast, simple, and creative.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><NavLink to="/" className="hover:text-brand-purple transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-purple transition-colors">About</NavLink></li>
              <li><NavLink to="/pricing" className="hover:text-brand-purple transition-colors">Pricing</NavLink></li>
              <li><NavLink to="/dashboard" className="hover:text-brand-purple transition-colors">Dashboard</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><NavLink to="/privacy" className="hover:text-brand-purple transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-brand-purple transition-colors">Terms of Service</NavLink></li>
              <li><NavLink to="/cookies" className="hover:text-brand-purple transition-colors">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-purple/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Imagine AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
