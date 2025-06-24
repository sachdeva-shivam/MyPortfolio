import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-padding">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Shivam Sachdeva</h3>
          <p className="text-gray-300 mb-6">QA Automation Engineer | AI/ML Enthusiast</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/shivam-sachdeva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/shivam-sachdeva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="mailto:sachdeva.shivam11@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Shivam Sachdeva. All rights reserved. | Built with passion for quality and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
