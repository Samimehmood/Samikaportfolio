import { motion } from "motion/react";
import { ArrowDown, Sparkles, Target, TrendingUp, Award } from "lucide-react";
import profileImage from "figma:asset/6c32ca616c861ccd5465f57775963c9302ba23eb.png";
import { AnalyticsSection } from "./AnalyticsSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function Home() {
  const skills = [
    "Office Automation",
    "Copywriting",
    "Content Creation",
    "Visual Design",
    "Brand Management & Strategy",
    "Project Management",
    "Search Engine Optimization (SEO)",
    "Analytics & Campaign Performance Tracking",
  ];

  const experience = [
    { title: "SEO Content Writer", company: "Expert eStores" },
    { title: "Social Media Executive", company: "Stexity" },
    { title: "Digital Content Marketer", company: "Cubix" },
    { title: "Digital Content Marketer", company: "Kamsoft" },
    { title: "Digital Content Marketer", company: "Strive Innovation" },
  ];

  const education = [
    { degree: "Masters in Media Sciences", institution: "Szabist" },
    { degree: "Bachelors in Media Studies", institution: "Iqra University" },
    { degree: "Intermediate (Pre-Medical)", institution: "Jinnah Government College" },
    { degree: "Matriculation (Biology)", institution: "The Educators, North Nazimabad, Karachi" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6"
              >
                <Sparkles className="text-blue-400" size={16} />
                <span className="text-blue-400 text-sm">Digital Marketing Expert</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block">Sami</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">
                  Mehmood
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Turning attention into impact. Strategy, creativity, and data—combined to build brands that dominate the digital world.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Multiple glowing layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-full blur-3xl opacity-40 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-blue-300/30 to-transparent rounded-full blur-2xl opacity-50" />
                
                {/* Image container with sophisticated border */}
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-blue-400 to-white rounded-full opacity-75 blur-sm" />
                  
                  {/* Inner border */}
                  <div className="relative rounded-full overflow-hidden border-4 border-blue-900/50 shadow-2xl shadow-blue-500/60 bg-gradient-to-br from-blue-950 to-black">
                    <img
                      src={profileImage}
                      alt="Sami Mehmood"
                      className="w-full h-full object-cover mix-blend-lighten"
                    />
                    {/* Overlay gradient for blending */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/40 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-blue-400" size={32} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                About Me
              </span>
            </h2>

            <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I create content that connects and visuals that make an impact. Skilled in social media management, Meta Ads, SEO, and brand strategy, I help brands grow their online presence with engaging copy and creative design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a background in Media Sciences, I bring a creative yet analytical perspective and thrive in collaborative, results-driven environments where strategy meets innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Skills & Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                  className="bg-gradient-to-br from-blue-950/30 to-slate-900/20 rounded-lg p-6 border border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                    <p className="text-gray-300">{skill}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Work Experience
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-white" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#0a0e1a]" />
                  
                  <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 rounded-lg p-6 border border-blue-900/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-1">{job.title}</h3>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Education
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 rounded-lg p-6 border border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 p-12 md:p-16 border border-blue-500/30"
          >
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's work together to create strategies that deliver real results.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                Start a Project
              </motion.a>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
