import { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface Story {
  id: number;
  title: string;
  preview: string;
  content: string;
  image: string;
  type: 'text' | 'video';
}

const stories: Story[] = [
  {
    id: 1,
    title: 'My First App',
    preview: 'Built my first React app...',
    content: 'Built my first React app during the pandemic. It was a simple todo list, but it sparked my passion for web development. The feeling of seeing my code come to life in the browser was incredible.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 2,
    title: 'Learning JavaScript',
    preview: 'The journey from confusion to clarity...',
    content: 'JavaScript was initially overwhelming with its quirks and asynchronous nature. But once I understood closures, promises, and the event loop, everything clicked.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 3,
    title: 'First Client Project',
    preview: 'Successfully delivered my first paid project...',
    content: 'Landing my first client project was nerve-wracking but exciting. It was a portfolio website for a local photographer. The satisfaction of delivering a product that exceeded expectations was priceless.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop',
    type: 'text',
  },
  {
    id: 4,
    title: 'Modern Stack',
    preview: 'Embracing new technologies...',
    content: 'Recently dove deep into Next.js, TypeScript, and Tailwind CSS. Always learning, always growing. The modern web development stack has evolved so rapidly, and staying current is both challenging and rewarding.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop',
    type: 'text',
  },
];

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) => setTimeout(() => el.classList.add('visible'), index * 100));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openStory = (story: Story) => {
    setSelectedStory(story);
    setCurrentStoryIndex(stories.findIndex((s) => s.id === story.id));
  };

  const closeStory = () => setSelectedStory(null);

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

  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => nextStory(),
    onSwipedRight: () => prevStory(),
    trackMouse: true,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedStory) return;
      if (e.key === 'ArrowLeft') prevStory();
      if (e.key === 'ArrowRight') nextStory();
      if (e.key === 'Escape') closeStory();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedStory, currentStoryIndex]);

  return (
    <section id="stories" ref={sectionRef} className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Stories</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Key moments and experiences that shaped my journey as a developer.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-shrink-0 w-24 md:w-32 cursor-pointer relative"
              onClick={() => openStory(story)}
            >
              <div className="aspect-square rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-8 px-4 md:py-16"
          {...handlers}
        >
          <div className="relative bg-white rounded-2xl w-full max-w-md md:max-w-3xl shadow-lg overflow-hidden transition-transform transform duration-300">
            {/* Close button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/30 hover:bg-white/60 transition"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={prevStory}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/60 transition hidden md:flex"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/60 transition hidden md:flex"
            >
              <ChevronRight size={28} />
            </button>

            <div className="p-4 md:p-6 max-h-[90vh] overflow-y-auto">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-4 md:mb-6"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
                {selectedStory.title}
              </h2>
              <p className="text-muted-foreground">{selectedStory.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoriesSection;
