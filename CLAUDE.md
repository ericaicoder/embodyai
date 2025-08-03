# EmbodyAI Project Development Guide for AI Assistants

## Company Overview

**EmbodyAI** is a cutting-edge artificial intelligence company founded on **April 15, 2025**.

- **Mission**: Scale every developer to 10X productivity through AI-powered development tools
- **Focus**: AI-accelerated software development, automation, and developer productivity amplification
- **Target**: Developers, development teams, and tech companies seeking to maximize coding efficiency
- **Core Value Proposition**: Transform developers into 10X productive "superhuman coders"
- **Website**: [embodyai.co.jp](https://embodyai.co.jp)

## Project Context

This repository contains the **official company homepage** for EmbodyAI. The website serves as:
- Primary digital presence showcasing AI-powered development tools
- Lead generation platform for developers and tech companies
- Demonstration of 10X productivity gains through AI
- Technical showcase of modern development practices using our own AI tools
- Developer community hub and resource center

## Core Business Focus

### AI-Accelerated Software Development
- **Code Generation**: AI-powered coding assistance that writes code 10X faster
- **Automated Testing**: AI-driven test generation, execution, and debugging
- **Smart Code Review**: Intelligent code analysis and optimization suggestions
- **Deployment Automation**: AI-optimized CI/CD pipelines and workflows
- **Developer Mentoring**: AI coaching to accelerate skill development

## Technical Stack & Architecture

### Core Technologies
- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Runtime**: React 19 with modern hooks and features
- **Theme**: next-themes for dark/light mode support (essential for developer audience)
- **Build Tool**: PNPM for package management
- **Code Quality**: ESLint + Prettier with Tailwind plugin
- **I18N**: next-intl

### Project Structure
```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable React components (developer-focused UI)
├── types/         # TypeScript type definitions
├── messages/      # i18n messages
└── styles/        # Global styles and Tailwind configuration

```

## Development Guidelines for AI Assistants

### 1. Code Style & Standards

**TypeScript Usage**:
- Always use TypeScript for type safety (critical for developer audience)
- Define interfaces for props and data structures
- Use strict mode configurations
- Prefer `type` over `interface` for simple object types

**React Patterns**:
- Use functional components with hooks
- Implement proper error boundaries
- Follow React 19 best practices
- Use server components where appropriate (Next.js App Router)

**CSS & Styling**:
- Utilize Tailwind CSS utility classes
- Follow mobile-first responsive design
- Support both light and dark themes (essential for developers)
- Implement consistent spacing and typography scales

### 2. Component Development

**Component Structure**:
```typescript
// Preferred component pattern
interface ComponentProps {
  // Type definitions
}

export default function Component({ prop }: ComponentProps) {
  // Component logic
  return (
    <div className="responsive-classes">
      {/* Component JSX */}
    </div>
  );
}
```

**Best Practices**:
- Keep components focused and single-purpose
- Use descriptive prop names and types
- Implement proper accessibility attributes
- Optimize for performance with React.memo when needed

### 3. Developer-Focused Design Considerations

**Brand Voice & Messaging**:
- Emphasize practical productivity gains and measurable 10X improvements
- Use confident, technical tone that resonates with developers
- Highlight real-world development acceleration and automation
- Showcase tangible benefits: faster coding, reduced bugs, automated workflows

**Content Strategy**:
- Focus on developer pain points: repetitive tasks, context switching, skill gaps
- Demonstrate measurable productivity improvements with specific metrics
- Use technical examples and code snippets that developers can relate to
- Include compelling case studies showing 10X productivity gains
- Highlight developer testimonials and success stories

**Visual Design Principles**:
- Clean, modern aesthetic that appeals to developers
- Dark mode as a first-class citizen (not an afterthought)
- Code-friendly typography and syntax highlighting where appropriate
- Developer tool-inspired UI patterns and interactions
- Performance-focused design reflecting technical excellence

### 4. Performance & SEO

**Optimization Requirements**:
- Implement Next.js image optimization
- Use proper meta tags focused on developer-related keywords
- Optimize Core Web Vitals (developers expect fast, responsive sites)
- Implement proper loading states and error handling

**SEO Considerations**:
- Developer productivity and AI coding assistance keywords
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions highlighting 10X productivity and AI development tools
- Schema markup for software development and AI tool categories

### 5. Development Workflow

**Local Development**:
```bash
# Start development server
pnpm run dev

# Run linting
pnpm run lint

# Build for production
pnpm run build
```

**Code Quality Checks**:
- ESLint for code quality
- Prettier for consistent formatting
- TypeScript strict mode compliance
- Manual testing across devices and browsers

### 6. Content Management

**Company Information Updates**:
- Founded: April 15, 2025
- Location: Japan (embodyai.co.jp domain)
- Industry: AI-Powered Software Development Tools
- Market Position: Leading AI platform for 10X developer productivity

**Key Messaging Points**:
- AI-accelerated coding and development workflows
- 10X productivity gains through intelligent automation
- Developer-first AI tools and interfaces
- Elimination of repetitive development tasks
- Scaling team output through AI amplification
- Developer skill acceleration through AI mentoring

### 7. Deployment & Maintenance

**Deployment Targets**:
- Primary domain: embodyai.co.jp
- Compatible with Vercel, Netlify, or Node.js hosting
- Optimized for CDN delivery and global developer audience

**Maintenance Guidelines**:
- Regular dependency updates
- Performance monitoring (critical for developer audience)
- Content freshness reviews focused on latest AI development trends
- Analytics tracking for developer engagement metrics

## AI Assistant Instructions

When working on this project:

1. **Always consider the developer audience** - every feature should resonate with software developers and their daily challenges

2. **Emphasize 10X productivity messaging** - this is the core value proposition that differentiates EmbodyAI

3. **Maintain technical credibility** - developers are skeptical; everything must demonstrate real technical value

4. **Prioritize performance** - slow websites lose developer trust immediately

5. **Dark mode is essential** - most developers prefer dark themes; ensure perfect dark mode implementation

6. **Use developer-friendly language** - technical accuracy over marketing fluff

7. **Show, don't just tell** - include code examples, metrics, and concrete productivity demonstrations

8. **Focus on practical benefits** - how does this actually make development faster and better?

## Target Developer Personas

**Primary Audience:**
- **Senior Developers** - Looking to amplify their productivity and lead more effectively
- **Development Team Leads** - Seeking to scale team output without hiring 10X more developers
- **Startup CTOs** - Need to build fast with limited resources
- **Enterprise Dev Teams** - Want to accelerate delivery and reduce technical debt

**Secondary Audience:**
- **Junior Developers** - Seeking AI mentoring to accelerate skill development
- **Freelance Developers** - Need to compete by delivering faster and better
- **Dev Tool Companies** - Potential integration partners

## Quick Reference Commands

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint

# Package Management
pnpm install          # Install dependencies
pnpm add [package]    # Add new dependency
pnpm remove [package] # Remove dependency
```

---

**Last Updated**: December 2024  
**Project Version**: 1.0.0  
**Company**: EmbodyAI (Founded April 15, 2025)  
**Mission**: Scale every developer to 10X productivity through AI
