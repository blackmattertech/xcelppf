import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="flex gap-3 max-w-md mx-auto">
          <motion.button
            onClick={handleCall}
            className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            Call
          </motion.button>

          <motion.button
            onClick={handleWhatsApp}
            className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
