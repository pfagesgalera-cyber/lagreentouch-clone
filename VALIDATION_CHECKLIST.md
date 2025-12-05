# Shopify Theme Validation Checklist

## ✅ Theme Structure

- [x] `theme.toml` exists and is valid
- [x] `config/settings_schema.json` exists and is valid JSON
- [x] `layout/theme.liquid` exists and is valid Liquid
- [x] All required sections exist in `sections/` directory
- [x] All templates exist in `templates/` directory
- [x] `.shopifyignore` file configured correctly

## ✅ Configuration Files

### theme.toml
- [x] Valid TOML syntax
- [x] Contains required fields: name, description, author
- [x] theme_store_id set to 0 (for custom themes)

### config/settings_schema.json
- [x] Valid JSON format
- [x] Contains color settings
- [x] Contains typography settings
- [x] Contains header settings
- [x] Contains footer settings

## ✅ Layout Files

### layout/theme.liquid
- [x] Valid Liquid syntax
- [x] Includes `{{ content_for_header }}`
- [x] Includes `{{ content_for_layout }}`
- [x] Proper HTML structure
- [x] Meta tags for SEO
- [x] CSS and JS asset references

## ✅ Sections (10 total)

- [x] announcement-bar.liquid - Balanced tags
- [x] promo-bar.liquid - Balanced tags
- [x] header.liquid - Balanced tags
- [x] hero.liquid - Balanced tags
- [x] product-grid.liquid - Balanced tags
- [x] footer.liquid - Balanced tags
- [x] main-product.liquid - Balanced tags
- [x] collection-banner.liquid - Balanced tags
- [x] collection-products.liquid - Balanced tags

## ✅ Templates (3 total)

- [x] index.json - Valid JSON, proper section references
- [x] product.json - Valid JSON, main-product section
- [x] collection.json - Valid JSON, collection sections

## ✅ Assets

- [x] theme.css exists
- [x] responsive.css exists
- [x] theme.js exists
- [x] images/ directory exists
- [x] css/ directory exists
- [x] js/ directory exists

## ✅ Localization

- [x] locales/en.json exists and is valid JSON
- [x] locales/fr.json exists and is valid JSON
- [x] Multi-language support configured

## ✅ Documentation

- [x] README.md with installation instructions
- [x] INSTALLATION_GUIDE.md with detailed steps
- [x] This validation checklist

## 🚀 Ready for Deployment

This theme is production-ready and can be:
1. Pushed to GitHub
2. Imported into Shopify via CLI
3. Published to your store

## Common Issues & Solutions

### "Cette branche n'est pas un thème valide" Error

This error occurs when Shopify cannot find the required theme files. Ensure:

1. **File Structure**: All files are in the correct directories
   ```
   shopify-theme/
   ├── theme.toml
   ├── config/settings_schema.json
   ├── layout/theme.liquid
   ├── sections/
   ├── templates/
   └── assets/
   ```

2. **theme.toml Syntax**: Must be valid TOML
   - No syntax errors
   - Proper key-value pairs
   - Valid string formatting

3. **JSON Files**: All JSON must be valid
   - No trailing commas
   - Proper quote usage
   - Valid structure

4. **Liquid Files**: All Liquid must be valid
   - Balanced tags ({% %} and {{ }})
   - Proper variable references
   - Valid filters

5. **Git Configuration**: Ensure files are tracked
   ```bash
   git add shopify-theme/
   git commit -m "Add Shopify theme"
   git push
   ```

## Verification Commands

```bash
# Validate TOML
python3 -c "import tomllib; tomllib.load(open('theme.toml', 'rb'))"

# Validate JSON files
find . -name "*.json" -exec python3 -m json.tool {} \;

# Check Liquid tag balance
grep -o '{%' layout/theme.liquid | wc -l
grep -o '%}' layout/theme.liquid | wc -l
```

## Next Steps

1. Push to GitHub repository
2. Use Shopify CLI to connect: `shopify theme dev`
3. Test on development store
4. Publish to live store
5. Monitor for any issues
