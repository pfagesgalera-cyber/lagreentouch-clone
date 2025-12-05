# Quick Start Guide - La Green Touch Shopify Theme

## 🚀 5-Minute Setup

### Step 1: Install Shopify CLI
```bash
# macOS
brew tap shopify/shopify
brew install shopify-cli

# Windows (using Scoop)
scoop install shopify-cli

# Or download from: https://shopify.dev/docs/themes/tools/cli/install
```

### Step 2: Clone the Repository
```bash
git clone https://github.com/pfagesgalera-cyber/lagreentouch-clone.git
cd lagreentouch-clone/shopify-theme
```

### Step 3: Connect to Your Store
```bash
shopify theme dev
```

This will:
- Prompt you to log in to Shopify
- Ask you to select your store
- Create a development theme
- Start a local development server

### Step 4: View Your Theme
Open the URL provided in the terminal (usually `http://localhost:9292`)

### Step 5: Make Changes
Edit files in the `sections/`, `assets/`, or `config/` directories. Changes will hot-reload automatically.

### Step 6: Push to Your Store
```bash
shopify theme push
```

### Step 7: Publish
1. Go to your Shopify Admin
2. Navigate to **Online Store > Themes**
3. Find "La Green Touch" theme
4. Click **Publish**

---

## 📚 File Guide

| File/Folder | Purpose |
|---|---|
| `theme.toml` | Theme metadata |
| `config/settings_schema.json` | Customization options in Shopify Admin |
| `layout/theme.liquid` | Main HTML layout |
| `sections/` | Reusable page sections |
| `templates/` | Page templates (homepage, product, collection) |
| `assets/` | CSS, JavaScript, and images |
| `locales/` | Multi-language translations |

---

## 🌟 Common Tasks

### Add a New Section
1. Create `sections/my-section.liquid`
2. Add schema block at the bottom
3. Reference in templates or use in Shopify Admin

### Change Colors
Edit `config/settings_schema.json` to add color settings, then use in CSS:
```css
color: var(--primary-color);
```

### Add Translations
Edit `locales/en.json` and `locales/fr.json`:
```json
{
  "my_key": "My translation"
}
```

Use in Liquid:
```liquid
{{ 'my_key' | t }}
```

### Customize Homepage
Edit `templates/index.json` to add/remove sections

---

## 🔍 Troubleshooting

### "Cette branche n'est pas un thème valide"

**Solution:** Ensure all files are in the correct structure:
```
shopify-theme/
├── theme.toml
├── config/settings_schema.json
├── layout/theme.liquid
├── sections/
├── templates/
└── assets/
```

### Changes Not Showing

**Solution:** 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart the dev server: `shopify theme dev`
3. Check console for errors: F12 > Console

### Liquid Syntax Errors

**Solution:**
1. Check tag balance: `{% %}` and `{{ }}`
2. Verify variable names
3. Check Shopify Liquid docs: https://shopify.dev/docs/api/liquid

---

## 📄 Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Theme Store Best Practices](https://shopify.dev/docs/themes/best-practices)

---

## ✅ Validation

All files have been validated:
- ✓ theme.toml - Valid TOML
- ✓ All JSON files - Valid format
- ✓ All Liquid files - Balanced tags
- ✓ All CSS/JS - Valid syntax

**Status: READY FOR DEPLOYMENT** 🚀
