
# Blinkit Clone Project Documentation

This documentation provides a step-by-step guide for setting up and running the Blinkit Clone project.

## Project Overview

This is a React-based web application that replicates core functionality of Blinkit's grocery delivery service, including:
- Browsing products by category
- Location selection
- Search functionality 
- User authentication
- Shopping cart management

## Prerequisites

Before starting, ensure you have the following installed on your system:
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

## Setup Instructions

### 1. Initialize a New Project

```bash
# Create a new Vite project with React and TypeScript
npm create vite@latest blinkit-clone -- --template react-ts

# Navigate to the project directory
cd blinkit-clone
```

### 2. Install Core Dependencies

```bash
# Install React Router for navigation
npm install react-router-dom

# Install Tailwind CSS for styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install TanStack React Query for data fetching
npm install @tanstack/react-query
```

### 3. Install UI Component Libraries

```bash
# Install shadcn/ui CLI
npm install -D @shadcn/ui

# Initialize shadcn/ui
npx shadcn-ui init

# Install required Radix UI components
npm install @radix-ui/react-toast
npm install @radix-ui/react-tooltip
npm install @radix-ui/react-dialog
npm install @radix-ui/react-popover
npm install @radix-ui/react-slot
npm install @radix-ui/react-dropdown-menu

# Install Lucide icons
npm install lucide-react

# Install Sonner for toast notifications
npm install sonner
```

### 4. Configure Tailwind CSS

Update the `tailwind.config.ts` file with the provided configuration for theming and utilities.

### 5. Project Structure

Create the following directory structure:

```
src/
├── components/        # UI components
│   ├── ui/            # shadcn/ui components
│   └── ...            # App-specific components
├── contexts/          # React context providers
├── data/              # Mock data
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
└── types/             # TypeScript type definitions
```

### 6. Implementation Steps

1. **Set up TypeScript definitions**
   - Create type definitions for products, categories, cart items, etc.

2. **Create Context Providers**
   - Implement `AuthContext`, `CartContext`, `LocationContext`, and `SearchContext`

3. **Implement UI Components**
   - Create components like Navbar, ProductCard, SearchBar, etc.

4. **Create Pages**
   - Implement Index, Login, Cart, and NotFound pages

5. **Add Routing**
   - Set up React Router for navigation between pages

6. **Style with Tailwind CSS**
   - Apply styling using Tailwind classes

### 7. Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:8080

### 8. Building for Production

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Features Implementation Guide

### Authentication
- Uses a context-based approach with `AuthContext`
- Simulates login/register functionality with localStorage persistence
- Demo credentials: Email: `demo@example.com`, Password: `password`

### Search
- Implemented via `SearchContext`
- Allows filtering products by name or category
- Provides real-time results as the user types

### Cart Management
- Uses `CartContext` for state management
- Allows adding, removing, and updating quantities of products
- Calculates total price and item count

### Location Selection
- Implemented via `LocationContext`
- Allows users to select delivery location

## Best Practices

- **Component Structure**: Keep components small and focused
- **TypeScript**: Use strong typing for all components and functions
- **Context API**: Use for global state management
- **Responsive Design**: Implement mobile-first approach with Tailwind

## Troubleshooting

- If you encounter build errors, check your TypeScript definitions
- For styling issues, ensure Tailwind is properly configured
- For context-related errors, verify that components are wrapped with the appropriate providers
