'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useChat } from '../ChatContext';

export default function SocialMediaIcons() {
  const { isChatOpen } = useChat();

  return (
    <motion.div
      className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 bg-gradient-to-b from-[#2563EB]/60 via-[#A78BFA]/60 to-[#F472B6]/60 backdrop-blur-lg backdrop-saturate-150 rounded-xl p-3 z-40 sm:right-6 border border-white/30 shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isChatOpen ? 0 : 1, x: isChatOpen ? 50 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon icon={faFacebook} className="text-white text-lg hover:text-blue-500 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"  />
        </motion.div>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon icon={faInstagram} className="text-white text-lg hover:text-pink-500 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon icon={faTwitter} className="text-white text-lg hover:text-blue-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </a>
    </motion.div>
  );
}