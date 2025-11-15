# Prime Polymart - Premium B2B Plastics Distribution Website

A modern, production-ready Next.js website for Prime Polymart - a leading distributor of thermoplastic resins and polymers. Built with cutting-edge 2025 Apple-inspired design featuring glassmorphism effects, smooth animations, and a unique Dynamic Island navigation system.

## 🎨 Design Features

- **Apple 2025 Aesthetic**: Clean white base, generous whitespace, and premium feel
- **Dynamic Island Navigation**: Signature floating navigation that expands on hover with smooth animations
- **Glassmorphism UI**: Beautiful glass effects with backdrop blur for modern visual depth
- **Responsive Design**: Fully responsive across all devices from mobile to desktop
- **Micro-interactions**: Thoughtful animations and transitions powered by Framer Motion
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## 🚀 Tech Stack

- **Framework**: Next.js 13.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + custom components
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast)

## 📦 Features

### Core Pages
- **Home**: Hero section with parallax, animated statistics, featured products, and CTAs
- **Products**: Searchable catalog with 14+ thermoplastic products, filtering, and detailed specs
- **Product Detail**: Individual product pages with tabbed specifications, applications, and packaging
- **About**: Company history, values, and leadership team
- **Services**: Four service pillars with detailed descriptions
- **Quality**: Quality assurance process and certifications
- **Logistics**: Global reach visualization with export network
- **Contact**: Form with Supabase integration and Google Maps embed
- **Sample Kit**: Dedicated sample ordering with product selection

### Advanced Features
- **Form Submissions**: All forms save to Supabase with RLS policies for security
- **Dynamic Routing**: Static generation for all product pages
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and sitemap
- **Animated Statistics**: Count-up animations that trigger on scroll
- **Search & Filter**: Real-time product search and category filtering
- **Smooth Scroll**: Page-level transitions and section reveals

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**

   The `.env` file should already contain your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📂 Project Structure

```
project/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── contact/                 # Contact page with form
│   ├── logistics/               # Logistics page
│   ├── products/                # Products listing
│   │   └── [slug]/             # Dynamic product detail pages
│   ├── quality/                 # Quality page
│   ├── sample-kit/              # Sample kit ordering
│   ├── services/                # Services page
│   ├── api/                     # API routes
│   │   ├── contact/            # Contact form submission
│   │   └── sample-kit/         # Sample kit form submission
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and design tokens
│   └── sitemap.ts              # Dynamic sitemap generation
│
├── components/
│   ├── shared/                  # Reusable components
│   │   ├── HeaderDynamicIsland.tsx  # Signature navigation
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Hero.tsx                # Hero component with parallax
│   │   ├── GlassCard.tsx           # Glass effect card
│   │   ├── BentoCard.tsx           # Fallback card
│   │   ├── ProductCard.tsx         # Product listing card
│   │   ├── ProductDetail.tsx       # Product detail view
│   │   ├── ContactForm.tsx         # Contact form with validation
│   │   └── StatCounter.tsx         # Animated statistic counter
│   └── ui/                      # shadcn/ui components (50+ components)
│
├── data/
│   └── products.json            # Product catalog data (14 products)
│
├── lib/
│   ├── animations.ts            # Framer Motion animation configs
│   ├── supabase.ts             # Supabase client & types
│   └── utils.ts                # Utility functions
│
├── public/
│   ├── robots.txt              # SEO crawling directives
│   ├── Prime Poly Logo (1).pdf # Company logo
│   └── specs/                  # Product spec sheets (placeholder)
│
├── tailwind.config.ts          # Tailwind configuration with design tokens
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1A3C72` (prime-blue)
- **Accent Red**: `#E63946` (prime-red)
- **Steel Grey**: `#6E7A85` (steel-grey)
- **Gold Gradient**: `#E6B451` → `#F4D47F` (gold-600, gold-400)
- **Olive**: `#5C6E4B` (olive)
- **Ink**: `#111111` (primary text)
- **Muted**: `#555555` (secondary text)

### Typography
- **Font Stack**: SF Pro Display / Inter / system-ui
- **Fluid Sizing**:
  - H1: `clamp(2rem, 4.5vw, 2.75rem)`
  - H2: `clamp(1.5rem, 3.2vw, 2rem)`
  - H3: `clamp(1.25rem, 2.5vw, 1.5rem)`
- **Line Heights**: 120% headings, 160% body

