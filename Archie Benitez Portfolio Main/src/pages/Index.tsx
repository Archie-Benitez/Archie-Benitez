import { useState, useEffect } from 'react';
import HeroCarousel from '@/components/HomeSection';
import SocialNavbar from '@/components/SocialNavbar';
import EnhancedAboutSection from '@/components/AboutSection';
import StoriesSection from '@/components/StoriesSection';
import ModernProjectsSection from '@/components/ProjectSection';
import EnhancedConnectSection from '@/components/ConnectSection';

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [addFriendText, setAddFriendText] = useState('Add Friend');
  const [hasClickedViewProfile, setHasClickedViewProfile] = useState(false);
  const [isPageRevealed, setIsPageRevealed] = useState(false);

  // Handle scroll detection for navbar visibility - show only after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      if (!isPageRevealed) return; // Don't show navbar until page is revealed
      
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is full viewport height
      
      // Show navbar only after scrolling past the hero section
      setShowNavbar(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPageRevealed]);

  // Handle Add Friend / View Profile toggle
  const handleAddFriendClick = () => {
    if (addFriendText === 'Add Friend') {
      setAddFriendText('View Profile');
      setHasClickedViewProfile(true);
      setIsPageRevealed(true);
      
      // Enable scrolling and reveal sections
      document.body.style.overflow = 'auto';
      
      // Smooth scroll to stories section after a brief delay
      setTimeout(() => {
        const storiesSection = document.getElementById('stories');
        if (storiesSection) {
          storiesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already "View Profile", scroll to stories section again
      const storiesSection = document.getElementById('stories');
      if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Reset button text only on page refresh/reload
  useEffect(() => {
    // Check if this is a fresh page load
    if (performance.navigation.type === 1) {
      // Page was refreshed
      setAddFriendText('Add Friend');
      setHasClickedViewProfile(false);
      setIsPageRevealed(false);
      document.body.style.overflow = 'hidden'; // Prevent scrolling initially
    } else {
      // Initial load - prevent scrolling
      document.body.style.overflow = 'hidden';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Social Navbar - only visible when scrolled past hero */}
      <SocialNavbar isVisible={showNavbar} />

      {/* Hero Carousel Section */}
      <HeroCarousel 
        onAddFriendClick={handleAddFriendClick}
        addFriendText={addFriendText}
      />

      {/* Rest of the sections - only visible after page is revealed */}
      <div className={`transition-all duration-1000 ease-in-out ${
        isPageRevealed 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Stories Section - First after hero */}
        <StoriesSection />

        {/* Enhanced About Section with fade-in animations */}
        <EnhancedAboutSection />

        {/* Modern Projects Section */}
        <ModernProjectsSection />

        {/* Enhanced Connect Section */}
        <EnhancedConnectSection />

        {/* Footer */}
        <footer className="py-12 px-4 bg-muted/50 border-t border-border/20 transition-all duration-300">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-muted-foreground text-lg transition-all duration-300">
              © 2025 Archie A. Benitez. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;