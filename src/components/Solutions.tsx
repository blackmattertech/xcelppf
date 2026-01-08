import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlassCard } from './GlassCard';

const solutions = [
  {
    problem: 'WhatsApp leads scattered',
    solution: 'Auto-captured into CRM',
    detail: 'Every WhatsApp message automatically creates a lead entry with contact details, timestamp, and conversation history'
  },
  {
    problem: 'Missed follow-ups',
    solution: 'Task reminders & notifications',
    detail: 'Automated follow-up schedules with push notifications, email alerts, and WhatsApp reminders for your team'
  },
  {
    problem: 'No visibility on conversions',
    solution: 'Live sales pipeline dashboard',
    detail: 'Real-time visualization of every lead\'s journey from inquiry to conversion with stage-wise analytics'
  },
  {
    problem: 'Poor team accountability',
    solution: 'Employee performance tracking',
    detail: 'Individual dashboards showing calls made, leads handled, conversions closed, and response times'
  },
  {
    problem: 'No business reports',
    solution: 'Real-time analytics & insights',
    detail: 'Dynamic dashboards showing revenue pipeline, conversion rates, lead sources, and growth metrics'
  },
  {
    problem: 'Manual data entry errors',
    solution: 'Automated data sync',
    detail: 'Integration with WhatsApp, calls, forms, and ads automatically populates all data with zero manual entry'
  }
];

export function Solutions() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How We{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Solve Each Problem
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Direct problem-to-solution mapping. Every challenge has a powerful answer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                  {/* Problem */}
                  <div className="text-center md:text-right">
                    <div className="inline-block px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 mb-2">
                      <span className="text-sm text-red-400 font-medium">Problem</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-300">{item.problem}</h3>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex justify-center"
                    animate={{
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Solution */}
                  <div className="text-center md:text-left">
                    <div className="inline-block px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 mb-2">
                      <span className="text-sm text-green-400 font-medium">Solution</span>
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      {item.solution}
                    </h3>
                    <p className="text-sm text-gray-400">{item.detail}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 inline-block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-green-400">100% Problem Coverage</div>
                <div className="text-sm text-gray-400">Every pain point has a built-in solution</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
