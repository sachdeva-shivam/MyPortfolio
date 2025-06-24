# Portfolio Website Setup Guide

## Prerequisites
Before you start, make sure you have:
1. **Node.js** installed (version 18 or higher)
   - Download from: https://nodejs.org/
   - Check installation: `node --version`

2. **A code editor** like Visual Studio Code
   - Download from: https://code.visualstudio.com/

## Step-by-Step Setup Instructions

### Step 1: Create Project Folder
```bash
# Create a new folder for your project
mkdir my-portfolio-website
cd my-portfolio-website
```

### Step 2: Initialize the Project
```bash
# Initialize a new Node.js project
npm init -y
```

### Step 3: Install Dependencies
```bash
# Install all required packages
npm install express react react-dom @tanstack/react-query wouter
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar
npm install @radix-ui/react-button @radix-ui/react-card @radix-ui/react-dialog
npm install @radix-ui/react-input @radix-ui/react-label @radix-ui/react-progress
npm install @radix-ui/react-separator @radix-ui/react-textarea @radix-ui/react-toast
npm install @radix-ui/react-tooltip @radix-ui/react-slot
npm install framer-motion lucide-react tailwindcss tailwindcss-animate
npm install class-variance-authority clsx tailwind-merge
npm install @types/node @types/react @types/react-dom @types/express
npm install typescript tsx vite @vitejs/plugin-react
npm install autoprefixer postcss
```

### Step 4: Create Project Structure
Create these folders and files:

```
my-portfolio-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── hooks/
│   └── index.html
├── server/
├── shared/
├── attached_assets/
└── configuration files
```

### Step 5: Copy the Code Files
You'll need to create each file and copy the code from the `portfolio-source-code.md` document.

## Key Files to Create

### 1. package.json (Root folder)
Replace your package.json with:
```json
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "vite build",
    "build:backend": "esbuild server/index.ts --bundle --platform=node --target=node18 --outfile=dist/index.js",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tanstack/react-query": "^5.28.6",
    "wouter": "^3.0.0",
    "framer-motion": "^11.0.24",
    "lucide-react": "^0.367.0",
    "tailwindcss": "^3.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.30",
    "@types/react": "^18.2.73",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "esbuild": "^0.20.2",
    "postcss": "^8.4.38",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.7.1",
    "typescript": "^5.4.3",
    "vite": "^5.2.8"
  }
}
```

### 2. Create Configuration Files

**vite.config.ts**
**tailwind.config.ts** 
**tsconfig.json**
**postcss.config.js**

(Copy these from the portfolio-source-code.md)

### 3. Create All Component Files
You'll need to create each React component file in the correct folder structure.

## Running the Project

### Development Mode
```bash
# Start the development server
npm run dev
```
This will start the server on http://localhost:5000

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Common Issues and Solutions

### Issue 1: "Module not found"
**Solution**: Make sure all dependencies are installed with `npm install`

### Issue 2: "Port already in use"
**Solution**: Change the port in server/index.ts or kill the process using that port

### Issue 3: TypeScript errors
**Solution**: Make sure tsconfig.json is properly configured

### Issue 4: Styling not working
**Solution**: Ensure Tailwind CSS is properly configured and imported

## Alternative: Use This Replit Project

**Easiest Option**: You can simply fork or copy this current Replit project:
1. The project is already set up and running
2. All dependencies are installed
3. All files are in the correct structure
4. You can modify the content to match your needs

## Next Steps After Setup

1. **Customize Content**: Update the personal information, skills, experience
2. **Add Your Photo**: Replace the placeholder image with your professional photo
3. **Update Resume**: Replace the PDF file with your actual resume
4. **Modify Styling**: Adjust colors, fonts, and layout to your preference
5. **Deploy**: Use services like Vercel, Netlify, or Replit Deployments

## Getting Help

If you encounter issues:
1. Check the browser console for errors (F12 → Console)
2. Check the terminal for server errors
3. Ensure all file paths are correct
4. Verify all dependencies are installed

The portfolio website will have all the sections we built: Hero, About, Skills, Experience, Education, Certifications, and Contact form.