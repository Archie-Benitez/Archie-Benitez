import { useEffect, useRef } from 'react';
import { Code2, Palette, Rocket, Heart, Coffee, Globe } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Full Stack Development', level: 95 },
  { icon: Palette, name: 'UI/UX Design', level: 88 },
  { icon: Rocket, name: 'Project Management', level: 92 },
  { icon: Globe, name: 'Web Technologies', level: 96 },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Availability' },
];

const AboutSection = () => {
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
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional digital experiences. I believe in clean code, elegant design, 
            and the power of technology to solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Info */}
          <div className="space-y-8 fade-in delay-100">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started my journey in web development 3 years ago with a curiosity 
                  about how the internet works. What began as a hobby quickly became 
                  a passion as I discovered the joy of bringing ideas to life through code.
                </p>
                <p>
                  Today, I specialize in React, Node.js, and modern web technologies, 
                  always staying up-to-date with the latest industry trends and best practices.
                </p>
                <div className="flex items-center space-x-6 mt-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="text-red-500" size={20} />
                    <span>Passionate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="text-amber-600" size={20} />
                    <span>Coffee Lover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 fade-in delay-200">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map(({ icon: Icon, name, level }, index) => (
                <div key={name} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Icon className="text-primary" size={20} />
                      <span className="font-medium text-foreground">{name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in delay-300">
          {stats.map(({ number, label }, index) => (
            <div key={label} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;