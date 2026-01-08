import { motion } from 'motion/react';
import { MessageSquareOff, AlertCircle, TrendingDown, Users, FileQuestion, Clock } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const problems = [
  {
    icon: MessageSquareOff,
    title: 'Leads Scattered Everywhere',
    description: 'WhatsApp, Excel, phone calls—no single source of truth',
    impact: 'Missing opportunities worth ₹5-10L monthly due to poor tracking',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Clock,
    title: 'No Structured Follow-ups',
    description: 'Manual reminders fail, customers slip through the cracks',
    impact: '40-60% of leads never get followed up after first contact',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: TrendingDown,
    title: 'Low Conversion Ratio',
    description: 'No visibility into why leads don\'t convert',
    impact: 'Industry average: 15-20%, could be 35%+ with proper tracking',
    color: 'from-yellow-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Poor Sales Accountability',
    description: 'Can\'t track individual team member performance',
    impact: 'Top performers invisible, underperformers unnoticed',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: FileQuestion,
    title: 'No Real-time Reports',
    description: 'Making decisions based on gut feeling, not data',
    impact: 'Blind spots in pipeline, revenue forecasting impossible',
    color: 'from-purple-500 to-blue-500'
  },
  {
    icon: AlertCircle,
    title: 'Manual Work & Human Errors',
    description: 'Data entry mistakes, duplicate entries, missed updates',
    impact: 'Wasted 15-20 hours per week on administrative tasks',
    color: 'from-blue-500 to-cyan-500'
  }
];

export function Problems() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Problems You're{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Facing Every Day
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We understand your challenges. Here's what's holding your business back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <GlassCard className="p-6 h-full">
                <div className="mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${problem.color} p-2.5 inline-flex items-center justify-center`}
                    animate={{
                      rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <problem.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{problem.description}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-cyan-400 font-semibold mb-1">
                      Impact on Business:
                    </div>
                    <div className="text-sm text-gray-300">{problem.impact}</div>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
            <span className="text-sm text-cyan-400">
              These problems cost you ₹10-20L+ annually in lost revenue
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
