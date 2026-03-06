import { motion } from "motion/react";
import { Target, TrendingUp, Users, Zap, BarChart3, Search, MessageSquare, DollarSign, Eye, Brain } from "lucide-react";

export function Strategies() {
  const strategies = [
    {
      icon: Target,
      title: "Audience-First Strategy",
      description: "Deep dive into audience research to understand demographics, psychographics, and behavioral patterns.",
      steps: [
        "Comprehensive audience persona development",
        "Customer journey mapping across touchpoints",
        "Behavioral analysis and segmentation",
        "Competitive audience analysis",
      ],
      metrics: ["Audience Engagement Rate", "Customer Lifetime Value", "Retention Rate"],
      color: "blue",
    },
    {
      icon: Brain,
      title: "Content-Driven Growth",
      description: "Strategic content planning that aligns with business goals and drives organic discovery.",
      steps: [
        "Content pillar identification and planning",
        "SEO-optimized content calendar",
        "Multi-format content adaptation",
        "Content performance tracking and optimization",
      ],
      metrics: ["Organic Traffic Growth", "Content Engagement", "Share Rate"],
      color: "indigo",
    },
    {
      icon: Search,
      title: "SEO-First Approach",
      description: "Technical and content SEO strategies to dominate search rankings and drive qualified traffic.",
      steps: [
        "Comprehensive keyword research and mapping",
        "Technical SEO audit and optimization",
        "On-page and off-page SEO implementation",
        "Local SEO and featured snippet optimization",
      ],
      metrics: ["Keyword Rankings", "Organic Visibility", "Domain Authority"],
      color: "sky",
    },
    {
      icon: DollarSign,
      title: "Performance Marketing",
      description: "Data-driven paid advertising strategies focused on maximizing ROI and ROAS.",
      steps: [
        "Multi-platform campaign strategy",
        "Advanced audience targeting and segmentation",
        "Creative testing and optimization",
        "Conversion funnel optimization",
      ],
      metrics: ["ROAS", "Cost Per Acquisition", "Conversion Rate"],
      color: "cyan",
    },
    {
      icon: Users,
      title: "Social-First Engagement",
      description: "Building authentic communities and driving engagement through strategic social media presence.",
      steps: [
        "Platform-specific content strategy",
        "Community management and engagement",
        "Influencer partnership development",
        "Social listening and trend adaptation",
      ],
      metrics: ["Follower Growth", "Engagement Rate", "Community Sentiment"],
      color: "blue",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Optimization",
      description: "Continuous testing and optimization based on analytics and performance data.",
      steps: [
        "Comprehensive analytics setup",
        "A/B and multivariate testing",
        "Performance dashboard creation",
        "Predictive analytics and forecasting",
      ],
      metrics: ["Conversion Improvement", "Campaign Efficiency", "Data Accuracy"],
      color: "violet",
    },
    {
      icon: MessageSquare,
      title: "Brand Storytelling",
      description: "Creating compelling brand narratives that resonate with target audiences and build loyalty.",
      steps: [
        "Brand voice and messaging development",
        "Story arc planning and execution",
        "Multi-channel narrative consistency",
        "Emotional connection building",
      ],
      metrics: ["Brand Awareness", "Brand Recall", "Customer Loyalty"],
      color: "purple",
    },
    {
      icon: Zap,
      title: "Agile Marketing",
      description: "Rapid experimentation and iteration to stay ahead of market trends and competition.",
      steps: [
        "Sprint-based campaign planning",
        "Quick win identification and execution",
        "Rapid testing and learning cycles",
        "Market trend adaptation",
      ],
      metrics: ["Time to Market", "Campaign Velocity", "Innovation Index"],
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      indigo: "from-indigo-500 to-indigo-600",
      sky: "from-sky-500 to-sky-600",
      cyan: "from-cyan-500 to-cyan-600",
      violet: "from-violet-500 to-violet-600",
      purple: "from-purple-500 to-purple-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">
              Marketing Strategies
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proven frameworks and methodologies that drive sustainable growth and measurable results
          </p>
        </motion.div>

        {/* Strategy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-blue-950/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-blue-900/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Strategic Approach</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-gray-400">Core Strategies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Data-Driven</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">360°</div>
              <div className="text-gray-400">Comprehensive</div>
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            Each strategy is customized to your unique business goals, target audience, and market position. 
            Through continuous optimization and data analysis, we ensure every decision is backed by insights 
            and aligned with measurable outcomes.
          </p>
        </motion.div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 rounded-2xl p-8 border border-blue-900/30 hover:border-blue-700/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(strategy.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{strategy.title}</h3>
                    <p className="text-gray-400">{strategy.description}</p>
                  </div>
                </div>

                {/* Implementation Steps */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Implementation</h4>
                  <div className="space-y-2">
                    {strategy.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Metrics</h4>
                  <div className="flex flex-wrap gap-2">
                    {strategy.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-blue-950/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-blue-900/30"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Strategic Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Research", desc: "Market & audience analysis" },
              { num: "02", title: "Strategy", desc: "Custom framework development" },
              { num: "03", title: "Execute", desc: "Implementation & launch" },
              { num: "04", title: "Measure", desc: "Data collection & analysis" },
              { num: "05", title: "Optimize", desc: "Continuous improvement" },
            ].map((phase, index) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-500/30 mb-2">{phase.num}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl p-12 border border-blue-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Custom Strategy?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a tailored marketing strategy that aligns with your business goals and drives real results.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow text-white"
          >
            Schedule Strategy Session
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
