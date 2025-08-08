# Shoy - Modern Web Experience

A beautiful, responsive e-commerce website built with HTML, CSS (Tailwind), and JavaScript. Features a modern design with smooth animations, mobile-first approach, and excellent user experience.

## 🚀 Features

### **Design & UI**
- ✨ Modern, clean design with amber color scheme
- 📱 Fully responsive (mobile-first approach)
- 🎨 Smooth animations and transitions
- 🌙 Dark gradient hero section
- 🎯 Professional product showcase

### **Navigation**
- 🍔 Responsive hamburger menu for mobile
- ⚡ Smooth scrolling navigation
- 🎯 Single-page application with sections
- ⌨️ Keyboard navigation support

### **Sections**
- 🏠 **Hero Section**: Eye-catching landing with call-to-action
- 🛍️ **Products Section**: 8 product cards with pricing
- ⭐ **Reviews Section**: Customer testimonials with ratings
- 📞 **Contact Section**: Contact information with icons
- 🦶 **Footer**: Complete site information and links

### **Performance**
- 🚀 Lazy loading for all images
- ⚡ Optimized for fast loading
- 📱 Mobile-optimized images
- 🎯 Smooth animations

## 📁 Project Structure

```
shoy/
├── index.html          # Main HTML file
├── src/
│   ├── style.css       # Custom styles
│   ├── script.js       # JavaScript functionality
│   └── img/            # Image assets
│       ├── hero.png    # Hero section image
│       ├── s1.jpg      # Product images (s1-s8)
│       ├── s2.jpg
│       ├── s3.jpg
│       ├── s4.jpg
│       ├── s5.jpg
│       ├── s6.jpg
│       ├── s7.jpg
│       ├── s8.jpg
│       ├── r1.jpg      # Review images (r1-r3)
│       ├── r2.jpg
│       └── r3.jpg
├── package.json        # Dependencies
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling with Tailwind CSS
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser
- Local development server (optional)

### **Installation**

1. **Clone or download the project**
   ```bash
   git clone [repository-url]
   cd shoy
   ```

2. **Install dependencies** (if using npm)
   ```bash
   npm install
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server for development

### **Development Server** (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px (md:)
- **Desktop**: > 1024px (lg:)

## 🎨 Color Scheme

- **Primary**: Amber (#f59e0b)
- **Secondary**: Gray (#6b7280)
- **Background**: White, Gray-50, Black
- **Text**: Gray-900, Gray-600, White

## 🔧 Customization

### **Colors**
Edit the amber color classes in the HTML to change the theme:
```html
<!-- Change from amber-600 to your preferred color -->
class="text-amber-600"
```

### **Images**
Replace images in the `src/img/` folder:
- `hero.png` - Hero section image
- `s1.jpg` to `s8.jpg` - Product images
- `r1.jpg` to `r3.jpg` - Review images

### **Content**
Update text content directly in `index.html`:
- Product names and descriptions
- Prices and badges
- Contact information
- Footer links

## 📋 Sections Overview

### **Header**
- Fixed navigation bar
- Responsive menu toggle
- Smooth mobile menu

### **Hero Section**
- Gradient background
- Call-to-action buttons
- Feature highlights

### **Products Section**
- 8 product cards
- Pricing with discounts
- Status badges (New, Sale, Hot, etc.)
- Add to Cart buttons

### **Reviews Section**
- Customer testimonials
- Star ratings
- Statistics display
- Brand showcase

### **Contact Section**
- Contact information
- Phone, email, address
- Icon-based layout

### **Footer**
- Company information
- Quick links
- Social media
- Support links

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Smooth Scrolling**: Enhanced navigation
- **Optimized Images**: Mobile-optimized sizes
- **Minimal JavaScript**: Lightweight functionality
- **CSS Animations**: Hardware-accelerated

## 🔒 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant
- **Semantic HTML**: Proper markup structure

## 🐛 Troubleshooting

### **Common Issues**

1. **Images not loading**
   - Check file paths in `src/img/`
   - Ensure images exist in the correct location

2. **Mobile menu not working**
   - Check JavaScript console for errors
   - Ensure all HTML elements have correct IDs

3. **Styles not applying**
   - Verify Tailwind CSS is properly linked
   - Check for CSS conflicts

### **Debug Mode**
Open browser developer tools (F12) to:
- Check for JavaScript errors
- Inspect responsive behavior
- Test mobile menu functionality

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@shoy.com
- Phone: +1 (555) 123-4567
- Address: 123 Business Ave, New York, NY 10001

## 🚀 Deployment

### **Static Hosting**
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### **Steps**
1. Upload all files to your hosting provider
2. Ensure `index.html` is in the root directory
3. Test all functionality
4. Update any absolute paths if needed

---

**Built with ❤️ for amazing experiences**

© 2024 Shoy. All rights reserved. 
