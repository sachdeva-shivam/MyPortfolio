import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Bot, Code, TestTube, Database, Settings, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Automation Tools",
    icon: Bot,
    color: "text-primary",
    skills: [
      { name: "Selenium", level: 95 },
      { name: "Appium", level: 90 },
      { name: "Jenkins", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "text-accent",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "Gherkin", level: 80 },
    ],
  },
  {
    title: "Testing Frameworks",
    icon: TestTube,
    color: "text-secondary",
    skills: [
      { name: "TestNG", level: 95 },
      { name: "Cucumber BDD", level: 90 },
      { name: "REST Assured", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-primary",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "MariaDB", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    color: "text-accent",
    skills: [
      { name: "Postman", level: 90 },
      { name: "JIRA", level: 95 },
      { name: "Git", level: 85 },
    ],
  },
  {
    title: "Methodologies",
    icon: GitBranch,
    color: "text-secondary",
    skills: [
      { name: "Agile/Scrum", level: 95 },
      { name: "Test Planning", level: 90 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

function SkillProgress({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{skill.name}</span>
        <span className="text-gray-600">{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across automation tools, programming languages, and testing frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                      <IconComponent className={`${category.color} mr-3 h-6 w-6`} />
                      {category.title}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillProgress
                          key={skill.name}
                          skill={skill}
                          delay={categoryIndex * 200 + skillIndex * 100}
                        />
                      ))}
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
