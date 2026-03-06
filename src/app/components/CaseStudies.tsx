import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Target, BarChart3, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "SaaS Lead Generation Campaign",
      client: "TechFlow Solutions",
      industry: "Software",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjY4NTM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge: "High customer acquisition costs and low conversion rates from paid advertising campaigns.",
      strategy: "Implemented a multi-channel approach combining Meta Ads, LinkedIn campaigns, and retargeting strategies with optimized landing pages and A/B testing.",
      execution: [
        "Created 40+ ad variations across platforms",
        "Developed 5 optimized landing pages",
        "Implemented advanced audience segmentation",
        "Set up conversion tracking and analytics",
      ],
      results: {
        roi: "420%",
        roas: "6.8x",
        leads: "2,450",
        costPerLead: "-72%",
      },
      chartData: [
        { month: "Jan", leads: 120, cost: 85 },
        { month: "Feb", leads: 280, cost: 70 },
        { month: "Mar", leads: 450, cost: 55 },
        { month: "Apr", leads: 680, cost: 42 },
        { month: "May", leads: 920, cost: 28 },
      ],
    },
    {
      title: "E-commerce SEO Transformation",
      client: "StyleHub Fashion",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NjM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge: "Declining organic traffic and poor visibility for product category pages in search engines.",
      strategy: "Comprehensive technical SEO overhaul, content optimization, and strategic link building to improve domain authority and keyword rankings.",
      execution: [
        "Conducted full technical SEO audit",
        "Optimized 500+ product pages",
        "Created 80 SEO-focused blog posts",
        "Built high-quality backlink portfolio",
      ],
      results: {
        roi: "580%",
        roas: "N/A",
        leads: "5,200",
        costPerLead: "Organic",
      },
      chartData: [
        { month: "Jan", traffic: 8500, conversions: 180 },
        { month: "Feb", traffic: 12800, conversions: 295 },
        { month: "Mar", traffic: 18400, conversions: 425 },
        { month: "Apr", traffic: 26700, conversions: 640 },
        { month: "May", traffic: 35200, conversions: 890 },
        { month: "Jun", traffic: 44500, conversions: 1150 },
      ],
    },
    {
      title: "Social Media Brand Growth",
      client: "GreenLife Wellness",
      industry: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2ODkxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      challenge: "Low social media engagement and minimal brand awareness in a competitive market.",
      strategy: "Developed comprehensive social media strategy with focus on community building, influencer partnerships, and viral content creation.",
      execution: [
        "Created daily content calendar",
        "Partnered with 15 micro-influencers",
        "Launched 3 viral campaigns",
        "Implemented community engagement program",
      ],
      results: {
        roi: "350%",
        roas: "4.2x",
        leads: "3,800",
        costPerLead: "-58%",
      },
      chartData: [
        { month: "Jan", followers: 4200, engagement: 2.8 },
        { month: "Feb", followers: 7800, engagement: 4.2 },
        { month: "Mar", followers: 14500, engagement: 6.5 },
        { month: "Apr", followers: 23200, engagement: 8.1 },
        { month: "May", followers: 35600, engagement: 9.4 },
        { month: "Jun", followers: 48200, engagement: 10.2 },
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
              Case Studies
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In-depth analysis of successful campaigns with measurable outcomes and proven ROI
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl border border-cyan-500/20 overflow-hidden"
            >
              {/* Header Image */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 z-10" />
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">{study.title}</h2>
                    <p className="text-cyan-400 text-lg">{study.client} • {study.industry}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Challenge & Strategy */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Challenge</h3>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Strategy</h3>
                    <p className="text-gray-300">{study.strategy}</p>
                  </div>
                </div>

                {/* Execution */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Execution</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.execution.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20 text-center">
                      <TrendingUp className="text-cyan-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{study.results.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 text-center">
                      <DollarSign className="text-purple-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-purple-400 mb-1">{study.results.roas}</div>
                      <div className="text-sm text-gray-400">ROAS</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-xl p-6 border border-pink-500/20 text-center">
                      <Users className="text-pink-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-pink-400 mb-1">{study.results.leads}</div>
                      <div className="text-sm text-gray-400">Total Leads</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 text-center">
                      <Target className="text-blue-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-blue-400 mb-1">{study.results.costPerLead}</div>
                      <div className="text-sm text-gray-400">Cost/Lead</div>
                    </div>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6">Performance Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={study.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0a0a0f",
                          border: "1px solid rgba(34, 211, 238, 0.3)",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey={Object.keys(study.chartData[0])[1]}
                        stroke="#22d3ee"
                        strokeWidth={3}
                        dot={{ fill: "#22d3ee", r: 6 }}
                      />
                      {Object.keys(study.chartData[0]).length > 2 && (
                        <Line
                          type="monotone"
                          dataKey={Object.keys(study.chartData[0])[2]}
                          stroke="#a855f7"
                          strokeWidth={3}
                          dot={{ fill: "#a855f7", r: 6 }}
                        />
                      )}
                    </LineChart>
                  </ResponsiveContainer>
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
            Want Results Like These?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom strategy to achieve your business goals.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
