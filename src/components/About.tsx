import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Code2, Rocket, Users, Award } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development process with attention to deadlines",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering high-quality solutions",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg transform rotate-3"></div>
                <div className="relative bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <p className="text-slate-300 mb-4">
                    I'm a passionate software developer with a strong foundation in
                    both frontend and backend technologies. My journey in software
                    development started with a curiosity for how things work, and
                    has evolved into a career focused on creating impactful digital
                    solutions.
                  </p>
                  <p className="text-slate-300 mb-4">
                    I specialize in building responsive web applications using
                    modern frameworks and tools. My approach combines technical
                    expertise with creative problem-solving to deliver products
                    that users love.
                  </p>
                  <p className="text-slate-300">
                    When I'm not coding, you'll find me exploring new technologies,
                    contributing to open-source projects, or sharing knowledge with
                    the developer community.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white mb-2">{highlight.title}</h3>
                  <p className="text-slate-400">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
