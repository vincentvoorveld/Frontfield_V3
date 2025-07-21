# Frontfield Websites - Dutch Website Development Service

## Overview

This is a modern full-stack web application for Frontfield Websites, a Dutch web development service company. The application serves as a marketing website with contact form functionality, built using React/TypeScript frontend with an Express.js backend and PostgreSQL database integration.

## Recent Changes (July 21, 2025)

- **Portfolio Complete**: Added all three portfolio items with real client websites
  - "Ster van het Verhaal" - personalized children's books
  - "Silverwood Coloring" - coloring book portfolio (600x400 Aria Silverwood image)
  - "Barbershop Nieuwland" - professional barbershop website in Amersfoort
- **Formspree Integration**: Implemented working contact form using Formspree (https://formspree.io/f/mwpqvyvg)
- **Contact Form Features**: Added loading states, success messages, error handling, and form reset
- **All Links Working**: Portfolio items clickable and open in new tabs
- **GitHub Pages Ready**: Built static files with correct relative paths for deployment
- **File Names Updated**: Current build includes index-CiHqg7xa.css and index-DaOumpmN.js

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Built-in session handling with PostgreSQL store
- **Development**: Hot-reload with Vite integration

### Key Components

#### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, company, budget, message, and timestamp
- **Users Table**: Basic user management structure (currently unused but available for future admin functionality)

#### API Endpoints
- `POST /api/contact`: Handle contact form submissions with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin functionality)

#### Frontend Pages
- **Home Page**: Complete marketing site with hero section, services, portfolio, and contact form
- **Privacy Policy**: Legal page with placeholder content
- **Terms & Conditions**: Legal page with placeholder content
- **404 Page**: Custom not-found page

#### UI Components
- **Hero Section**: Main call-to-action with project start and consultation buttons
- **Services Section**: Three service cards (website development, maintenance, domain)
- **Portfolio Section**: Three placeholder projects plus special "free website" offer
- **Contact Form**: Full contact form with validation and submission handling
- **Client Logos**: Animated rolling banner of client logos
- **Navigation**: Responsive navbar with mobile menu
- **Footer**: Company information and legal links

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - API request to `/api/contact` endpoint
   - Backend validates data and stores in PostgreSQL
   - Success/error feedback via toast notifications

2. **Page Navigation**:
   - Client-side routing handles page transitions
   - Static content served from React components
   - Smooth scrolling navigation for single-page sections

3. **Development Workflow**:
   - Vite dev server for frontend with HMR
   - Express server for API with TypeScript compilation
   - Database migrations handled via Drizzle Kit

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for backend API
- Drizzle ORM for database operations
- Neon Database (serverless PostgreSQL)

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons
- Class Variance Authority for component variants

### Development Tools
- Vite for build tooling and development server
- ESBuild for production bundling
- TypeScript for type safety
- Replit-specific development plugins

### Form and Data Management
- React Hook Form for form handling
- Zod for runtime validation
- TanStack Query for server state management
- Date-fns for date formatting

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized React bundle to `dist/public`
- Backend: ESBuild compiles TypeScript server code to `dist/index.js`
- Database: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development mode handling
- Replit-specific configuration for cloud deployment

### File Structure
- `client/`: Frontend React application
- `server/`: Backend Express application
- `shared/`: Shared TypeScript types and schemas
- `migrations/`: Database migration files
- Configuration files in root directory

The application is designed to be deployed on Replit with automatic database provisioning and includes development-specific tooling for the Replit environment.