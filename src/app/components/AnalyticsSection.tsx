import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { Progress } from "./ui/progress";

export function AnalyticsSection() {
  const metrics = [
    { icon: TrendingUp, label: "Average ROI", value: "350%", progress: 85, color: "cyan" },
    { icon: DollarSign, label: "Average ROAS", value: "5.2x", progress: 90, color: "purple" },
    { icon: Users, label: "Engagement Growth", value: "+180%", progress: 75, color: "pink" },
    { icon: Target, label: "Conversion Rate", value: "+240%", progress: 80, color: "blue" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Results That Speak
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Data-driven strategies delivering measurable impact across campaigns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="text-cyan-400" size={32} />
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        {metric.value}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3">{metric.label}</p>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Campaign Performance Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-gray-400 text-sm mb-2">Traffic Growth</div>
                <div className="text-3xl font-bold text-cyan-400">+425%</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Lead Generation</div>
                <div className="text-3xl font-bold text-purple-400">+320%</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Ad Spend Efficiency</div>
                <div className="text-3xl font-bold text-pink-400">+65%</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Brand Reach</div>
                <div className="text-3xl font-bold text-blue-400">2.5M+</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
