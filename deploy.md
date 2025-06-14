
# Shared Hosting Deployment Guide

## Steps to deploy on shared hosting:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all files from the `dist/` folder to your hosting provider's public folder (usually `public_html/` or `www/`)
   - Make sure the `.htaccess` file is uploaded as well

3. **File structure on server should be:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   │   ├── *.css
   │   ├── *.js
   │   └── images/
   ├── robots.txt
   ├── sitemap.xml
   └── other static files
   ```

4. **Common shared hosting requirements:**
   - PHP support is not required for this static site
   - Apache server with mod_rewrite enabled
   - Support for .htaccess files

## Troubleshooting:

- If routes don't work, ensure `.htaccess` is uploaded and mod_rewrite is enabled
- If assets don't load, check file permissions (644 for files, 755 for folders)
- Contact your hosting provider if you encounter Apache module issues
