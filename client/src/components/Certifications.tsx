import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, IdCard, Gauge, Plug, Smartphone, Code, Cog } from "lucide-react";

const certifications = [
  {
    icon: IdCard,
    title: "ISTQB Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    description: "Fundamental testing principles and practices",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Gauge,
    title: "Performance Testing Using Gatling",
    issuer: "Udemy",
    description: "Load testing and performance optimization",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Plug,
    title: "REST API Automation",
    issuer: "Udemy",
    description: "API testing and automation frameworks",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Mobile Testing using Appium",
    issuer: "Udemy",
    description: "iOS and Android automation testing",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Code,
    title: "Software Testing using Java & Selenium",
    issuer: "Test Yantra, Noida",
    description: "Web automation testing fundamentals",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Cog,
    title: "Advanced Industrial Training",
    issuer: "NSIC, Delhi",
    description: "PLC, SCADA, HMI, VFD technologies",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Awards</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and recognition demonstrating commitment to excellence
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Professional Awards</h3>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 max-w-2xl shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Trophy className="text-yellow-500 text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Individual Excellence Award</h4>
                    <p className="text-gray-600 mb-4">Rakuten India Enterprise Pvt Ltd</p>
                    <Card className="bg-white">
                      <CardContent className="p-4">
                        <p className="text-gray-700 leading-relaxed">
                          Awarded <strong>Individual Excellence and Spot Awards 2 times in a row</strong> for achieving tasks within stipulated time 
                          and maintaining the quality of product. Recognition for outstanding performance in test automation 
                          and process improvement initiatives.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`${cert.bgColor} p-3 rounded-lg inline-flex justify-center items-center mb-4 mx-auto`}>
                      <IconComponent className={`${cert.color} text-3xl`} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 flex-grow">{cert.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{cert.issuer}</p>
                    <div className={`${cert.bgColor} p-3 rounded-lg mt-auto`}>
                      <p className="text-sm text-gray-700">{cert.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
