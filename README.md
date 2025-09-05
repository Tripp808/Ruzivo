# RUZIVO Research Lab Website

**RUZIVO** (meaning "knowledge" in Shona) is a grassroots collective of researchers from African Leadership University, dedicated to localizing AI research for Africa across NLP, Computer Vision, and related fields.

## 🌍 About

This is the official website for RUZIVO Research Lab, showcasing our research, publications, team members, and mission to advance AI research that serves African communities.

## ✨ Features

- **Modern Design**: Clean, minimalist interface inspired by academic research websites
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Research Showcase**: Comprehensive display of ongoing and completed projects
- **Publications Database**: Searchable and filterable list of research papers
- **Team Profiles**: Detailed team member pages with bios and research interests
- **Contact System**: Contact forms and multiple communication channels
- **SEO Optimized**: Built with search engine optimization in mind
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **African-Inspired Design**: Color palette and aesthetics reflecting African heritage

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Content**: MDX support for publications and blog posts

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ruzivo/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── research/          # Research projects page
│   ├── publications/      # Publications page
│   ├── people/           # Team members page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── sitemap.ts        # XML sitemap
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Site footer
├── data/                 # Static data
│   ├── projects.ts       # Research projects
│   ├── publications.ts   # Publications database
│   └── team.ts          # Team member data
└── lib/                  # Utilities
    └── utils.ts          # Helper functions
```

## 🎨 Design System

### Colors

- **Primary**: African forest green (`#2D5016`)
- **Accent**: African gold (`#D4AF37`)
- **Supporting**: Earth tones and neutral grays

### Typography

- **Primary**: Inter (modern, clean)
- **Secondary**: Crimson Text (serif for emphasis)

### Components

Built with shadcn/ui for consistency and accessibility:
- Buttons, Cards, Inputs, Navigation
- All components follow design system principles

## 📊 Content Management

### Adding Research Projects

Edit `src/data/projects.ts` to add new research projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description...',
  category: 'NLP', // or 'Computer Vision', 'Machine Learning', 'Data Science'
  status: 'ongoing', // or 'completed', 'planned'
  tags: ['tag1', 'tag2'],
  links: {
    github: 'https://github.com/...',
    paper: 'https://...',
    demo: 'https://...'
  },
  date: '2024-01-01'
}
```

### Adding Publications

Edit `src/data/publications.ts`:

```typescript
{
  id: 'paper-id',
  title: 'Paper Title',
  authors: ['Author 1', 'Author 2'],
  venue: 'Conference/Journal Name',
  year: 2024,
  type: 'conference', // or 'journal', 'workshop', 'preprint'
  abstract: 'Paper abstract...',
  keywords: ['keyword1', 'keyword2'],
  links: {
    pdf: 'https://...',
    arxiv: 'https://...',
    github: 'https://...'
  },
  featured: true // optional
}
```

### Adding Team Members

Edit `src/data/team.ts`:

```typescript
{
  id: 'member-id',
  name: 'Full Name',
  role: 'Position Title',
  category: 'Faculty', // or 'Researcher', 'Student', 'Alumni', 'Collaborator'
  bio: 'Bio description...',
  education: ['Degree 1', 'Degree 2'],
  interests: ['Interest 1', 'Interest 2'],
  links: {
    website: 'https://...',
    scholar: 'https://...',
    linkedin: 'https://...'
  },
  location: 'City, Country',
  affiliation: 'Institution'
}
```

## 🔧 Customization

### Changing Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  african: {
    gold: '#D4AF37',
    earth: '#8B4513',
    forest: '#2D5016',
    sunset: '#FF6B35',
  }
}
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/navigation.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines and code of conduct before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: contact@ruzivo.org
- **Website**: https://ruzivo.org
- **GitHub**: https://github.com/ruzivo

---

**RUZIVO Research Lab** - Localizing AI Research for Africa 🌍

