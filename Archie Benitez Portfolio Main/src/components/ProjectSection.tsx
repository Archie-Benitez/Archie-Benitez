import React, { useRef, useEffect, useState } from 'react';
import { Github, Youtube, Facebook, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import project1img from '../assets/project-1.jpg';
import project2img from '../assets/project-2.jpg';

const templateSlides = [
  'https://via.placeholder.com/600x400?text=Template+Slide+1',
  'https://via.placeholder.com/600x400?text=Template+Slide+2',
  'https://via.placeholder.com/600x400?text=Template+Slide+3',
];

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    visible: true,
    description: 'This website you are viewing right now! Built with modern web technologies to showcase projects and skills.',
    slides: [project1img, 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop', ...templateSlides],
    tags: ['React', 'TypeScript', 'Tailwind'],
    platform: 'github',
    url: 'https://github.com/Archie-Benitez/Archie-Benitez',
    alignment: 'center'
  },
  {
    id: 2,
    title: 'Router Configuration',
    visible: true,
    description: 'This video is a hands-on demonstration project for my IT portfolio, showcasing practical networking skills using the D-Link DIR-605L router.',
    slides: [project2img, ...templateSlides],
    tags: ['Router', 'Setup', 'Networking'],
    platform: 'youtube',
    url: 'https://youtu.be/z_qFKAg6ZAw',
    alignment: 'left'
  },
  {
    id: 3,
    title: 'Live Bootable Project',
    visible: true,
    description: 'A Linux live bootable environment prepared for testing and deployment. Photos and details available on my social media.',
    slides: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop', ...templateSlides],
    tags: ['Linux', 'Bootable USB', 'Virtualization'],
    platform: 'facebook',
    url: 'https://www.facebook.com/ArchieBenitez101/?rdid=JIqActSVxJ7NpdsG',
    alignment: 'center'
  },
  {
    id: 4,
    title: 'Live Bootable Project',
    visible: false,
    description: 'Same live bootable project shared on Instagram for visual reference and additional images.',
    slides: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop', ...templateSlides],
    tags: ['Linux', 'Bootable USB', 'Virtualization'],
    platform: 'instagram',
    url: 'https://www.instagram.com/archie.sc.qa/',
    alignment: 'center'
  },
  {
    id: 5,
    title: 'Project Coming Soon',
    visible: false,
    description: 'Exciting project in progress. Stay tuned for updates and more details!',
    slides: [...templateSlides],
    tags: ['TBD'],
    platform: 'github',
    url: '#',
    alignment: 'center'
  },
  {
    id: 6,
    title: 'Project Coming Soon',
    visible: false,
    description: 'Another project under development. More content will be shared soon!',
    slides: [...templateSlides],
    tags: ['TBD'],
    platform: 'youtube',
    url: '#',
    alignment: 'center'
  }
];

const platformStyles = {
  github: { color: 'bg-gray-900 text-white', icon: Github },
  youtube: { color: 'bg-red-600 text-white', icon: Youtube },
  facebook: { color: 'bg-blue-600 text-white', icon: Facebook },
  instagram: { color: 'bg-gradient-to-tr from-pink-500 via-orange-400 to-purple-500 text-white', icon: Instagram }
};

const ProjectSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) =>
              setTimeout(() => el.classList.add('visible'), index * 150)
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll modal into view when opening
  useEffect(() => {
    if (activeModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeModal]);

  const handlePrevSlide = (slidesLength: number) =>
    setSlideIndex((prev) => (prev - 1 + slidesLength) % slidesLength);
  const handleNextSlide = (slidesLength: number) =>
    setSlideIndex((prev) => (prev + 1) % slidesLength);

  const activeProject = projects.find((p) => p.id === activeModal);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 bg-muted/30 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work demonstrating problem-solving, creativity, and modern web development skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 justify-center sm:grid-cols-2 md:grid-cols-3">
          {projects.filter((p) => p.visible).map((project) => {
            const platform = platformStyles[project.platform];
            const Icon = platform.icon;

            // Custom alignment for Router Configuration
            const alignmentClass = project.id === 2 ? 'justify-start' : 'justify-center';

            return (
              <div key={project.id} className={`fade-in group flex ${alignmentClass}`}>
                <div
                  className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 w-full max-w-[260px] md:max-w-full flex flex-col cursor-pointer"
                  onClick={() => { setActiveModal(project.id); setSlideIndex(0); }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.slides[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${platform.color} flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
                    >
                      <Icon size={16} />
                      {project.platform.toUpperCase()}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline Modal */}
        {activeProject && (
          <div
            ref={modalRef}
            className="w-full max-w-3xl mx-auto mt-8 bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden text-white relative"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute -top-4 -right-4 p-3 rounded-full bg-white/30 hover:bg-white/50 transition z-20"
            >
              <X size={20} />
            </button>

            {/* Carousel */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden rounded-lg mb-4">
              {activeProject.slides.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide}
                  alt={activeProject.title}
                  className={`absolute w-full h-full object-cover transition-transform duration-500 rounded-lg ${
                    idx === slideIndex
                      ? 'translate-x-0 z-10'
                      : idx < slideIndex
                      ? '-translate-x-full z-0'
                      : 'translate-x-full z-0'
                  }`}
                />
              ))}

              {activeProject.slides.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrevSlide(activeProject.slides.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition z-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => handleNextSlide(activeProject.slides.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition z-20"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">{activeProject.title}</h3>
              <p className="text-muted-foreground">{activeProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platformStyles[activeProject.platform].color} flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                {React.createElement(platformStyles[activeProject.platform].icon, { size: 16 })}
                {activeProject.platform.toUpperCase()}
              </a>
            </div>
          </div>
        )}

        {/* Visit My Projects */}
        <div className="text-center mt-16 fade-in delay-400">
          <h3 className="text-3xl font-bold text-foreground mb-4">Visit My Projects</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my work across platforms. Make sure to like, follow, and stay updated!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['github', 'youtube', 'facebook', 'instagram'].map((platform) => {
              const { color, icon: Icon } = platformStyles[platform];
              const urlMap: Record<string, string> = {
                github: 'https://github.com/ArchieBenitez',
                youtube: 'https://www.youtube.com/@ArchieBenitez101',
                facebook: 'https://www.facebook.com/ArchieBenitez101/?rdid=JIqActSVxJ7NpdsG',
                instagram: 'https://www.instagram.com/archie.sc.qa/'
              };
              return (
                <a
                  key={platform}
                  href={urlMap[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} flex items-center justify-center gap-2 text-lg font-medium px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
                >
                  <Icon size={20} />
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
