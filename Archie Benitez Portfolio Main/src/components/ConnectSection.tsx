import { useState, useRef, useEffect } from 'react';
import { Mail, Send, User, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@ArchieBenitez101', color: 'text-red-600' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/archie.sc.qa', color: 'text-pink-600' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/archie-benitez-916b08247', color: 'text-blue-700' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/share/1BmbXy1PzJ/', color: 'text-blue-600' },
  { icon: Mail, label: 'WhatsApp', href: 'https://wa.me/97431081172', color: 'text-green-500' },
];

const ConnectSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) => setTimeout(() => el.classList.add('visible'), index * 150));
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_zxr0jko',   // replace with your EmailJS service ID
        'template_huvfajy',  // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'm-VqVdS9IFM8ZDxpk'     // replace with your EmailJS public key
      );

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Try again later.');
      console.error(error);
    }

    setIsSubmitting(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Archie-Benitez-CV.pdf';
    link.download = 'Archie-Benitez-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKnowMeMore = () => window.open('https://your-other-website.com', '_blank', 'noopener,noreferrer');

  return (
    <section id="connect" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Send Message Form */}
          <div className="fade-in delay-100">
            <div className="glass-card p-10 shadow-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Send className="mr-3 text-primary" size={28} />
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                      focusedField === 'name' ? 'border-primary focus:ring-2 focus:ring-primary/20' : 'border-border hover:border-gray-400'
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                      focusedField === 'email' ? 'border-primary focus:ring-2 focus:ring-primary/20' : 'border-border hover:border-gray-400'
                    }`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  placeholder="Subject"
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground ${
                    focusedField === 'subject' ? 'border-primary focus:ring-2 focus:ring-primary/20' : 'border-border hover:border-gray-400'
                  }`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-all duration-300 text-foreground resize-none ${
                    focusedField === 'message' ? 'border-primary focus:ring-2 focus:ring-primary/20' : 'border-border hover:border-gray-400'
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-social btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md"
                >
                  {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

          {/* Follow Me & CV */}
          <div className="fade-in delay-200">
            <div className="glass-card p-10 shadow-xl flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <User className="mr-3 text-primary" size={28} />
                Follow Me
              </h3>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={28}
                      className={`${social.color} mb-2 transition-transform duration-300 group-hover:scale-110`}
                    />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* CV & Know Me More Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="btn-social btn-primary flex-1 flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md"
                >
                  <Mail size={18} />
                  Download CV
                </button>
                <button
                  onClick={handleKnowMeMore}
                  className="btn-social btn-glass flex-1 flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md"
                >
                  <User size={18} />
                  Know Me More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
