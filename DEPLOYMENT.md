# Deployment Guide - Prime Polymart Website

## 🚀 Quick Fix for Current 404 Error

Your site is showing a 404 because it needs to be deployed as a **full Next.js application**, not a static site.

### ✅ Solution: Redeploy on Netlify

1. **Check your Netlify build settings**:
   - Go to Site settings → Build & deploy → Build settings
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

2. **Ensure Netlify Next.js plugin is active**:
   - Go to Plugins
   - Make sure `@netlify/plugin-nextjs` is installed
   - If not, click "Install" on the Essential Next.js Build Plugin

3. **Add environment variables**:
   - Go to Site settings → Environment variables
   - Add:
     ```
     NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
     NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-key>
     ```

4. **Trigger a new deploy**:
   - Go to Deploys
   - Click "Trigger deploy" → "Clear cache and deploy site"

### 📝 What Changed

I've updated the configuration to:
- ✅ Removed `output: 'export'` from `next.config.js` (was causing static export issues)
- ✅ Added `netlify.toml` with proper Next.js configuration
- ✅ Configured image optimization for Pexels and placeholder images
- ✅ Kept API routes functional at `/api/contact` and `/api/sample-kit`

### 🔍 Files Modified

1. **next.config.js** - Removed static export, added image domains
2. **netlify.toml** - Added (new file) for Netlify configuration

## 🌐 Alternative: Deploy to Vercel (Recommended for Next.js)

If Netlify continues to have issues, Vercel is the easiest option since they created Next.js:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

Vercel will:
- Automatically detect Next.js
- Configure everything correctly
- Handle environment variables
- Deploy in minutes

## 🔧 Troubleshooting

### If you still see 404:

**Check 1: Build Log**
Look at your Netlify build log for errors. Common issues:
- Missing dependencies
- Build command incorrect
- Environment variables not set

**Check 2: _redirects file**
Netlify needs proper redirects for Next.js. The `netlify.toml` handles this, but if you have a `public/_redirects` file, remove it.

**Check 3: Next.js Plugin**
```bash
# In your project
npm install --save-dev @netlify/plugin-nextjs
```

Then in `netlify.toml` (already added):
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### If API routes aren't working:

API routes need serverless functions enabled:
1. In Netlify, go to Functions
2. Ensure "Enable functions" is ON
3. The routes at `/api/contact` and `/api/sample-kit` should appear

## ✨ After Successful Deploy

Your site should be live at:
- Homepage: `https://your-site.netlify.app/`
- Products: `https://your-site.netlify.app/products`
- About: `https://your-site.netlify.app/about`
- Contact: `https://your-site.netlify.app/contact`

### Test these features:

1. ✅ Navigation (Dynamic Island header)
2. ✅ Product pages (all 14 products)
3. ✅ Contact form submission (should save to Supabase)
4. ✅ Sample kit form
5. ✅ Responsive design on mobile

## 📊 Performance Check

After deployment, check:
- Lighthouse score (should be 90+)
- Page load times
- Mobile responsiveness
- Form submissions to Supabase

## 🆘 Still Having Issues?

1. **Check build logs** in Netlify dashboard
2. **Verify environment variables** are set correctly
3. **Try Vercel** as alternative (often simpler for Next.js)
4. **Check browser console** for JavaScript errors
5. **Verify Supabase credentials** are correct

## 💡 Pro Tips

- Use a custom domain for professional look
- Enable Netlify Analytics to track visitors
- Set up form notifications in Netlify
- Use Netlify's preview deploys for testing changes
- Monitor Supabase for form submissions

---

**Need Help?** Check the main README.md for full documentation.
