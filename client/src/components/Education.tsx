import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, University, Lightbulb, Leaf, ServerCog, TrendingUp, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning journey from engineering fundamentals to cutting-edge AI/ML technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Education - AI/ML Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="text-primary text-2xl mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Executive PG in Machine Learning & AI</h3>
                        <p className="text-primary font-semibold">IIIT Bangalore & LJMU, England</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Mar 2023 - Mar 2025</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced program focusing on supervised and unsupervised learning, deep learning, and data science. 
                      Emphasizes practical applications in real-world scenarios with hands-on experience in implementing 
                      AI models and integrating machine learning into software solutions.
                    </p>

                    <div className="pt-6 border-t border-blue-200">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Machine Learning</Badge>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Deep Learning</Badge>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Data Science</Badge>
                        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">AI in QA</Badge>
                        <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Automation Enhancement</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <Card className="text-center shadow-sm">
                      <CardContent className="p-4">
                        <div className="text-primary font-bold text-lg">In Progress</div>
                        <div className="text-gray-600 text-sm">Current</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Undergraduate Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <University className="text-secondary text-2xl mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology (B.Tech)</h3>
                        <p className="text-secondary font-semibold">Electrical and Electronics Engineering</p>
                        <p className="text-gray-600">Krishna Institute of Engineering & Technology</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Aug 2013 - Aug 2017</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Ghaziabad, IN</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Comprehensive program providing in-depth knowledge of electrical systems, electronics, 
                      power generation, and distribution. Gained hands-on experience in circuit design, 
                      electrical panel testing, and power systems analysis.
                    </p>

                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-start">
                          <Lightbulb className="text-yellow-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          <span>Energy-efficient solutions for electrical infrastructure</span>
                        </li>
                        <li className="flex items-start">
                          <Leaf className="text-green-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          <span>Research on renewable energy systems</span>
                        </li>
                        <li className="flex items-start">
                          <ServerCog className="text-blue-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          <span>Circuit design and electrical panel testing</span>
                        </li>
                        <li className="flex items-start">
                          <TrendingUp className="text-purple-500 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          <span>Power systems analysis and optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <Card className="text-center shadow-sm">
                      <CardContent className="p-4">
                        <div className="text-secondary font-bold text-lg">Completed</div>
                        <div className="text-gray-600 text-sm">2017</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
