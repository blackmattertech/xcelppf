import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative bg-white/5 backdrop-blur-md 
        border border-white/10 rounded-2xl
        ${hover ? 'hover:bg-white/10 hover:border-cyan-500/50' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { 
        y: -4,
        boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
      } : {}}
      style={{
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
