import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content: "Sami's expertise in social media strategy transformed our brand presence. His data-driven approach and creative content increased our engagement by 200% in just three months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, GrowthLabs",
      content: "Working with Sami on our Meta Ads campaigns was a game-changer. His optimization strategies delivered a 5x ROAS, exceeding all our expectations. Highly professional and results-oriented.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, BrandVision",
      content: "Sami's SEO and content marketing skills are exceptional. He helped us rank for competitive keywords and drove organic traffic growth of 350%. A true digital marketing expert.",
      rating: 5,
    },
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What clients say about working together
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20 relative"
              >
                <Quote className="absolute top-4 right-4 text-cyan-500/20" size={48} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 relative z-10">{testimonial.content}</p>

                <div className="border-t border-cyan-500/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
