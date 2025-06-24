# Quick Start Guide for Portfolio Website

## Easiest Way: Use This Replit Project

**You're already looking at a working portfolio!** This project is fully functional right now.

### To Make It Yours:
1. **Fork this Replit**: Click "Fork" to create your own copy
2. **Update your information**: Edit the files to replace my sample data with yours
3. **Deploy**: Click "Deploy" in Replit to make it live

### Files to Update:
- `client/src/components/Hero.tsx` - Your name, title, contact info
- `client/src/components/About.tsx` - Your professional summary
- `client/src/components/Skills.tsx` - Your technical skills
- `client/src/components/Experience.tsx` - Your work experience
- `client/src/components/Education.tsx` - Your education background
- `attached_assets/` - Replace with your actual resume PDF

## Alternative: Run on Your Computer

### Prerequisites:
- Install Node.js from https://nodejs.org/ (version 18+)
- Install a code editor like VS Code

### Steps:
1. **Download the code**: Copy all files from this Replit project
2. **Create project folder**:
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: Go to http://localhost:5000

### Project Structure:
```
my-portfolio/
├── client/           # Frontend React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   └── index.html
├── server/           # Backend Express server
├── attached_assets/  # Your resume PDF
└── package.json     # Dependencies
```

## Understanding the Code

### Frontend (React):
- **Components**: Reusable UI pieces (Hero, Skills, etc.)
- **Pages**: Full page layouts
- **Styling**: Tailwind CSS for design
- **Animations**: Framer Motion for smooth effects

### Backend (Express):
- **Contact Form**: Handles form submissions
- **Resume Download**: Serves your PDF resume
- **Static Files**: Serves the website files

### Key Technologies:
- **React**: JavaScript library for building user interfaces
- **TypeScript**: JavaScript with type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Express.js**: Web server framework
- **Vite**: Fast build tool

## Customizing Your Portfolio

### 1. Personal Information
Edit `client/src/components/Hero.tsx`:
```jsx
<h1>Your Name</h1>
<h2>Your Job Title</h2>
<span>Your Phone</span>
<span>Your Location</span>
```

### 2. Skills
Edit `client/src/components/Skills.tsx`:
```jsx
const skillCategories = [
  {
    title: "Your Skill Category",
    skills: [
      { name: "Your Skill", level: 90 },
    ],
  },
];
```

### 3. Experience
Edit `client/src/components/Experience.tsx`:
```jsx
const experiences = [
  {
    title: "Your Job Title",
    company: "Your Company",
    period: "Start - End Date",
    achievements: [
      { text: "Your achievement" },
    ],
  },
];
```

### 4. Resume PDF
1. Add your resume to `attached_assets/` folder
2. Update the filename in `server/routes.ts`

## Deployment Options

### Replit Deployment (Easiest):
1. Click "Deploy" button in Replit
2. Choose "Autoscale"
3. Your site will be live at `yourproject.replit.app`

### Other Options:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop your build folder
- **Railway**: Connect GitHub for automatic deployments

## Troubleshooting

### Common Issues:
1. **Port in use**: Change port in `server/index.ts`
2. **Dependencies missing**: Run `npm install`
3. **Build errors**: Check for typos in file names
4. **Styling broken**: Ensure Tailwind CSS is properly configured

### Getting Help:
- Check browser console (F12 → Console) for frontend errors
- Check terminal for server errors
- Ensure all file paths match exactly

## What You Get:
✓ Professional hero section with your photo
✓ About section with achievements
✓ Interactive skills showcase
✓ Work experience timeline
✓ Education background
✓ Certifications display
✓ Contact form
✓ Resume download
✓ Mobile-responsive design
✓ Smooth animations

The portfolio is designed to showcase your professional background effectively to potential employers or clients.