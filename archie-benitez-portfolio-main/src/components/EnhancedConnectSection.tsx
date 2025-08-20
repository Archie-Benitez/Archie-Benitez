import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Send, User, MessageSquare, Youtube, Facebook, Instagram } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'archiebenitez101@gmail.com',
    href: 'mailto:archiebenitez101@gmail.com',
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+974 3108 1172',
    href: 'tel:+97431081172',
    color: 'text-green-600'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+974 3108 1172',
    href: 'https://wa.me/97431081172',
    color: 'text-green-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Archie A. Benitez',
    href: 'https://www.linkedin.com/in/archie-benitez-916b08247',
    color: 'text-blue-700'
  },
  {
    icon: MessageSquare,
    label: 'Messenger',
    value: 'Archie Benitez',
    href: 'https://m.me/Archie.Benitez2004',
    color: 'text-blue-500'
  }
];

const socialLinks = [
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://youtube.com/@BennyMeow1916',
    color: 'text-red-600'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/archie.sc.qa',
    color: 'text-pink-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/archie-benitez-916b08247',
    color: 'text-blue-700'
  },
  {
    icon: Facebook,
    label: 'Facebook Page',
    href: 'https://facebook.com/share/1BmbXy1PzJ/',
    color: 'text-blue-600'
  },
  {
    icon: MessageSquare,
    label: 'Messenger',
    href: 'https://m.me/Archie.Benitez2004',
    color: 'text-blue-500'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/97431081172',
    color: 'text-green-500'
  }
];

const EnhancedConnectSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    alert('Message sent successfully!');
  };

  // ✅ Updated Download CV handler
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Archie-Benitez-CV.pdf'; // make sure this matches your file in public
    link.download = 'Archie-Benitez-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPortfolio = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="connect" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8 fade-in delay-100">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <MessageSquare className="mr-3 text-primary" size={28} />
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center p-4 rounded-lg hover:bg-accent/50 transition-all duration-300 group"
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <method.icon className={`${method.color} mr-4 group-hover:scale-110 transition-transform duration-300`} size={24} />
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {method.label}
                      </div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Download CV & View Portfolio */}
              <div className="mt-8 pt-6 border-t border-border/20">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleDownloadCV}
                    className="btn-social btn-primary text-base flex-1 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                  >
                    <Mail size={18} />
                    Download CV
                  </button>
                  <button 
                    onClick={handleViewPortfolio}
                    className="btn-social btn-glass text-base flex-1 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                  >
                    <User size={18} />
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in delay-200">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Send className="mr-3 text-primary" size={28} />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                        focusedField === 'name' 
                          ? 'border-primary focus:ring-2 focus:ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                        focusedField === 'email' 
                          ? 'border-primary focus:ring-2 focus:ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                      focusedField === 'subject' 
                        ? 'border-primary focus:ring-2 focus:ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground resize-none ${
                      focusedField === 'message' 
                        ? 'border-primary focus:ring-2 focus:ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-social btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="fade-in delay-300">
          <div className="glass-card p-8">
            <h4 className="text-2xl font-semibold text-foreground mb-8 text-center">Follow Me</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-accent/50 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={28} 
                    className={`${social.color} mb-2 group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedConnectSection;
