# Professional Portfolio Application

## Overview

This is a modern, responsive professional portfolio application built for Shivam Sachdeva, a QA Automation Engineer. The application showcases professional experience, skills, education, certifications, and provides contact functionality with resume download capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Key Components

#### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Professional introduction with contact information
- **About**: Professional summary with achievement metrics
- **Skills**: Interactive skill visualization with progress indicators
- **Experience**: Detailed work history with achievements
- **Education**: Academic background and ongoing learning
- **Certifications**: Professional certifications and training
- **Contact**: Functional contact form with validation
- **Footer**: Social links and professional information

#### Backend Services
- **Contact API**: `/api/contact` - Handles contact form submissions
- **Resume Download**: `/api/download-resume` - Serves PDF resume file
- **Static File Serving**: Serves built frontend assets
- **Development Server**: Hot module replacement in development

## Data Flow

1. **Static Content**: Portfolio information is embedded in React components
2. **Contact Form**: Client form → Express API → Console logging (expandable to email/database)
3. **Resume Download**: Client request → Express file stream → PDF download
4. **Development**: Vite dev server → Express middleware → Hot reloading

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast JavaScript bundler for production

### Database Preparation
- **Drizzle ORM**: Ready for PostgreSQL integration
- **Neon Database**: Serverless PostgreSQL (configured but not actively used)
- **Schema**: User authentication schema prepared for future features

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Start Command**: `npm run start` serves production application

### Development Environment
- **Hot Reloading**: Vite middleware integrated with Express
- **TypeScript**: Real-time compilation and type checking
- **Port Configuration**: Development on port 5000, production configurable

### Replit Integration
- **Auto-deployment**: Configured for Replit's autoscale deployment
- **Environment**: Supports both development and production workflows
- **Asset Handling**: Resume PDF stored in `attached_assets` directory

## Changelog
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.