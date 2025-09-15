import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Download, UserCheck } from 'lucide-react';
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
  variant?: 'hero' | 'card';
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
    const cvUrl = '/Archie-Benitez-CV.pdf';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(cvUrl, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Archie-Benitez-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsMenuOpen(false);
  };

  const handleMessageClick = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) connectSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Enlarged sizes for profile picture
  const profileSizeClasses =
    variant === 'hero'
      ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'
      : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36';

  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Cover Photo */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
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
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

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
      </div>

      {/* Profile + Content */}
      <div className="flex-1 flex flex-col items-center justify-start z-30 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Profile overlaps */}
        <img
          src={hero1}
          alt="Profile"
          className={`${profileSizeClasses} rounded-full object-cover object-bottom border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105`}
        />

        {/* Name & Tagline */}
        {variant === 'hero' && (
          <>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white">
              Archie A. Benitez
            </h1>
            <p className="mt-1 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-center font-light leading-snug">
              Conquering Comfort Zone
            </p>
          </>
        )}

        {/* Buttons */}
        {variant === 'hero' && (
          <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6 items-center">
            <button
              onClick={onAddFriendClick}
              className="btn-social btn-primary px-5 sm:px-7 py-2.5 sm:py-3.5 text-lg sm:text-xl min-w-[140px] sm:min-w-[160px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
            >
              {addFriendText}
            </button>
            <button
              onClick={handleMessageClick}
              className="btn-social btn-glass px-5 sm:px-7 py-2.5 sm:py-3.5 text-lg sm:text-xl min-w-[140px] sm:min-w-[160px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
            >
              Message
            </button>

            {/* Hamburger menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn-social btn-glass px-5 sm:px-6 py-2.5 sm:py-3.5 text-lg min-w-[44px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
              >
                <Menu size={20} />
              </button>

              {/* Dropdown (Desktop) */}
              <div className="hidden sm:block">
                {isMenuOpen && (
                  <div
                    className="absolute top-0 left-full ml-2 w-48 
                      bg-white/90 dark:bg-black/80 
                      backdrop-blur-lg border border-gray-200 dark:border-white/20 
                      rounded-xl shadow-xl z-50"
                  >
                    <div className="flex flex-col py-2">
                      <button
                        onClick={handleDownloadCV}
                        className="flex items-center px-3 py-2 
                          text-gray-900 dark:text-white 
                          hover:bg-gray-100 dark:hover:bg-white/20 
                          text-left text-lg"
                      >
                        <Download size={18} className="mr-2" /> Download CV
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Added to Friend Label */}
        {addFriendText === 'View Profile' && variant === 'hero' && (
          <div className="mt-3">
            <span
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
              bg-green-100 text-green-700 text-sm sm:text-base font-medium shadow-sm"
            >
              <UserCheck size={16} /> Added to friend
            </span>
          </div>
        )}
      </div>

      {/* Mobile Bottom Sheet */}
      {isMenuOpen && variant === 'hero' && (
        <div className="fixed inset-0 z-50 flex justify-center items-end sm:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-full bg-black/90 backdrop-blur-md rounded-t-xl p-4 space-y-3 animate-slide-up">
            <button
              onClick={handleDownloadCV}
              className="flex items-center w-full px-3 py-3 text-white hover:bg-white/20 rounded-lg text-left text-base"
            >
              <Download size={16} className="mr-2" /> Download CV
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
