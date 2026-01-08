import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { TrendingUp, Users, Target, DollarSign, Activity, Award } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
  delay: number;
}

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.round(latest).toString())
    });
    return controls.stop;
  }, [value, count]);

  return <span>{prefix}{displayValue}{suffix}</span>;
}

function MetricCard({ icon: Icon, label, value, suffix = '', prefix = '', color, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <GlassCard className="p-6">
        <div className="flex items-start gap-4">
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500/20 to-${color}-500/5 flex items-center justify-center border border-${color}-500/30`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className={`w-6 h-6 text-${color}-400`} />
          </motion.div>
          <div className="flex-1">
            <div className="text-3xl font-bold mb-1">
              <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
            </div>
            <div className="text-sm text-gray-400">{label}</div>
          </div>
        </div>

        {/* Mini progress bar */}
        <motion.div
          className={`mt-4 h-2 rounded-full bg-gradient-to-r from-${color}-500/30 to-transparent overflow-hidden`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          <motion.div
            className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400`}
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5, duration: 1 }}
          />
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

export function Metrics() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Measure What{' '}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Matters Most
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time dashboards showing the metrics that drive your business forward
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={Users}
            label="Leads Received (Monthly)"
            value={247}
            color="cyan"
            delay={0}
          />
          <MetricCard
            icon={Target}
            label="Follow-up Completion"
            value={94}
            suffix="%"
            color="green"
            delay={0.1}
          />
          <MetricCard
            icon={TrendingUp}
            label="Conversion Rate"
            value={38}
            suffix="%"
            color="purple"
            delay={0.2}
          />
          <MetricCard
            icon={DollarSign}
            label="Pipeline Value"
            value={8500}
            prefix="₹"
            suffix="K"
            color="yellow"
            delay={0.3}
          />
          <MetricCard
            icon={Activity}
            label="Active Opportunities"
            value={127}
            color="pink"
            delay={0.4}
          />
          <MetricCard
            icon={Award}
            label="Customer Satisfaction"
            value={96}
            suffix="%"
            color="blue"
            delay={0.5}
          />
        </div>

        {/* Sample Dashboard Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6">Sales Performance Dashboard</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart Placeholder 1 */}
              <div className="space-y-4">
                <div className="text-sm text-gray-400 mb-2">Lead Sources Performance</div>
                <div className="space-y-3">
                  {[
                    { source: 'WhatsApp', percentage: 45, color: 'green' },
                    { source: 'Instagram', percentage: 30, color: 'purple' },
                    { source: 'Direct Call', percentage: 15, color: 'blue' },
                    { source: 'Meta Ads', percentage: 10, color: 'cyan' }
                  ].map((item, i) => (
                    <div key={item.source}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.source}</span>
                        <span className={`text-${item.color}-400 font-semibold`}>
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Placeholder 2 */}
              <div className="space-y-4">
                <div className="text-sm text-gray-400 mb-2">Employee Performance</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Rajesh K.', deals: 23, color: 'cyan' },
                    { name: 'Priya S.', deals: 19, color: 'purple' },
                    { name: 'Amit P.', deals: 17, color: 'blue' },
                    { name: 'Sneha M.', deals: 15, color: 'pink' }
                  ].map((emp, i) => (
                    <motion.div
                      key={emp.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                    >
                      <div className="text-xs text-gray-400 mb-1">{emp.name}</div>
                      <div className={`text-2xl font-bold text-${emp.color}-400`}>
                        {emp.deals}
                      </div>
                      <div className="text-xs text-gray-500">deals closed</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              {[
                { label: 'Avg Response Time', value: '2.3 hrs', icon: '⚡' },
                { label: 'Deal Velocity', value: '12 days', icon: '🚀' },
                { label: 'Customer LTV', value: '₹45K', icon: '💰' },
                { label: 'Win Rate', value: '38%', icon: '🎯' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
            <span className="text-sm text-cyan-400">
              📊 All metrics update in real-time • 24/7 access • Mobile responsive
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