### Components
- **Glass Effect**: `backdrop-filter: blur(16px)` with fallback
- **Card Hover**: `scale(1.03)`, `translateY(-4px)`
- **Spring Animation**: `stiffness: 300`, `damping: 26`
- **Transitions**: 300-500ms with `ease-out` curve

## 📝 Customization

### Update Products
Edit `/data/products.json` to add, remove, or modify products:

```json
{
  "sku": "IA-XXX-001",
  "slug": "product-url-slug",
  "name": "Product Name",
  "summary": "Brief description",
  "description": "Full description",
  "applications": ["App 1", "App 2"],
  "specs": { "property": "value" },
  "packaging": ["25kg bag"],
  "moq": "500 kg",
  "image": "https://image-url.jpg"
}
```

### Replace Placeholder Images
- Update product `image` URLs in `products.json`
- Add hero images in page components
- Replace logo in `/public/` directory

### Modify Content
- **Homepage**: Edit `/app/page.tsx`
- **About**: Edit `/app/about/page.tsx`
- **Footer**: Edit `/components/shared/Footer.tsx`
- **Contact Info**: Update in Footer and Contact page

### Database Configuration
The Supabase schema is already set up with two tables:
- `contact_submissions` - Contact form entries
- `sample_kit_requests` - Sample kit orders

RLS policies allow anonymous inserts and authenticated reads.

## 🔒 Security

- Row Level Security (RLS) enabled on all database tables
- Form validation with Zod schemas
- CSRF protection via Next.js
- Environment variables for sensitive data
- No exposed API keys in client code

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support (arrow keys in header)
- Focus visible states on all interactive elements
- `prefers-reduced-motion` support
- Alt text on all images
- Proper heading hierarchy
- Color contrast ratios meeting WCAG 2.1 AA

## 🚀 Performance

- Static generation for product pages (SSG)
- Image optimization with Next.js Image
- Code splitting by route
- Lazy loading for below-the-fold content
- Preconnect hints for external resources
- Optimized fonts with `display: swap`
- Minimal JavaScript bundles

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

*Note: Glassmorphism effects gracefully degrade in older browsers to solid backgrounds.*

## 🧪 Testing

A minimal Jest test setup is included. To add tests:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Example test for HeaderDynamicIsland is TODO.

## 📄 License

© 2024 Prime Polymart Pvt. Ltd. All rights reserved.

## 🤝 Support

For questions or support:
- Email: query@primepoly.in
- Phone: +91-9650-794414
- Address: G-71, Kirti Nagar, New Delhi - 110015, India

## 🎯 Production Deployment

### Environment Variables for Production
Ensure these are set in your hosting platform:
```
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_key
```

### Netlify Deployment (Recommended)

The site is pre-configured for Netlify with a `netlify.toml` file.

**Option 1: Connect Git Repository**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Add environment variables in Site settings → Environment variables
6. Deploy!

**Option 2: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Important**: Netlify will automatically:
- Install the Next.js plugin
- Build your site with `npm run build`
- Deploy the `.next` folder
- Handle API routes and server-side rendering

### Vercel Deployment
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
For traditional hosts, build the production bundle:
```bash
npm run build
npm start
```

You'll need a Node.js server to run the application. The site uses:
- API routes at `/api/contact` and `/api/sample-kit`
- Server-side rendering for some pages
- Static generation for product pages

## 📈 Future Enhancements

**Phase 2 (Future):**
- [ ] Admin dashboard for managing submissions
- [ ] Email notifications via SendGrid/Resend
- [ ] Real-time inventory tracking
- [ ] Customer portal with order history
- [ ] Multi-language support (Hindi, etc.)
- [ ] Advanced product filtering
- [ ] Live chat integration
- [ ] Payment gateway integration
- [ ] Blog/news section
- [ ] Downloadable catalog PDFs
- [ ] Product comparison tool

## 💡 Notes

- The Dynamic Island navigation is the signature feature - handles mobile hamburger menu automatically
- All form submissions are stored in Supabase (check the dashboard)
- Product spec sheets in `/public/specs/` are placeholders - replace with actual PDFs
- The site is production-ready but consider adding real product images and content
- Animations respect `prefers-reduced-motion` for accessibility
- The design intentionally avoids purple/violet hues per Apple 2025 aesthetic guidelines

---

Built with ❤️ by Prime Polymart Development Team
