import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, y: 0 },
};

const EaseIn = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01] }}
    >
      {children}
    </motion.div>
  );
};

export default EaseIn;