import { motion } from "motion/react";
import { Share2, Target, Search, PenTool, Lightbulb, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media management that builds communities and drives engagement.",
      image: "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2ODkxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      subServices: [
        "Social Media Strategy",
        "Content Calendar Planning",
        "Community Management",
        "Engagement Growth",
      ],
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Data-driven ad campaigns optimized for maximum ROI and ROAS.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjY4NTM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      subServices: [
        "Meta Ads",
        "Campaign Optimization",
        "ROAS Improvement",
        "Performance Marketing",
      ],
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Comprehensive SEO strategies to boost your organic visibility and rankings.",
      image: "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NjM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      subServices: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "SEO Content Strategy",
      ],
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Compelling content that tells your brand story and drives conversions.",
      image: "https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzcyNzI5MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      subServices: [
        "Blog Writing",
        "Brand Storytelling",
        "Copywriting",
        "Social Media Content",
      ],
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Strategic brand positioning to differentiate and grow your business.",
      image: "https://images.unsplash.com/photo-1648260295961-2773afba56ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI3NjM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      subServices: [
        "Brand Positioning",
        "Digital Identity",
        "Audience Research",
        "Market Analysis",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to drive growth and deliver measurable results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative ${!isEven ? "md:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10" />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={!isEven ? "md:col-start-1 md:row-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl mb-6">
                      <Icon className="text-white" size={32} />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      {service.title}
                    </h2>

                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      {service.subServices.map((sub) => (
                        <div key={sub} className="flex items-center gap-3">
                          <ArrowRight className="text-cyan-400 flex-shrink-0" size={20} />
                          <span className="text-gray-400">{sub}</span>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how I can create a tailored digital marketing strategy for your specific needs.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
