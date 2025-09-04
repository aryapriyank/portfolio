import { motion } from "framer-motion";

export function Fade({ children, duration = 0.6, direction }) {
  const variants = {
    hidden: { opacity: 0, ...(direction === "left" && { x: -50 }),
                        ...(direction === "right" && { x: 50 }),
                        ...(direction === "up" && { y: -50 }),
                        ...(direction === "down" && { y: 50 }) },
    visible: { opacity: 1, x: 0, y: 0 }
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
