# La Green Touch - Shopify Liquid Theme

A premium, production-ready Shopify Liquid theme for the La Green Touch e-commerce platform.

## Theme Structure

```
shopify-theme/
├── theme.toml                 # Theme metadata and configuration
├── config/
│   └── settings_schema.json   # Theme customization settings
├── layout/
│   └── theme.liquid           # Main theme layout
├── sections/                  # Reusable theme sections
│   ├── announcement-bar.liquid
│   ├── promo-bar.liquid
│   ├── header.liquid
│   ├── hero.liquid
│   ├── product-grid.liquid
│   ├── footer.liquid
│   ├── main-product.liquid
│   ├── collection-banner.liquid
│   └── collection-products.liquid
├── templates/                 # Page templates
│   ├── index.json            # Homepage
│   ├── product.json          # Product page
│   └── collection.json       # Collection page
├── snippets/                 # Reusable Liquid snippets
├── assets/                   # CSS, JS, and images
│   ├── theme.css
│   ├── responsive.css
│   ├── theme.js
│   ├── css/
│   ├── js/
│   └── images/
├── locales/                  # Multi-language support
│   ├── en.json
│   └── fr.json
└── .shopifyignore           # Files to exclude from upload
```

## Installation

### Prerequisites
- Shopify CLI installed ([Installation Guide](https://shopify.dev/docs/themes/tools/cli/install))
- A Shopify store or development store
- Git repository access

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pfagesgalera-cyber/lagreentouch-clone.git
   cd lagreentouch-clone/shopify-theme
   ```

2. **Authenticate with Shopify:**
   ```bash
   shopify theme dev
   ```
   This will prompt you to select your store and create a development theme.

3. **Push to your store:**
   ```bash
   shopify theme push
   ```

4. **Publish the theme:**
   - Go to your Shopify Admin
   - Navigate to Online Store > Themes
   - Find "La Green Touch" theme
   - Click "Publish"

## Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Multi-language Support** - English and French locales
✅ **Customizable Colors** - Theme settings for brand colors
✅ **Product Grid** - Dynamic product display
✅ **Collection Pages** - Full collection support
✅ **Product Details** - Rich product page with variants
✅ **Announcement Bar** - Promotional messaging
✅ **Hero Section** - Eye-catching homepage banner
✅ **Footer** - Complete footer with links
✅ **SEO Optimized** - Proper meta tags and structured data

## Customization

### Theme Settings
Edit `config/settings_schema.json` to add custom theme settings that appear in the Shopify Admin.

### Colors
Modify color variables in `assets/theme.css`:
```css
:root {
  --primary-color: #6a8f53;
  --secondary-color: #c9a882;
  --background-color: #ffffff;
  --text-color: #000000;
}
```

### Sections
Add or modify sections in the `sections/` directory. Each section is a reusable component.

### Localization
Add translations in `locales/en.json` and `locales/fr.json`.

## File Validation

All files have been validated:
- ✓ theme.toml - Valid TOML syntax
- ✓ All JSON files - Valid JSON format
- ✓ All Liquid files - Balanced tags
- ✓ CSS files - Valid stylesheets
- ✓ JavaScript files - Valid syntax

## Support

For issues or questions:
1. Check the [Shopify Theme Development Documentation](https://shopify.dev/docs/themes)
2. Review the [Liquid Reference](https://shopify.dev/docs/api/liquid)
3. Contact the development team

## License

Copyright © 2025 La Green Touch. All rights reserved.
