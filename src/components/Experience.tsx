import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: "work",
      title: "Senior Software Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and implementing best practices for code quality and performance.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers on major project",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications using React, Node.js, and various databases.",
      achievements: [
        "Built 10+ successful web applications",
        "Reduced bug reports by 50% through improved testing",
        "Collaborated with design team to improve UX",
      ],
    },
    {
      type: "work",
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2019 - 2020",
      description:
        "Contributed to frontend development, participated in code reviews, and learned industry best practices.",
      achievements: [
        "Developed responsive UI components",
        "Participated in agile development process",
        "Contributed to open-source projects",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      period: "2015 - 2019",
      description:
        "Studied software engineering, algorithms, data structures, and computer systems.",
      achievements: [
        "Graduated with Honors (GPA: 3.8/4.0)",
        "Led capstone project team",
        "Published research paper on machine learning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 text-center">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
                    {exp.type === "work" ? (
                      <Briefcase className="text-white" size={24} />
                    ) : (
                      <GraduationCap className="text-white" size={24} />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    } pl-24 md:pl-0`}
                  >
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400">{exp.period}</span>
                      </div>
                      <h3 className="text-white mb-2">{exp.title}</h3>
                      <h4 className="text-slate-300 mb-3">{exp.company}</h4>
                      <p className="text-slate-400 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-slate-400"
                          >
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
