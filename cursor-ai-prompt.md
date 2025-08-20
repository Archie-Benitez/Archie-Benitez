# Cursor AI Portfolio Website Fix Prompt

## Overview
Fix and enhance my React TypeScript portfolio website to make it more professional, interactive, and mobile-responsive. The website should have a modern social media-inspired design with glassmorphism effects.

## Current Issues to Fix

### 1. Home Page Background & Layout
- **Remove transparent background box** from the hero section - eliminate the glass-card wrapper around the profile content
- **Keep cover photos, profile photo, and buttons** exactly as they are
- **Ensure proper spacing** without the glass container

### 2. Add Friend / View Profile Button Logic
- **Current behavior**: "Add Friend" changes to "View Profile" when clicked
- **Fix**: "View Profile" should stay as "View Profile" and only return to "Add Friend" when website is refreshed
- **Add Friend button**: Should scroll to about section and change to "View Profile"
- **View Profile button**: Should scroll back to top and change to "Add Friend"

### 3. Cover Photo Carousel
- **Increase from 3 to 5 cover photos** that automatically cycle
- **Add new high-quality images** to the assets folder
- **Maintain smooth transitions** and auto-rotation

### 4. Navigation Bar Enhancements
- **Add hamburger menu** beside the "Message" button in hero section
- **Hamburger menu should contain**:
  - Download CV (with download icon)
  - Know Me More (with info icon)
- **Fix navbar name**: Change from "Archie A. Benitez" to just "Archie"
- **Home navigation**: When "Home" is clicked, it should scroll to the top of the page (hero section)
- **Navbar visibility**: Only show below the home page section (when scrolled past hero)

### 5. Stories Section Improvements
- **Hover effects**: Stories should pop out/scale up when hovered
- **Clickable functionality**: Each story should be clickable to open a modal
- **Enhanced animations**: Add smooth hover transitions and scale effects
- **Better visual feedback**: Improve hover states and interactions

### 6. About Me Section
- **Keep current clean design** but enhance with:
  - Add relevant images showcasing skills/technologies
  - Improve visual hierarchy
  - Add icons for different skills/technologies
- **Maintain professional appearance** while making it more engaging

### 7. Projects Section
- **Remove years and features** from project cards
- **Show all projects** without filtering by year
- **Equalize project card sizes** - ensure all cards have the same dimensions
- **Keep "View All Projects on GitHub" button** as is
- **Remove year badges** and featured indicators
- **Simplify project information** display

### 8. Connect Section
- **Add placeholders** for contact form fields to maintain professional appearance
- **Improve form styling** with better visual feedback
- **Add loading states** for form submission
- **Enhance contact methods** with better icons and styling

### 9. Mobile Responsiveness
- **Ensure all components work perfectly** on mobile devices
- **Optimize touch interactions** for mobile users
- **Responsive typography** and spacing
- **Mobile-friendly navigation** and menus

### 10. Security & Bug Fixes
- **Fix any security vulnerabilities** in the code
- **Remove console logs** and debug statements
- **Optimize performance** and loading times
- **Fix any TypeScript errors** or warnings
- **Ensure proper error handling** throughout the application

## Technical Requirements

### File Structure to Modify
- `src/components/HeroCarousel.tsx` - Remove glass-card, add hamburger menu, fix button logic
- `src/components/SocialNavbar.tsx` - Change name to "Archie", fix home navigation
- `src/components/StoriesSection.tsx` - Enhance hover effects and clickability
- `src/components/EnhancedAboutSection.tsx` - Add images and icons
- `src/components/ModernProjectsSection.tsx` - Remove years/features, equalize sizes
- `src/components/EnhancedConnectSection.tsx` - Add placeholders, improve styling
- `src/pages/Index.tsx` - Fix button state management
- `src/index.css` - Add new styles for enhanced interactions

### New Assets Needed
- Add 2 more cover photos (total 5) to `src/assets/`
- Add skill/technology images for About section
- Add appropriate icons for hamburger menu items

### State Management
- Fix the Add Friend/View Profile button state persistence
- Implement proper scroll-based navbar visibility
- Add smooth scrolling to sections

### Animations & Interactions
- Enhanced hover effects for stories
- Smooth transitions for all interactive elements
- Loading states for forms and buttons
- Scale and transform animations

## Design Guidelines

### Visual Style
- Maintain the current glassmorphism aesthetic
- Use consistent spacing and typography
- Ensure high contrast for accessibility
- Professional yet modern appearance

### Color Scheme
- Keep the current Facebook-inspired blue theme
- Maintain proper contrast ratios
- Use subtle gradients and shadows

### Typography
- Clean, readable fonts
- Proper hierarchy with different font weights
- Responsive font sizes for mobile

## Performance Requirements
- Optimize image loading and compression
- Minimize bundle size
- Implement lazy loading where appropriate
- Ensure fast page load times

## Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## Browser Compatibility
- Support modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile browser optimization

## Code Quality
- Clean, readable TypeScript code
- Proper error handling
- Consistent naming conventions
- Remove any unused code or dependencies

## Testing
- Test all interactions on desktop and mobile
- Verify smooth scrolling and animations
- Check form functionality
- Test responsive design across different screen sizes

## Final Deliverables
- Fully functional portfolio website
- Mobile-responsive design
- Professional appearance
- Smooth user interactions
- No console errors or warnings
- Optimized performance
- Security best practices implemented

## Priority Order
1. Fix button logic and navbar issues
2. Remove glass-card from hero section
3. Add hamburger menu functionality
4. Enhance stories section interactions
5. Update projects section layout
6. Improve about section with images
7. Enhance connect section styling
8. Mobile responsiveness fixes
9. Security and performance optimizations
10. Final testing and polish

Please implement these changes systematically, testing each component as you go. Ensure all functionality works as expected and the website maintains its professional appearance while being highly interactive and mobile-friendly.

