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
    // Create a link to download the PDF resume
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
