# Portfolio Website Source Code

## Main Entry Files

### package.json
```json
{
  "name": "rest-express",
  "version": "1.0.0",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "vite build",
    "build:backend": "esbuild server/index.ts --bundle --platform=node --target=node18 --outfile=dist/index.js --external:express --external:ws",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@neondatabase/serverless": "^0.9.1",
    "@radix-ui/react-*": "various versions",
    "@tanstack/react-query": "^5.28.6",
    "express": "^4.19.2",
    "framer-motion": "^11.0.24",
    "lucide-react": "^0.367.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.4.3",
    "vite": "^5.2.8",
    "wouter": "^3.0.0"
  }
}
```

### client/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Shivam Sachdeva - QA Automation Engineer | Professional Portfolio</title>
    <meta name="description" content="Shivam Sachdeva - Results-driven QA Engineer with 4+ years of experience in test automation, API testing, and manual testing. Expertise in Selenium, Appium, and AI/ML integration in QA practices." />
    <meta property="og:title" content="Shivam Sachdeva - QA Automation Engineer" />
    <meta property="og:description" content="Professional QA Engineer specializing in test automation, API testing, and AI/ML integration. Currently pursuing Executive PG in AI/ML from IIIT Bangalore." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### client/src/main.tsx
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### client/src/App.tsx
```tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

## CSS Styling

### client/src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --primary: hsl(207, 90%, 54%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(224, 71%, 36%);
  --accent: hsl(151, 55%, 41.5%);
  --gradient-primary: linear-gradient(135deg, hsl(207, 90%, 54%) 0%, hsl(259, 46%, 62%) 100%);
  /* ... other CSS variables ... */
}

.dark {
  --background: hsl(240, 10%, 3.9%);
  --foreground: hsl(0, 0%, 98%);
  /* ... dark mode variables ... */
}

@layer base {
  body {
    @apply font-sans antialiased bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .gradient-bg {
    background: var(--gradient-primary);
  }
  .section-padding {
    @apply py-20;
  }
  .container-padding {
    @apply container mx-auto px-6;
  }
}
```

## React Components

### Portfolio Page (client/src/pages/portfolio.tsx)
```tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Portfolio() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Shivam_Sachdeva_QA_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      
      {/* Floating Resume Download Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleDownloadResume}
          className="bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
          title="Download Resume"
        >
          <Download className="h-5 w-5 group-hover:animate-bounce" />
        </Button>
      </div>
    </div>
  );
}
```

### Hero Component (client/src/components/Hero.tsx)
```tsx
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Shivam_Sachdeva_QA_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-padding text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Professional Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              alt="Shivam Sachdeva - Professional Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">Shivam Sachdeva</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-blue-100">QA Automation Engineer</h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-blue-50">
            Results-driven QA Engineer with 4+ years of experience in test automation, API testing, and manual testing. 
            Currently pursuing AI/ML to integrate advanced strategies into QA practices.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bengaluru, IN</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 8826815460</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleDownloadResume}
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3 font-semibold shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/shivam-sachdeva" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/shivam-sachdeva" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="mailto:sachdeva.shivam11@gmail.com" className="text-white hover:text-blue-200 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-8 w-56 h-56 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-8 right-1/3 w-32 h-32 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
}
```

## Backend Server

### server/index.ts
```typescript
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  log(`Error ${status}: ${message}`);
  res.status(status).json({ message });
});

async function startServer() {
  const server = await registerRoutes(app);
  
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
}

startServer().catch((err) => {
  log(`Failed to start server: ${err.message}`);
  process.exit(1);
});
```

### server/routes.ts
```typescript
import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      console.log("Contact form submission:", {
        name, email, subject, message,
        timestamp: new Date().toISOString(),
      });

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "ShivamSachdeva_QA2_Resume_1750747947911.pdf");
      
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ error: "Resume file not found" });
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Shivam_Sachdeva_QA_Resume.pdf");
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
```

## Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: "dist/public",
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

This portfolio website features:
- Modern React with TypeScript and Tailwind CSS
- Responsive design with smooth animations
- Express.js backend for contact form and resume download
- Professional sections: Hero, About, Skills, Experience, Education, Certifications, Contact
- Built-in contact form functionality
- Resume download capability
- Optimized for both development and production

To run the project:
1. Install dependencies: `npm install`
2. Development: `npm run dev`
3. Production build: `npm run build && npm start`