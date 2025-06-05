# Duke Venture Group Website

A modern, responsive website for Duke University's premier student-run venture capital organization, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), Cinzel (headings)
- **Image Optimization**: Next.js Image component

## Dev Setup

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd duke-venture-group-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) :)

## Pages Overview

### Home Page (`/`)
- **Hero Section**: Main banner with DVG logo and tagline
- **About Section**: Overview of DVG's mission and partnership with Duke I&E
- **Partners Section**: Grid of partner organization logos
- **Programs Section**: Overview of DVG Analyst and Fellowship programs

### Programs Page (`/programs`)
- **Programs Overview**: Detailed breakdown of DVG Analyst and Fellowship tracks
- **Schedule**: Tentative Fall 2025 timeline with workshops and events

### Members Page (`/members`)
- **Executive Board**: Profiles of founding members and leadership team
- **General Body**: (Currently commented out for future use)

### Recruitment Page (`/recruitment`)
- **FAQ Section**: Comprehensive answers to recruitment questions
- **Process Information**: Details about application timeline and requirements

### FAQ Page (`/faqs`)
- **Organized Sections**: Recruitment, Education & Training, and Staying Involved
- **Accordion Interface**: Expandable questions and answers

## Content Management

### Adding New Members

1. Add member photo to `public/images/members/`
2. Update the `boardMembers` array in `components/executive-board.tsx`
3. Include name, title, bio, and image path

### Updating FAQ Content

1. Edit the FAQ arrays in `components/faq-section.tsx` or `components/recruitment-section.tsx`
2. Questions and answers are organized by category

### Modifying Partners

1. Update the `partners` array in `components/partners.tsx`
2. Replace placeholder logos with actual partner logos in `public/images/partners/`

### Updating Schedule

1. Modify the `scheduleItems` array in `components/programs-schedule.tsx`
2. Include date, event name, and time information

## Styling Guidelines

### Design System

- **Primary Color**: Deep blue (#19324a) with various shades
- **Typography**: Cinzel for headings (elegant, serif), Inter for body text
- **Spacing**: Consistent 20px vertical sections, responsive containers
- **Border Radius**: Minimal (2-4px) for a clean, professional look

### Component Classes

- `.card-elegant`: Standard card styling with subtle borders
- `.button-elegant`: Consistent button styling with minimal radius
- `.elegant-text`: Light font weight with wide tracking
- `.elegant-heading`: Extra-light headings with wider tracking

### Responsive Design

- Mobile-first approach using Tailwind's responsive prefixes
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Grid layouts adapt from single column to multi-column on larger screens

## Deployment

### Build Process

\`\`\`bash
npm run build
\`\`\`

This creates an optimized production build in the `.next` directory.

## Contributing

### Making Changes

1. Create a new branch for your feature/fix
2. Make changes following the established patterns
3. Test thoroughly on different screen sizes
4. Ensure accessibility standards are met
5. Submit a pull request with detailed description
