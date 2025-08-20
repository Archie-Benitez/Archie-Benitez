import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Download, Info } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

// Placeholder images for hero4 and hero5 until you add actual images
const hero4 = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop';
const hero5 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop';

const heroImages = [hero1, hero2, hero3, hero4, hero5];

interface HeroCarouselProps {
  onAddFriendClick: () => void;
  addFriendText: string;
}

const HeroCarousel = ({ onAddFriendClick, addFriendText }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000); // 8 seconds for better UX

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download functionality
    console.log('Download CV clicked');
    setIsMenuOpen(false);
  };

  const handleKnowMeMore = () => {
    // TODO: Implement know me more functionality - link to external website
    window.open('https://your-other-website.com', '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const handleMessageClick = () => {
    // Scroll to connect section
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full w-full">
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
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100 group"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Content Overlay - Optimized for all screen sizes including 1366x768 */}
      <div className="absolute inset-0 flex items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="hero-content text-center text-white px-2 sm:px-3 md:px-4 lg:px-6 max-w-5xl mx-auto">
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <div className="relative inline-block">
              {/* Responsive profile picture */}
              <img
                src={hero1}
                alt="Profile"
                className="hero-profile w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105"
              />
              {/* Online indicator positioned closer to profile picture */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-success rounded-full border-2 border-white shadow-lg"></div>
            </div>
          </div>
          
          {/* Smaller font sizes for better fit on all screens */}
          <h1 className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent transition-all duration-300">
            Archie A. Benitez
          </h1>
          <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/90 mb-4 sm:mb-6 md:mb-8 lg:mb-12 font-light transition-all duration-300">
            Conquering Comfort Zone
          </p>

          {/* Action Buttons - Optimized layout to prevent overlapping on all screens */}
          <div className="hero-buttons btn-container flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <button
              onClick={onAddFriendClick}
              className="btn-social btn-primary text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] transition-all duration-300 hover:scale-105"
            >
              {addFriendText}
            </button>
            <button 
              onClick={handleMessageClick}
              className="btn-social btn-glass text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] transition-all duration-300 hover:scale-105"
            >
              Message
            </button>
            
            {/* Hamburger Menu - Positioned to the right of Message button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn-social btn-glass text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 min-w-[40px] sm:min-w-[50px] md:min-w-[60px] transition-all duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                <Menu size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
              </button>
              
              {/* Dropdown Menu - Positioned to the right side of the hamburger button */}
              {isMenuOpen && (
                <div className="absolute top-0 left-full ml-2 sm:ml-3 w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl z-50 transition-all duration-300">
                  <div className="py-2 sm:py-3">
                    <button
                      onClick={handleDownloadCV}
                      className="w-full flex items-center px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 text-white hover:bg-white/20 transition-colors duration-200 text-left text-xs sm:text-sm md:text-base lg:text-lg"
                    >
                      <Download size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-3 md:mr-4" />
                      Download CV
                    </button>
                    <button
                      onClick={handleKnowMeMore}
                      className="w-full flex items-center px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 text-white hover:bg-white/20 transition-colors duration-200 text-left text-xs sm:text-sm md:text-base lg:text-lg"
                    >
                      <Info size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-2 sm:mr-3 md:mr-4" />
                      Know Me More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Responsive sizing */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;