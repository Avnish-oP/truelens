# Truelens Internationals - Company Website

A modern, professional, single-page company website for Truelens Internationals, a premium supplier of high-quality eye lenses. Built with Next.js, TailwindCSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with eye lens-themed color palette
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Strong SEO with structured data, meta tags, and semantic HTML
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: Fully accessible with proper ARIA labels and color contrast

## 🎨 Design

### Color Palette
- **Primary**: #00A3A3 (Aqua Teal) - Clean, fresh
- **Secondary**: #1B3B5F (Deep Navy) - Professional
- **Accent**: #FFC857 (Warm Golden) - Highlight
- **Neutral**: #F6F8FA (Light Gray) - Background
- **Text**: #222222 (Dark Gray)

### Typography
- **Primary Font**: Inter (Clean, modern sans-serif)
- **Secondary Font**: Poppins (Headings and emphasis)

## 📱 Sections

1. **Header/Hero**: Full-width hero with gradient overlay, company tagline, and CTA buttons
2. **About Us**: Two-column layout with company information and feature cards
3. **Products**: Grid of product categories with hover animations
4. **Why Choose Us**: Feature highlights with icons and descriptions
5. **Contact**: Contact form and business information
6. **Footer**: Links, social media, and company details

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd truelens
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Structured Data**: JSON-LD schema markup for better search visibility
- **OpenGraph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts` and `src/app/globals.css`:

```css
:root {
  --color-primary: #00A3A3;
  --color-secondary: #1B3B5F;
  --color-accent: #FFC857;
  --color-neutral: #F6F8FA;
  --color-text: #222222;
}
```

### Content
Update the content in `src/app/page.tsx` sections:
- Company information in About section
- Product details in Products section
- Contact information in Contact section

### Images
Replace placeholder images in the `public` folder:
- Add hero background image
- Add product images
- Add company photos
- Add certification logos

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   └── StructuredData.tsx  # SEO structured data
└── lib/
    └── seo.ts              # SEO utilities
```

## 🎯 Performance

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Tree Shaking**: Unused code elimination

## 🔍 SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Structured data (Organization, Product, Website)
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Alt tags for images
- ✅ Proper heading hierarchy
- ✅ Internal linking
- ✅ Mobile-friendly design
- ✅ Fast loading times

## 📞 Support

For support or customization requests, contact:
- Email: info@truelens-intl.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary and confidential. All rights reserved by Truelens Internationals.

---

Built with ❤️ by the Truelens International development team.
