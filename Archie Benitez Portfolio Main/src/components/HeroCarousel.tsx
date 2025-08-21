import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Download, Info } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const handleDownloadCV = () => { console.log('Download CV clicked'); setIsMenuOpen(false); };
  const handleKnowMeMore = () => { window.open('https://your-other-website.com', '_blank', 'noopener,noreferrer'); setIsMenuOpen(false); };
  const handleMessageClick = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) connectSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 h-full w-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Hero slide ${index + 1}`} className="h-full w-full object-cover" />
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
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-success rounded-full border-2 border-white shadow-lg"></div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent text-center leading-tight">
          Archie A. Benitez
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-white/90 text-center font-light leading-snug">
          Conquering Comfort Zone
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2 items-center">
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
              className="btn-social btn-glass px-5 py-3 text-lg sm:text-xl md:text-xl lg:text-2xl min-w-[60px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
            >
              <Menu size={20} />
            </button>
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

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
