# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository with your code
- Account on your chosen deployment platform

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:
1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
3. **Configure**: 
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Deploy**: Click "Deploy" and wait for deployment

#### Custom Domain (Optional):
- Go to your project dashboard
- Click "Domains" tab
- Add your custom domain
- Follow DNS configuration instructions

### 2. Netlify

#### Steps:
1. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `.next`
2. **Deploy**:
   - Connect your GitHub repository
   - Deploy automatically on push

### 3. AWS Amplify

#### Steps:
1. **Connect Repository**: Link your GitHub repository
2. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy**: Amplify will automatically build and deploy

### 4. Railway

#### Steps:
1. **Connect GitHub**: Link your repository
2. **Auto Deploy**: Railway will detect Next.js and deploy automatically
3. **Environment**: No additional configuration needed

## 🔧 Environment Variables

If you need environment variables (for contact forms, analytics, etc.):

### Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables

### Netlify:
1. Go to Site Settings → Environment Variables
2. Add your variables

## 📊 Performance Optimization

### Before Deployment:
1. **Optimize Images**: Use Next.js Image component
2. **Bundle Analysis**: Run `npm run build` to check bundle size
3. **SEO**: Ensure all meta tags are properly set

### After Deployment:
1. **Test Performance**: Use Google PageSpeed Insights
2. **Monitor**: Set up analytics (Google Analytics, Vercel Analytics)
3. **CDN**: Most platforms provide CDN automatically

## 🚨 Common Issues

### Build Errors:
- Check Node.js version (18+ required)
- Ensure all dependencies are installed
- Check for TypeScript errors

### Runtime Errors:
- Verify all imports are correct
- Check environment variables
- Ensure API routes work (if any)

### Performance Issues:
- Optimize images
- Enable compression
- Use Next.js built-in optimizations

## 📈 Post-Deployment

### Analytics Setup:
1. **Google Analytics**: Add tracking code to `app/layout.tsx`
2. **Vercel Analytics**: Enable in Vercel dashboard
3. **Search Console**: Submit sitemap to Google Search Console

### SEO Checklist:
- [ ] Meta tags are set
- [ ] Open Graph tags are configured
- [ ] Twitter Card tags are set
- [ ] Sitemap is generated
- [ ] Robots.txt is configured

### Monitoring:
- Set up uptime monitoring
- Configure error tracking
- Monitor performance metrics

## 🔄 Continuous Deployment

### Automatic Deployments:
- Push to `main` branch triggers deployment
- Preview deployments for pull requests
- Branch-based deployments for staging

### Manual Deployments:
- Trigger rebuilds from dashboard
- Rollback to previous versions
- Deploy specific commits

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Review build logs
3. Test locally first
4. Check for common issues in this guide

---

**Happy Deploying! 🎉**
