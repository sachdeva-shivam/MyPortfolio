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
              src="/images/shivam.jpeg"
              // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
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
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3 font-semibold shadow-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ershivamsachdeva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/sachdeva-shivam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="mailto:sachdeva.shivam11@gmail.com"
              className="text-white hover:text-blue-200 transition-colors"
            >
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
