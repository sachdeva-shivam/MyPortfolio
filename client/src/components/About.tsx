import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const achievements = [
    { number: "4+", label: "Years Experience" },
    { number: "500+", label: "Test Cases Created" },
    { number: "30%", label: "Test Coverage Increase" },
    { number: "40%", label: "Regression Time Reduction" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Professional Summary</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proven expertise in developing automation frameworks using Selenium and Appium, with significant 
              reductions in manual testing time and improvements in test coverage. Skilled in Agile methodologies, 
              test case designing, and troubleshooting.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing an Executive Postgraduate Program in AI and Machine Learning from IIIT Bangalore, 
              aiming to integrate advanced AI strategies into QA practices. ISTQB certified and passionate about 
              leveraging AI/ML technologies in testing frameworks.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-gray-600 text-sm">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional QA testing environment"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
