import { motion } from "framer-motion";

const dotTransition = {
  duration: 0.6,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function FetchingDots() {
  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-white/50"
          animate={{ y: [0, -4, 0] }}
          transition={{ ...dotTransition, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}
