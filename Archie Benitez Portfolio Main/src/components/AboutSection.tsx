import { useEffect, useRef, useState } from 'react';
import { Code2, Rocket, Globe, Heart, Coffee, Lightbulb, ChevronDown, Users, BarChart2 } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Programming & Web Development', level: 32 },
  { icon: Globe, name: 'Network Engineering & Cybersecurity', level: 43 },
  { icon: Rocket, name: 'Project Management', level: 68 },
  { icon: BarChart2, name: 'Marketing & Communication', level: 38 },
];

const stats = [
  { number: 3, label: 'Projects Completed' },
  { number: 3, label: 'Work Experience (Years)' },
  { number: 1, label: 'Certifications' },
  { number: null, label: 'Availability' },
];

const softSkills = [
  { icon: Heart, name: 'Attention to Detail', description: 'Meticulous and thorough, ensuring high-quality results.' },
  { icon: Rocket, name: 'Problem Solver', description: 'Quickly identifies and resolves challenges efficiently.' },
  { icon: Globe, name: 'Fast Learner', description: 'Able to quickly adapt and master new tools and technologies.' },
  { icon: Code2, name: 'Time Management', description: 'Organized and efficient, meeting deadlines consistently.' },
  { icon: Coffee, name: 'Team Player', description: 'Collaborative approach, working well in diverse teams.' },
  { icon: Users, name: 'Reliable', description: 'Dependable and consistent in delivering quality results.' },
];

// Tech icons
const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [skillWidths, setSkillWidths] = useState<number[]>(skills.map(() => 0));
  const [softVisible, setSoftVisible] = useState<boolean[]>(softSkills.map(() => false));
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statCounts, setStatCounts] = useState<number[]>(stats.map((s) => s.number ?? 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setSkillWidths((prev) => {
                  const newWidths = [...prev];
                  newWidths[index] = skill.level;
                  return newWidths;
                });
              }, index * 200);
            });

            softSkills.forEach((_, index) => {
              setTimeout(() => {
                setSoftVisible((prev) => {
                  const newVis = [...prev];
                  newVis[index] = true;
                  return newVis;
                });
              }, index * 150);
            });

            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add('visible'), index * 100);
            });

            if (!statsAnimated) {
              stats.forEach((stat, index) => {
                if (stat.label !== 'Availability') {
                  const increment = (stat.number ?? 0) / 50;
                  let current = 0;
                  const interval = setInterval(() => {
                    current += increment;
                    if (current >= (stat.number ?? 0)) {
                      current = stat.number ?? 0;
                      clearInterval(interval);
                    }
                    setStatCounts((prev) => {
                      const newCounts = [...prev];
                      newCounts[index] = Math.floor(current);
                      return newCounts;
                    });
                  }, 20);
                }
              });
              setStatsAnimated(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen py-16 px-6 sm:px-8 md:px-12">
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* About Me */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a 21-year-old professional working abroad as a Sales Coordinator at a logistics company. 
            My main focus is landing a career in IT, especially in Networking or Cybersecurity. 
            Currently, I'm pursuing certificates and continuously learning and implementing skills in 
            cybersecurity, network engineering, and programming. I take pride in delivering exactly what is expected — no shortcuts, just dedication and hard work.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-6 fade-in">Core Skills & Attributes</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
            Key qualities that define how I work and approach challenges:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-4 sm:p-6 transition-all duration-300 ease-out
                  ${softVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md min-h-[100px] sm:min-h-[120px]`}
              >
                <div className="flex items-center mb-3">
                  <skill.icon className="text-primary mr-3" size={26} />
                  <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Journey & Skills */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-stretch mb-20">

          {/* My Journey */}
          <div className="w-full lg:w-1/2 space-y-8 fade-in delay-100">
            <div className="glass-card p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground flex items-center">
                <Lightbulb className="mr-3 text-primary" size={28} />
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg md:text-lg flex-1">
                <p>
                  I started working at 18 and have been grinding ever since — exploring opportunities, 
                  building skills, and staying focused on my main goal: a successful IT career. 
                  Everything I do is step by step, with discipline, learning continuously, 
                  and ensuring I provide my best in every task.
                </p>
                <p>
                  I’ve completed three key projects so far: a Linux live bootable, router configuration, and this portfolio website.
                  These projects reflect my practical skills and ability to apply knowledge effectively.
                </p>
                <p>
                  While my current role is in logistics, my focus remains on IT. I am actively pursuing 
                  certifications, enhancing my skills, and preparing for a career in Networking or Cybersecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="w-full lg:w-1/2 space-y-6 fade-in delay-200 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
            <div className="space-y-4 flex-1 flex flex-col justify-between">

              {/* Normal skills with labels */}
              {skills.map(({ icon: Icon, name }, index) => {
                const level = skillWidths[index] || 0;
                return (
                  <div
                    key={name}
                    className="glass-card p-5 sm:p-6 group flex items-center transition-all duration-300 ease-out
                      hover:bg-accent/10 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md min-h-[60px]"
                  >
                    <Icon className="text-primary group-hover:scale-110 transition-transform duration-300 mr-4" size={20} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm sm:text-base text-foreground font-medium">{name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-semibold">{level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Tech icons in a single row, slightly larger and centered */}
              <div className="glass-card p-5 sm:p-6 flex justify-center flex-wrap gap-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg bg-background/20 rounded-xl">
                {techIcons.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in delay-300">
          {stats.map(({ label }, index) => (
            <div
              key={label}
              className="glass-card p-5 sm:p-6 text-center group transition-all duration-300 ease-out
                hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md min-h-[100px]"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors duration-300">
                {label === 'Availability' ? '24/7' : statCounts[index]}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16 fade-in delay-400">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm">Scroll to see my projects</span>
            <ChevronDown className="animate-bounce" size={16} />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
