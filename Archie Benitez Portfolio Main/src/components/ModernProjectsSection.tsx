import { useRef, useEffect } from 'react';
import { Github, Youtube, Facebook, Instagram } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This website you are viewing right now! Built with modern web technologies to showcase projects and skills.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind'],
    platform: 'github',
    url: 'https://github.com/ArchieBenitez/Archie-Benitez'
  },
  {
    id: 2,
    title: 'Network Configuration',
    description: 'Detailed network setup and configuration for lab environments. Tutorial videos available on my YouTube channel.',
    image: 'https://images.unsplash.com/photo-1590608897129-79b4da7f9f6b?w=600&h=400&fit=crop',
    tags: ['Linux', 'Networking', 'Bash'],
    platform: 'youtube',
    url: 'https://www.youtube.com/@ArchieBenitez101'
  },
  {
    id: 3,
    title: 'Live Bootable Project',
    description: 'A Linux live bootable environment prepared for testing and deployment. Photos and details available on my social media.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    tags: ['Linux', 'Bootable USB', 'Virtualization'],
    platform: 'facebook',
    url: 'https://www.facebook.com/ArchieBenitez101/?rdid=JIqActSVxJ7NpdsG'
  },
  {
    id: 4,
    title: 'Live Bootable Project',
    description: 'Same live bootable project shared on Instagram for visual reference and additional images.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    tags: ['Linux', 'Bootable USB', 'Virtualization'],
    platform: 'instagram',
    url: 'https://www.instagram.com/archie.sc.qa/'
  },
  {
    id: 5,
    title: 'Project Coming Soon',
    description: 'Exciting project in progress. Stay tuned for updates and more details!',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&h=400&fit=crop',
    tags: ['TBD'],
    platform: 'github',
    url: '#'
  },
  {
    id: 6,
    title: 'Project Coming Soon',
    description: 'Another project under development. More content will be shared soon!',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    tags: ['TBD'],
    platform: 'youtube',
    url: '#'
  }
];

const platformStyles = {
  github: { color: 'bg-gray-900 text-white', icon: Github },
  youtube: { color: 'bg-red-600 text-white', icon: Youtube },
  facebook: { color: 'bg-blue-600 text-white', icon: Facebook },
  instagram: { color: 'bg-gradient-to-tr from-pink-500 via-orange-400 to-purple-500 text-white', icon: Instagram }
};

const ModernProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Projects Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work demonstrating problem-solving, creativity, and modern web development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => {
            const platform = platformStyles[project.platform];
            const Icon = platform.icon;
            return (
              <div key={project.id} className={`fade-in delay-${(index % 3 + 1) * 100} group h-full`}>
                <div className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                      {project.description}
                    </p>

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

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${platform.color} flex items-center justify-center gap-2 text-sm font-medium py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95`}
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

        {/* Visit My Projects Section */}
        <div className="text-center mt-16 fade-in delay-400">
          <h3 className="text-3xl font-bold text-foreground mb-4">Visit My Projects</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my work across platforms. Make sure to like, follow, and stay updated!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { platform: 'github', url: 'https://github.com/Archie-Benitez' },
              { platform: 'youtube', url: 'https://www.youtube.com/@ArchieBenitez101' },
              { platform: 'facebook', url: 'https://www.facebook.com/ArchieBenitez101/?rdid=JIqActSVxJ7NpdsG' },
              { platform: 'instagram', url: 'https://www.instagram.com/archie.sc.qa/' }
            ].map(({ platform, url }) => {
              const { color, icon: Icon } = platformStyles[platform];
              return (
                <a
                  key={platform}
                  href={url}
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

export default ModernProjectsSection;
