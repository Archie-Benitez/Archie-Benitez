import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Download, Info } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';

const heroImages = [hero2, hero3, hero4, hero5, hero6];

interface HomeSectionProps {
  addFriendText: string;
  onAddFriendClick: () => void;
  variant?: 'hero' | 'card'; // 👈 new prop
}

const HomeSection = ({ addFriendText, onAddFriendClick, variant = 'hero' }: HomeSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Archie-Benitez-CV.pdf';
    link.download = 'Archie-Benitez-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  const handleKnowMeMore = () => {
    window.open('https://your-other-website.com', '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const handleMessageClick = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) connectSection.scrollIntoView({ behavior: 'smooth' });
  };

  // 👇 responsive sizing based on variant
  const profileSizeClasses =
    variant === 'hero'
      ? 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60'
      : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32';

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full sm:h-screen object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-[25vh] md:mt-[22vh] lg:mt-[20vh] px-4 sm:px-6 md:px-8 lg:px-12 z-10 max-w-screen-xl mx-auto space-y-2 md:space-y-3 lg:space-y-4">
        {/* Profile picture */}
        <div className="relative">
          <img
            src={hero1}
            alt="Profile"
            className={`${profileSizeClasses} rounded-full object-cover object-bottom border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105`}
          />
        </div>

        {/* Title & Subtitle */}
        {variant === 'hero' && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent text-center leading-tight">
              Archie A. Benitez
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-white/90 text-center font-light leading-snug">
              Conquering Comfort Zone
            </p>
          </>
        )}

        {/* Buttons */}
        {variant === 'hero' && (
          <div className="flex flex-wrap justify-center gap-2 mt-2 items-center">
            <button
              onClick={onAddFriendClick}
              className="btn-social btn-primary px-6 py-3 text-lg sm:text-xl md:text-xl lg:text-2xl min-w-[140px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
            >
              {addFriendText}
            </button>
            <button
              onClick={handleMessageClick}
              className="btn-social btn-glass px-6 py-3 text-lg sm:text-xl md:text-xl lg:text-2xl min-w-[140px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
            >
              Message
            </button>

            {/* Hamburger menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn-social btn-glass px-5 py-3 text-lg sm:text-xl md:text-xl lg:text-2xl min-w-[40px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
              >
                <Menu size={20} />
              </button>

              {/* Desktop dropdown */}
              <div className="hidden sm:block">
                {isMenuOpen && (
                  <div className="absolute top-0 left-full ml-2 w-44 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl z-50">
                    <div className="flex flex-col py-2">
                      <button
                        onClick={handleDownloadCV}
                        className="flex items-center px-3 py-2 text-white hover:bg-white/20 text-left text-base sm:text-lg"
                      >
                        <Download size={16} className="mr-2" /> Download CV
                      </button>
                      <button
                        onClick={handleKnowMeMore}
                        className="flex items-center px-3 py-2 text-white hover:bg-white/20 text-left text-base sm:text-lg"
                      >
                        <Info size={16} className="mr-2" /> Know Me More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Static Added to Friend Label */}
        {addFriendText === 'View Profile' && variant === 'hero' && (
          <div className="mt-2 text-sm text-green-500 flex items-center justify-center gap-1 select-none">
            <span>✅</span>
            <span>added to friend</span>
          </div>
        )}
      </div>

      {/* Mobile Bottom Sheet */}
      {isMenuOpen && variant === 'hero' && (
        <div className="fixed inset-0 z-50 flex justify-center items-end sm:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Bottom sheet */}
          <div className="relative w-full bg-black/90 backdrop-blur-md rounded-t-xl p-4 space-y-3 animate-slide-up">
            <button
              onClick={handleDownloadCV}
              className="flex items-center w-full px-3 py-3 text-white hover:bg-white/20 rounded-lg text-left text-base"
            >
              <Download size={16} className="mr-2" /> Download CV
            </button>
            <button
              onClick={handleKnowMeMore}
              className="flex items-center w-full px-3 py-3 text-white hover:bg-white/20 rounded-lg text-left text-base"
            >
              <Info size={16} className="mr-2" /> Know Me More
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center w-full px-3 py-3 text-red-500 hover:bg-white/20 rounded-lg text-left text-base"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
