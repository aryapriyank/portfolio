import { motion } from "framer-motion";

export function Slide({ children, duration = 0.6, direction = "right" }) {
  const variants = {
    hidden: { ...(direction === "left" && { x: -100 }),
              ...(direction === "right" && { x: 100 }),
              ...(direction === "up" && { y: -100 }),
              ...(direction === "down" && { y: 100 }) },
    visible: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
