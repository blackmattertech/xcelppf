import { motion } from 'motion/react';
import { MessageCircle, Mail, Phone, Share2, Target } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const integrations = [
  {
    name: 'WhatsApp Business API',
    icon: MessageCircle,
    color: 'green',
    description: 'Auto-capture leads, send broadcasts, automated follow-ups',
    connection: ['CRM Core', 'Lead Management', 'Notifications']
  },
  {
    name: 'Mailjet',
    icon: Mail,
    color: 'blue',
    description: 'Email campaigns, transactional emails, newsletters',
    connection: ['Marketing Hub', 'Customer Communications']
  },
  {
    name: 'MCUBE Telephony',
    icon: Phone,
    color: 'purple',
    description: 'Call logging, recording, and analytics',
    connection: ['Sales Pipeline', 'Lead Tracking']
  },
  {
    name: 'Google Forms',
    icon: Share2,
    color: 'yellow',
    description: 'Automatic lead capture from form submissions',
    connection: ['Lead Management', 'Data Entry']
  },
  {
    name: 'Meta Ads',
    icon: Target,
    color: 'cyan',
    description: 'Ad performance tracking, lead quality analysis',
    connection: ['Marketing Analytics', 'ROI Tracking']
  }
];

export function Integrations() {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Seamless{' '}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Third-Party Integrations
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with tools you already use, automate data flow
          </p>
        </motion.div>

        {/* Integration Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIntegration(integration.name)}
              onHoverEnd={() => setHoveredIntegration(null)}
            >
              <GlassCard className="p-6 h-full">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${integration.color}-500/20 to-${integration.color}-500/5 flex items-center justify-center mb-4 border border-${integration.color}-500/30`}
                  animate={{
                    scale: hoveredIntegration === integration.name ? 1.1 : 1,
                    rotate: hoveredIntegration === integration.name ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <integration.icon className={`w-8 h-8 text-${integration.color}-400`} />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{integration.description}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIntegration === integration.name ? 'auto' : 0,
                    opacity: hoveredIntegration === integration.name ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-cyan-400 font-semibold mb-2">Connects with:</div>
                    <div className="flex flex-wrap gap-2">
                      {integration.connection.map((conn) => (
                        <span
                          key={conn}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
                        >
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Connection Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Integration Flow</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {/* External Tools */}
              <div className="flex flex-col gap-3">
                {['WhatsApp', 'Email', 'Calls', 'Ads', 'Forms'].map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex flex-col gap-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-cyan-400 text-2xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  >
                    →
                  </motion.div>
                ))}
              </div>

              {/* CRM Core */}
              <motion.div
                className="px-8 py-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 relative"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.6)',
                    '0 0 20px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl font-bold text-center mb-2">CRM Core</div>
                <div className="text-sm text-gray-400 text-center">Unified Platform</div>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Arrows */}
              <div className="flex flex-col gap-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-cyan-400 text-2xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  >
                    →
                  </motion.div>
                ))}
              </div>

              {/* Outputs */}
              <div className="flex flex-col gap-3">
                {['Reports', 'Dashboards', 'Alerts', 'Insights', 'Actions'].map((output, i) => (
                  <motion.div
                    key={output}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 text-sm"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {output}
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-cyan-400">{integrations.length}</div>
              <div className="text-sm text-gray-400">Integrations</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-400">Automated</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-purple-400">0</div>
              <div className="text-sm text-gray-400">Manual Entry</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
