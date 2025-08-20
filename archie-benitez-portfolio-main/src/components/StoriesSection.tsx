import { useState, useRef, useEffect } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'My First App',
    preview: 'Built my first React app...',
    content: 'Built my first React app during the pandemic. It was a simple todo list, but it sparked my passion for web development. The feeling of seeing my code come to life in the browser was incredible. This moment taught me that persistence and curiosity are the keys to mastering any technology.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 2,
    title: 'Learning JavaScript',
    preview: 'The journey from confusion to clarity...',
    content: 'JavaScript was initially overwhelming with its quirks and asynchronous nature. But once I understood closures, promises, and the event loop, everything clicked. It became my favorite language. The beauty of JavaScript lies in its flexibility and the vibrant ecosystem that surrounds it.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 3,
    title: 'First Client Project',
    preview: 'Successfully delivered my first paid project...',
    content: 'Landing my first client project was nerve-wracking but exciting. It was a portfolio website for a local photographer. The project taught me about client communication, deadlines, and real-world constraints. The satisfaction of delivering a product that exceeded expectations was priceless.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 4,
    title: 'Modern Stack',
    preview: 'Embracing new technologies...',
    content: 'Recently dove deep into Next.js, TypeScript, and Tailwind CSS. The developer experience is incredible, and the performance gains are noticeable. Always learning, always growing. The modern web development stack has evolved so rapidly, and staying current is both challenging and rewarding.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop',
    type: 'text',
  },
];

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openStory = (story: typeof stories[0]) => {
    setSelectedStory(story);
    setCurrentStoryIndex(stories.findIndex(s => s.id === story.id));
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  const nextStory = () => {
    const nextIndex = (currentStoryIndex + 1) % stories.length;
    setSelectedStory(stories[nextIndex]);
    setCurrentStoryIndex(nextIndex);
  };

  const prevStory = () => {
    const prevIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
    setSelectedStory(stories[prevIndex]);
    setCurrentStoryIndex(prevIndex);
  };

  return (
    <section id="stories" ref={sectionRef} className="py-24 px-4 bg-background relative">
      {/* Visual connection to About section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 transition-all duration-300">
            My Stories
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-300">
            Key moments and experiences that shaped my journey as a developer.
            Each story represents a milestone in my growth and learning.
          </p>
        </div>

        {/* Stories Grid - Facebook Stories style with proper spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`fade-in delay-${(index + 1) * 100} relative group cursor-pointer transition-all duration-500`}
              onMouseEnter={() => setHoveredStory(story.id)}
              onMouseLeave={() => setHoveredStory(null)}
              onClick={() => openStory(story)}
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden story-ring transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/30">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Story Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-xl transition-all duration-300">
                    {story.title}
                  </h3>
                  {hoveredStory === story.id && (
                    <p className="text-white/90 text-base leading-relaxed animate-fade-in max-h-24 overflow-hidden transition-all duration-300">
                      {story.preview}
                    </p>
                  )}
                </div>

                {/* Play Icon */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Play size={18} className="text-white" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="text-center fade-in delay-500">
          <div className="inline-flex items-center space-x-3 text-muted-foreground">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-base">Scroll to learn more about me</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="glass-card max-w-5xl w-full p-8 animate-scale-in relative">
            {/* Navigation arrows */}
            <button
              onClick={prevStory}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Previous story"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Next story"
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex justify-between items-start mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground transition-all duration-300">
                {selectedStory.title}
              </h2>
              <button
                onClick={closeStory}
                className="p-3 hover:bg-accent/50 rounded-full transition-all duration-300"
                aria-label="Close story"
              >
                <X size={28} className="text-foreground" />
              </button>
            </div>

            <div className="mb-8">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-80 md:h-96 object-cover rounded-2xl transition-all duration-300"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl transition-all duration-300">
                {selectedStory.content}
              </p>
            </div>

            {/* Story navigation dots */}
            <div className="mt-10 flex justify-center space-x-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedStory(stories[index]);
                    setCurrentStoryIndex(index);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={closeStory}
                className="btn-social btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoriesSection;