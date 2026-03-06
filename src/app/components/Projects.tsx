import { motion } from "motion/react";
import { ExternalLink, TrendingUp, Users, Target, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      category: "SEO Campaign",
      description: "Complete SEO restructuring for an online retail brand, focusing on technical optimization and content strategy.",
      image: "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NjM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Declining organic traffic and poor keyword rankings",
      strategy: "Comprehensive technical SEO audit, keyword mapping, and content optimization",
      execution: "Implemented schema markup, improved site speed, created 50+ optimized content pieces",
      results: [
        { label: "Organic Traffic", value: "+425%" },
        { label: "Keyword Rankings", value: "Top 3 for 45 keywords" },
        { label: "Conversion Rate", value: "+180%" },
      ],
    },
    {
      title: "Social Media Growth Campaign",
      category: "Social Media Strategy",
      description: "Multi-platform social media growth strategy for a tech startup, focusing on brand awareness and community building.",
      image: "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2ODkxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Low engagement and minimal follower growth",
      strategy: "Content calendar development, influencer partnerships, and community engagement tactics",
      execution: "Daily content posting, engagement campaigns, strategic collaborations",
      results: [
        { label: "Follower Growth", value: "+320%" },
        { label: "Engagement Rate", value: "8.5%" },
        { label: "Brand Mentions", value: "+500%" },
      ],
    },
    {
      title: "Meta Ads Performance Marketing",
      category: "Paid Advertising",
      description: "High-performance Meta Ads campaign for a SaaS company targeting B2B customers with focus on lead generation.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjY4NTM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "High cost per acquisition and low ROAS",
      strategy: "Audience segmentation, creative testing, and conversion optimization",
      execution: "A/B testing of 30+ ad variations, retargeting campaigns, landing page optimization",
      results: [
        { label: "ROAS", value: "6.2x" },
        { label: "Cost Per Lead", value: "-65%" },
        { label: "Lead Quality", value: "+85%" },
      ],
    },
    {
      title: "Brand Development & Content Strategy",
      category: "Brand Strategy",
      description: "Complete brand repositioning and content marketing strategy for a lifestyle brand entering new markets.",
      image: "https://images.unsplash.com/photo-1648260295961-2773afba56ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI3NjM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Unclear brand identity and inconsistent messaging",
      strategy: "Brand positioning workshop, content pillar development, and visual identity alignment",
      execution: "Created brand guidelines, developed content templates, launched integrated campaign",
      results: [
        { label: "Brand Awareness", value: "+280%" },
        { label: "Customer Loyalty", value: "+150%" },
        { label: "Market Share", value: "+45%" },
      ],
    },
    {
      title: "Content Marketing for B2B",
      category: "Content Marketing",
      description: "Thought leadership content strategy and execution for a B2B consulting firm to establish authority.",
      image: "https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzcyNzI5MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Limited online presence and lack of thought leadership",
      strategy: "Long-form content creation, guest posting, and LinkedIn strategy",
      execution: "Published 80+ blog posts, 20 whitepapers, and regular LinkedIn articles",
      results: [
        { label: "Organic Traffic", value: "+550%" },
        { label: "Lead Generation", value: "+380%" },
        { label: "Industry Authority", value: "Top 5 in niche" },
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
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic campaigns that deliver measurable results and drive sustainable growth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl overflow-hidden border border-cyan-500/20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Project Details */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">Problem</h3>
                      <p className="text-gray-400">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">Strategy</h3>
                      <p className="text-gray-400">{project.strategy}</p>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">Execution</h3>
                      <p className="text-gray-400">{project.execution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-4">Measurable Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.results.map((result) => (
                        <div
                          key={result.label}
                          className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20"
                        >
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a custom strategy that drives growth for your brand.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
