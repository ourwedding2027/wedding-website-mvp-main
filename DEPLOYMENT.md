# Deployment Guide

This wedding website is a static site that can be deployed to any web hosting service.

## Quick Deploy Options

### Option 1: Netlify (Recommended)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Your site will be live at `https://your-site-name.netlify.app`
5. Optional: Add a custom domain in Netlify settings

**Benefits:**
- Free SSL certificate
- Automatic deployments on git push
- CDN included
- Custom domain support
- Security headers configured

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Your site is live

### Option 3: GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Set folder to `/` (root)
5. Your site will be at `https://username.github.io/repo-name`

### Option 4: Traditional Web Hosting
Upload all files via FTP/SFTP to your hosting provider:
- Upload everything in the root directory
- `.htaccess` provides security headers (Apache servers)
- Point your domain to the upload directory
- Ensure `index.html` is the directory index

## Pre-Deployment Checklist

- [ ] Update `RSVP_GMAIL` in [`js/config.js`](js/config.js)
- [ ] Verify `WEDDING_DATE_ISO` in [`js/config.js`](js/config.js)
- [ ] Create and add `favicon.png` and `apple-touch-icon.png` (see [`ICONS-README.md`](ICONS-README.md))
- [ ] Replace `https://yourweddingsite.com/` in [`index.html`](index.html) with actual domain
- [ ] Test RSVP form functionality
- [ ] Optimize images in `assets/` folder (optional but recommended)
- [ ] Test on mobile devices
- [ ] Check all language translations (EN/HU)

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. SSL certificate automatically provisioned

### GitHub Pages
1. Add `CNAME` file with your domain
2. Update DNS records with GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Wait for DNS propagation (up to 48 hours)

## Testing After Deployment

1. **Homepage**: Verify hero section loads correctly
2. **Navigation**: Test all navigation links
3. **Language Switch**: Toggle between EN/HU
4. **RSVP Form**: Test form submission opens email client
5. **Mobile**: Check responsive design on various screen sizes
6. **Images**: Verify all images load (check browser console for 404s)
7. **Performance**: Run Lighthouse audit in Chrome DevTools
8. **Accessibility**: Test with keyboard navigation and screen reader

## Environment-Specific Notes

### Production
- Images are lazy-loaded below the fold
- Security headers active (via `.htaccess` or `netlify.toml`)
- Browser caching configured
- PWA manifest enables "Add to Home Screen"

### Development
Run locally:
```bash
python -m http.server 8080
# or
npm start
```
Visit: http://localhost:8080/

## Performance Optimization Tips

1. **Image Optimization** (recommended before deployment):
   - Use [Squoosh](https://squoosh.app/) or similar
   - Target: Reduce 30MB assets folder to <10MB
   - Convert PNGs to WebP where possible

2. **Minification** (optional):
   - Minify CSS: Use online tools or build process
   - Minify JS: Same approach
   - This site loads fast without minification due to size

3. **CDN**: Most deployment platforms include CDN automatically

## Troubleshooting

### Images not loading
- Check file paths (case-sensitive on Linux servers)
- Verify files were uploaded correctly
- Check browser console for 404 errors

### RSVP form doesn't work
- Verify email address in `js/config.js`
- Some browsers block `mailto:` links - advise guests to use desktop
- Consider alternative: FormSubmit.co, Netlify Forms

### Language switch not working
- Check browser console for JavaScript errors
- Verify all translation files uploaded
- Clear browser cache

### Security headers not applied
- Apache: Ensure `.htaccess` is uploaded and `mod_headers` is enabled
- Netlify: Headers applied automatically via `netlify.toml`
- Other platforms: Add headers in platform settings

## Support

For issues or questions, refer to the documentation of your chosen hosting platform.
