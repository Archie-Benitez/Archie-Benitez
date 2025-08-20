import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin panel for managing online stores with real-time analytics and inventory management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-demo-link-1.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/ecommerce-dashboard' // Placeholder - replace with actual GitHub link
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative workspace for teams to organize, track, and complete projects efficiently.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://your-demo-link-2.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/task-management-app' // Placeholder - replace with actual GitHub link
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Smart content creation platform powered by machine learning for marketing teams.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    liveUrl: 'https://your-demo-link-3.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/ai-content-generator' // Placeholder - replace with actual GitHub link
  },
  {
    id: 4,
    title: 'Financial Tracker',
    description: 'Personal finance management app with budget tracking and expense categorization.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase'],
    liveUrl: 'https://your-demo-link-4.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/financial-tracker' // Placeholder - replace with actual GitHub link
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Modern social networking app with real-time messaging and content sharing features.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    liveUrl: 'https://your-demo-link-5.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/social-media-platform' // Placeholder - replace with actual GitHub link
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Comprehensive educational platform for online courses with interactive features.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    liveUrl: 'https://your-demo-link-6.com', // Placeholder - replace with actual demo link
    githubUrl: 'https://github.com/yourusername/learning-management-system' // Placeholder - replace with actual GitHub link
  }
];

const ModernProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work and creative solutions that demonstrate 
            my expertise in modern web development and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`fade-in delay-${(index % 3 + 1) * 100} group h-full`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay with actions */}
                  <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-social btn-primary text-sm p-3 rounded-full"
                      aria-label="View live project"
                    >
                      <Play size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-social btn-glass text-sm p-3 rounded-full"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-social btn-primary text-sm flex-1 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-social btn-glass text-sm flex-1 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16 fade-in delay-400">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-social btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModernProjectsSection;