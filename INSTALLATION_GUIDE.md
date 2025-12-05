# La Green Touch Shopify Theme - Installation Guide

## Quick Start

### Prerequisites
- Shopify store account
- Admin access to your Shopify store
- Theme files (this directory)

### Step 1: Prepare Your Theme

1. Ensure all files are in the correct directory structure
2. Verify the following directories exist:
   - `layout/`
   - `sections/`
   - `templates/`
   - `assets/`
   - `config/`
   - `locales/`

### Step 2: Upload Theme to Shopify

#### Method 1: Using Shopify CLI (Recommended)

```bash
# Install Shopify CLI if not already installed
npm install -g @shopify/cli

# Navigate to theme directory
cd shopify-theme

# Login to Shopify
shopify login --store your-store.myshopify.com

# Upload theme
shopify theme push

# Open theme in editor
shopify theme open
```

#### Method 2: Manual Upload

1. Go to your Shopify Admin Dashboard
2. Navigate to **Online Store > Themes**
3. Click **Upload theme**
4. Select the theme folder or ZIP file
5. Click **Upload**
6. Once uploaded, click **Customize** to configure

### Step 3: Configure Theme Settings

1. In the theme editor, go to **Theme settings**
2. Configure the following:
   - **Colors**: Primary, Secondary, Background
   - **Typography**: Heading and Body fonts
   - **Header**: Announcement and Promo text
   - **Footer**: Copyright text

### Step 4: Add Collections

1. Create collections in your Shopify admin:
   - Noël (Christmas)
   - Plantes d'intérieur (Indoor Plants)
   - Idées cadeaux (Gift Ideas)
   - Plantes d'extérieur (Outdoor Plants)
   - Décoration (Decoration)
   - Entretien (Care)

2. Add products to each collection

### Step 5: Customize Homepage

1. In the theme editor, click **Customize**
2. Add sections to your homepage:
   - Announcement Bar
   - Promo Bar
   - Hero Section
   - Product Grid
   - Footer

3. Configure each section with your content

### Step 6: Upload Images

1. Prepare your images:
   - Hero image: 1200x600px (recommended)
   - Product images: 500x500px (recommended)
   - Feature icons: 100x100px

2. Upload images through:
   - **Settings > Files** (for theme assets)
   - **Products** (for product images)
   - **Collections** (for collection images)

### Step 7: Publish Theme

1. Once configured, click **Save** in the theme editor
2. Go back to **Themes**
3. Click the **...** menu on your theme
4. Click **Publish** to make it live

## Customization Guide

### Changing Colors

1. Go to **Theme settings > Colors**
2. Update:
   - Primary Color (buttons, links)
   - Secondary Color (accents)
   - Background Color

### Adding Custom Fonts

1. Go to **Theme settings > Typography**
2. Select fonts from Google Fonts library
3. Changes apply automatically

### Modifying Header

Edit `sections/header.liquid`:
- Update logo text
- Modify navigation links
- Adjust search placeholder

### Customizing Footer

Edit `sections/footer.liquid`:
- Update footer links
- Modify column titles
- Change copyright text

### Adding New Sections

1. Create new file in `sections/` directory
2. Use Liquid syntax with schema
3. Add to template JSON files
4. Configure in theme editor

## Troubleshooting

### Theme Not Uploading
- Check file structure is correct
- Ensure all required files exist
- Verify file permissions
- Try uploading as ZIP file

### Sections Not Appearing
- Verify section files are in `sections/` directory
- Check template JSON includes section
- Clear browser cache
- Refresh theme editor

### Images Not Loading
- Verify image URLs are correct
- Check image file formats (JPG, PNG, WebP)
- Ensure images are uploaded to Shopify
- Check file size (max 20MB)

### Styling Issues
- Clear browser cache
- Check CSS file is uploaded
- Verify Tailwind/CSS classes are correct
- Test in different browsers

## Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images before upload
- Use appropriate image sizes
- Enable lazy loading

### CSS/JS Optimization
- Minify CSS and JavaScript
- Remove unused code
- Use CSS variables
- Defer non-critical JavaScript

### Caching
- Enable browser caching
- Use Shopify CDN
- Implement service workers
- Cache API responses

## SEO Best Practices

1. **Meta Tags**: Update in `layout/theme.liquid`
2. **Structured Data**: Add JSON-LD schema
3. **Alt Text**: Add to all images
4. **URLs**: Use descriptive collection/product URLs
5. **Sitemap**: Shopify generates automatically

## Mobile Optimization

- Theme is mobile-first responsive
- Test on various devices
- Use responsive images
- Optimize touch targets (44x44px minimum)
- Test navigation on mobile

## Backup and Version Control

1. Keep local copy of theme files
2. Use Git for version control
3. Create backups before major changes
4. Document customizations

## Support Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)
- [Theme Store Best Practices](https://shopify.dev/themes/best-practices)

## Next Steps

1. Customize theme colors and fonts
2. Add your products and collections
3. Configure payment methods
4. Set up shipping zones
5. Test checkout process
6. Publish theme to live store

---

For additional help, contact La Green Touch support or visit Shopify Help Center.
