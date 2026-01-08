import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const techStack = [
  {
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    color: 'cyan',
    why: 'Lightning-fast UI with component reusability',
    benefits: ['High performance', 'Scalable architecture', 'Rich ecosystem']
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: '🟢',
    color: 'green',
    why: 'Fast, scalable server-side processing',
    benefits: ['Real-time capabilities', 'High concurrency', 'JavaScript everywhere']
  },
  {
    name: 'Supabase',
    category: 'Database',
    icon: '🗄️',
    color: 'emerald',
    why: 'PostgreSQL with real-time features',
    benefits: ['Automatic APIs', 'Built-in auth', 'Row-level security']
  },
  {
    name: 'Figma',
    category: 'Design',
    icon: '🎨',
    color: 'purple',
    why: 'Professional UI/UX design system',
    benefits: ['Pixel-perfect designs', 'Component library', 'Collaborative']
  },
  {
    name: 'Vercel',
    category: 'Hosting',
    icon: '▲',
    color: 'white',
    why: 'Edge network for global performance',
    benefits: ['99.99% uptime', 'Auto-scaling', 'CDN included']
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: '📘',
    color: 'blue',
    why: 'Type-safe code with fewer bugs',
    benefits: ['Better IDE support', 'Fewer runtime errors', 'Self-documenting']
  }
];

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built on{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise-Grade Technology
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern, secure, and scalable tech stack ensuring reliability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="text-4xl"
                    animate={{
                      scale: hoveredTech === tech.name ? 1.2 : 1,
                      rotate: hoveredTech === tech.name ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className={`text-xs text-${tech.color}-400 font-semibold mb-1`}>
                      {tech.category}
                    </div>
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{tech.why}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredTech === tech.name ? 'auto' : 0,
                    opacity: hoveredTech === tech.name ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-cyan-400 font-semibold mb-2">Key Benefits:</div>
                    <ul className="space-y-1">
                      {tech.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${tech.color}-400`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Progress bar on hover */}
                <motion.div
                  className={`mt-4 h-1 rounded-full bg-gradient-to-r from-${tech.color}-500 to-transparent`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredTech === tech.name ? '100%' : '30%' }}
                  transition={{ duration: 0.5 }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 inline-block">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl">🔒</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Bank-level encryption, automatic backups, and 99.99% uptime guarantee
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
