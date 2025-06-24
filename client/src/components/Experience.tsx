import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Clock, Bug, Award, Code, Smartphone, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "QA Engineer 2",
    company: "Rakuten India Enterprise Pvt Ltd",
    location: "Bengaluru, IN",
    period: "Jun 2020 - Present",
    domain: "E-Commerce Domain",
    duration: "4+ Years",
    achievements: [
      {
        icon: Trophy,
        text: "Increased test coverage by 30% through automated Selenium scripts",
      },
      {
        icon: Clock,
        text: "Reduced regression time by 40% using parallelized Selenium Grid",
      },
      {
        icon: Bug,
        text: "Decreased bug recurrence by 25% through root cause analysis",
      },
      {
        icon: Award,
        text: "Awarded Individual Excellence and Spot Awards 2 times",
      },
      {
        icon: Code,
        text: "Developed 500+ reusable test cases and automation scripts",
      },
      {
        icon: Smartphone,
        text: "Reduced mobile testing effort from 3 days to 1 day using Appium",
      },
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-primary",
  },
  {
    title: "Quality Assurance Engineer",
    company: "Vidhyut Control (India) Pvt Ltd",
    location: "Ghaziabad, IN",
    period: "Aug 2018 - Dec 2019",
    domain: "Electrical Systems",
    duration: "1.5 Years",
    achievements: [
      {
        icon: Trophy,
        text: "Verified Bill of Materials (BOM) for 100% accuracy",
      },
      {
        icon: Award,
        text: "Tested electrical panels ensuring compliance with safety standards",
      },
      {
        icon: Trophy,
        text: "Achieved 100% customer satisfaction in installations",
      },
      {
        icon: Code,
        text: "Collaborated with cross-functional teams for quality improvements",
      },
    ],
    bgColor: "bg-purple-50",
    borderColor: "border-secondary",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A track record of delivering quality solutions and driving process improvements
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg"></div>

              <div className={`ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Company Info */}
                <div className={`${index % 2 === 1 ? 'md:order-2 md:pl-8' : 'md:text-right md:pr-8'}`}>
                  <Card className={`${exp.bgColor} border-l-4 ${exp.borderColor} shadow-lg`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{exp.domain}</Badge>
                        <Badge variant="outline">{exp.duration}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Achievements */}
                <div className={`mt-4 md:mt-0 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h5 className="font-semibold text-gray-800 mb-4">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => {
                          const IconComponent = achievement.icon;
                          return (
                            <li key={achIndex} className="flex items-start">
                              <IconComponent className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{achievement.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
