# Shujaat Siddiqui Portfolio Website

A modern, elegant, and fully responsive personal portfolio website for Shujaat Siddiqui, a highly experienced photographer, videographer, drone camera operator, video editor, and graphic designer.

## Features

- Sleek, minimal, and professional design with high-quality visuals
- Full-width hero banner with a captivating background
- Smooth animations and transitions
- Mobile-friendly and responsive for all devices
- Elegant typography and a premium dark theme with gold/white highlights
- Portfolio gallery with filtering capability
- Contact form
- SEO-friendly code structure

## Website Structure

1. **Home Page**: Large hero section with name, title, tagline, and social media links
2. **About Me**: Professional bio and portrait image
3. **Skills**: Showcasing expertise in photography, videography, drone operation, video editing, and graphic design
4. **Portfolio**: Grid gallery with filtering options and modal for detailed project view
5. **Contact**: Contact form and information

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript for any customizations

### Installation

1. Download or clone this repository
2. Replace placeholder images with actual images:
   - Replace `images/hero-bg.jpg.svg` with an actual background image/video
   - Replace `images/profile.jpg.svg` with an actual portrait photo
   - Replace portfolio images in `images/portfolio/` with actual project images
3. Update portfolio data in `js/main.js` with actual project information
4. Update personal information and social media links in `index.html`

## Customization

### Changing Colors

The color scheme can be modified in the `css/style.css` file by changing the CSS variables in the `:root` selector:

```css
:root {
    --dark-bg: #121212;
    --dark-secondary: #1e1e1e;
    --gold: #d4af37;
    --gold-light: #e5c76b;
    --white: #ffffff;
    --light-gray: #f5f5f5;
    --gray: #888888;
    --dark-gray: #333333;
}
```

### Adding Portfolio Items

To add new portfolio items, edit the `portfolioData` array in `js/main.js`:

```javascript
const portfolioData = [
    {
        id: [unique_id],
        title: 'Project Title',
        category: 'category_name', // photography, videography, drone, or design
        image: 'images/portfolio/image_name.jpg',
        description: 'Project description',
        client: 'Client Name',
        date: 'Project Date',
    },
    // Add more items here
];
```

## Browser Compatibility

This website is compatible with all modern browsers including:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## Editing in Adobe Dreamweaver

This website is designed to be easily editable in Adobe Dreamweaver:

1. Open Dreamweaver
2. Select File > Open
3. Navigate to the website folder and open the desired file
4. Make your changes in either Code view or Design view
5. Save your changes

## Credits

- Font Awesome for icons
- Google Fonts for typography (Montserrat and Playfair Display)

## License

This project is licensed for personal use by Shujaat Siddiqui.