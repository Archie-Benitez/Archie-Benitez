import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

// Online images
const hero1 = 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=400&fit=crop';
const hero2 = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop';
const hero3 = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop';

interface Slide {
  image: string;
  content: string;
}

interface Story {
  id: number;
  title: string;
  preview: string;
  slides: Slide[];
  type: 'text' | 'video';
}

// All 10 stories restored
const stories: Story[] = [
  {
    id: 1,
    title: 'My First App',
    preview: 'Built my first React app...',
    type: 'text',
    slides: [
      { image: hero1, content: 'Built my first React app during the pandemic...' },
      { image: hero2, content: 'Added local storage features to save tasks...' },
      { image: hero3, content: 'Refined the UI with Tailwind CSS...' },
    ],
  },
  {
    id: 2,
    title: 'Learning JavaScript',
    preview: 'The journey from confusion to clarity...',
    type: 'text',
    slides: [
      { image: hero2, content: 'JavaScript was overwhelming at first...' },
      { image: hero3, content: 'Understanding closures, promises, and the event loop...' },
      { image: hero1, content: 'Built small projects to solidify concepts...' },
    ],
  },
  {
    id: 3,
    title: 'First Client Project',
    preview: 'Delivered my first paid project...',
    type: 'text',
    slides: [
      { image: hero1, content: 'Worked on a photographer’s portfolio website...' },
      { image: hero2, content: 'Handled responsive design challenges...' },
      { image: hero3, content: 'Delivered successfully and received feedback...' },
    ],
  },
  {
    id: 4,
    title: 'Modern Stack',
    preview: 'Embracing new technologies...',
    type: 'text',
    slides: [
      { image: hero2, content: 'Learned Next.js, TypeScript, Tailwind CSS...' },
      { image: hero3, content: 'Built fast, scalable apps...' },
      { image: hero1, content: 'Experimented with SSR and static generation...' },
    ],
  },
  {
    id: 5,
    title: 'Learning Tailwind',
    preview: 'Mastering styling quickly...',
    type: 'text',
    slides: [
      { image: hero3, content: 'Tailwind allowed rapid prototyping...' },
      { image: hero1, content: 'Maintained clean code and consistent design...' },
      { image: hero2, content: 'Iteration was faster and learning fun...' },
    ],
  },
  {
    id: 6,
    title: 'AI Exploration',
    preview: 'Diving into AI tools...',
    type: 'text',
    slides: [
      { image: hero1, content: 'Explored ChatGPT, Lovable, Cursor AI for projects...' },
      { image: hero2, content: 'Experimented with automation and productivity...' },
      { image: hero3, content: 'Implemented AI into personal workflows...' },
    ],
  },
  {
    id: 7,
    title: 'CapCut Editing',
    preview: 'Video editing journey...',
    type: 'text',
    slides: [
      { image: hero2, content: 'Learned basic editing techniques with CapCut...' },
      { image: hero3, content: 'Added effects and transitions for dynamic storytelling...' },
      { image: hero1, content: 'Created personal project videos and tutorials...' },
    ],
  },
  {
    id: 8,
    title: 'GitHub Projects',
    preview: 'Version control mastery...',
    type: 'text',
    slides: [
      { image: hero1, content: 'Hosted projects on GitHub for collaboration...' },
      { image: hero2, content: 'Used branching, pull requests, and issues effectively...' },
      { image: hero3, content: 'Maintained clean commit history and docs...' },
    ],
  },
  {
    id: 9,
    title: 'Python Learning',
    preview: 'Programming growth...',
    type: 'text',
    slides: [
      { image: hero2, content: 'Started with Python basics and syntax...' },
      { image: hero3, content: 'Built small scripts for automation...' },
      { image: hero1, content: 'Experimented with libraries like pandas and matplotlib...' },
    ],
  },
  {
    id: 10,
    title: 'Vite & React Projects',
    preview: 'Modern frontend journey...',
    type: 'text',
    slides: [
      { image: hero3, content: 'Set up projects using Vite for fast dev environment...' },
      { image: hero1, content: 'Built responsive React apps with Tailwind CSS...' },
      { image: hero2, content: 'Deployed apps using Vercel for production...' },
    ],
  },
];

// Updated tech stack
const techStack = [
  { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'CapCut', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/41/CapCut_icon.png' },
  { name: 'Canva', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Canva_Logo.png' },
  { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Python', icon: 'https://www.python.org/static/community_logos/python-logo.png' },
  { name: 'Kali Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Kali-Linux-2020.4-logo.svg' },
  { name: 'AI Tools', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg' },
  { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
];

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const sectionRef = useRef<HTMLElement>(null);
  const slideTimer = useRef<NodeJS.Timeout | null>(null);

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
    setCurrentSlideIndex(0);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeStory = () => {
    setSelectedStory(null);
    if (slideTimer.current) clearTimeout(slideTimer.current);
  };

  const nextSlide = () => {
    if (!selectedStory) return;
    setDirection('right');
    setCurrentSlideIndex((prev) => (prev + 1) % selectedStory.slides.length);
  };

  const prevSlide = () => {
    if (!selectedStory) return;
    setDirection('left');
    setCurrentSlideIndex((prev) => (prev - 1 + selectedStory.slides.length) % selectedStory.slides.length);
  };

  useEffect(() => {
    if (!selectedStory) return;
    slideTimer.current = setTimeout(nextSlide, 5000);
    return () => {
      if (slideTimer.current) clearTimeout(slideTimer.current);
    };
  }, [currentSlideIndex, selectedStory]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section id="stories" ref={sectionRef} className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 fade-in opacity-0 transition-opacity duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Stories</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Key moments and experiences that shaped my journey as a developer.
          </p>
        </div>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-shrink-0 w-28 md:w-36 cursor-pointer text-center transform transition-transform duration-300 hover:scale-105 fade-in opacity-0"
              onClick={() => openStory(story)}
            >
              <div className="aspect-square rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300">
                <img src={story.slides[0].image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground mt-1 block">{story.title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110 fade-in opacity-0"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />
              <span className="text-xs md:text-sm mt-1 text-muted-foreground group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedStory && (
        <div
          className="absolute inset-0 z-50 flex flex-col justify-start items-center text-white px-4 py-8 transition-all duration-500"
          {...handlers}
        >
          <div className="relative w-full max-w-2xl md:max-w-3xl bg-black/90 rounded-xl p-6 shadow-xl overflow-hidden">
            {/* Progress bar */}
            <div className="flex space-x-1 mb-4">
              {selectedStory.slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    idx <= currentSlideIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={closeStory}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/20 hover:bg-white/40 transition z-20"
            >
              <X size={20} />
            </button>

            {/* Slide with smooth transition and arrows */}
            <div className="relative h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden rounded-lg">
              {selectedStory.slides.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.image}
                  alt={selectedStory.title}
                  className={`absolute w-full h-full object-cover transition-transform duration-500 rounded-lg ${
                    idx === currentSlideIndex
                      ? 'translate-x-0 z-10'
                      : idx < currentSlideIndex
                      ? '-translate-x-full z-0'
                      : 'translate-x-full z-0'
                  }`}
                />
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">{selectedStory.title}</h3>
              <p className="text-md md:text-lg leading-relaxed">
                {selectedStory.slides[currentSlideIndex].content}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Scroll indicator */}
        <div className="text-center mt-16 fade-in delay-400">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm">Scroll to see more about me</span>
            <ChevronDown className="animate-bounce" size={16} />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

    </section>
  );
};

export default StoriesSection;
