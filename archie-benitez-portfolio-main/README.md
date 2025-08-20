# Archie A. Benitez - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, professional design with enhanced mobile responsiveness and security features.

## ✨ Features

### Hero Section
- **5-Slide Carousel**: Dynamic hero carousel with smooth transitions
- **Enhanced Profile Picture**: Larger, proportional profile image with online indicator
- **Smart Button Logic**: "Add Friend" changes to "View Profile" after first interaction
- **Message Button**: Smooth scroll to Connect section
- **Hamburger Menu**: Right-aligned menu with Download CV and Know Me More options
- **Navigation Arrows**: Interactive carousel navigation

### Navigation
- **Smart Navbar**: Only appears after scrolling past hero section
- **Clean Design**: Displays "Archie" (not full name) for better UX
- **Mobile Optimized**: Responsive navigation with touch-friendly interactions

### Stories Section
- **Visual Connection**: Seamless connection to About section
- **Enhanced Stories**: More descriptive and engaging content
- **Improved Modal**: Navigation arrows and story indicators
- **Better Mobile Layout**: Responsive grid with improved spacing

### About Section
- **Enhanced Content**: More descriptive and professional content
- **Visual Flow**: Smooth connection from Stories section
- **Improved Skills Display**: Better visual representation of expertise
- **Mobile Responsive**: Optimized for all screen sizes

### Projects Section
- **Clean Layout**: Removed dates/timelines for minimalist design
- **Perfect Alignment**: No overlapping elements, consistent spacing
- **Enhanced Cards**: Better hover effects and visual hierarchy
- **Mobile Optimized**: Responsive grid layout

### Connect Section
- **Security Enhanced**: Input validation, XSS protection, and sanitization
- **Form Validation**: Real-time error handling and user feedback
- **Mobile Responsive**: Touch-friendly form elements
- **Success Feedback**: Clear success messages and form reset

## 🛡️ Security Features

- **Input Sanitization**: Prevents XSS attacks
- **Form Validation**: Client-side validation with error handling
- **Secure Links**: Proper rel attributes for external links
- **Content Security**: Protected against injection attacks

## 📱 Mobile Optimization

- **Touch-Friendly**: 44px minimum touch targets
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Scrolling**: Enhanced mobile scrolling experience
- **Performance**: Optimized animations and transitions

## 🎨 Design Enhancements

- **Professional Look**: Clean, minimalist design
- **Perfect Alignment**: No overlapping elements
- **Smooth Animations**: Enhanced user experience
- **Visual Hierarchy**: Clear content organization
- **Accessibility**: Focus management and keyboard navigation

## 🚀 Technical Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool
- **Lucide React**: Beautiful icons
- **Intersection Observer**: Smooth scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd meta-vibe-portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Customization

### Adding Hero Images
Replace the placeholder images in `src/components/HeroCarousel.tsx`:
```typescript
const hero4 = 'path/to/your/image4.jpg';
const hero5 = 'path/to/your/image5.jpg';
```

### Updating Contact Information
Modify the contact methods in `src/components/EnhancedConnectSection.tsx`:
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'text-blue-600'
  },
  // ... add more contact methods
];
```

### Customizing Projects
Update the projects array in `src/components/ModernProjectsSection.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'path/to/project-image.jpg',
    tags: ['React', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  // ... add more projects
];
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Archie A. Benitez
