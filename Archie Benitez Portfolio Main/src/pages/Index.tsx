import { useState, useEffect } from 'react';
import HomeSection from '@/components/HomeSection';
import SocialNavbar from '@/components/SocialNavbar';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [addFriendText, setAddFriendText] = useState('Add Friend');
  const [isPageRevealed, setIsPageRevealed] = useState(false);

  // Show navbar when scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      if (!isPageRevealed) return;
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowNavbar(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPageRevealed]);

  // Add Friend / View Profile behavior
  const handleAddFriendClick = () => {
    const aboutSection = document.getElementById('about');

    if (addFriendText === 'Add Friend') {
      setAddFriendText('View Profile');
      setIsPageRevealed(true);
      document.body.style.overflow = 'auto'; // enable scrolling

      localStorage.setItem('addedFriend', 'true');

      // Smooth scroll to About section
      if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If already "View Profile", just scroll to About section
      if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize state from localStorage and prevent initial flash
  useEffect(() => {
    const added = localStorage.getItem('addedFriend');
    if (added === 'true') {
      setAddFriendText('View Profile');
      setIsPageRevealed(true);
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Social Navbar */}
      <SocialNavbar isVisible={showNavbar} />

      {/* Hero Section */}
      <HomeSection
        addFriendText={addFriendText}
        onAddFriendClick={handleAddFriendClick}
      />

      {/* Other Sections */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isPageRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <AboutSection />
        <ProjectSection />
        <ConnectSection />

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
