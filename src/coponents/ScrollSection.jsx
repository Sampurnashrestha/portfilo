import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.95,
        filter: "blur(6px)",
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1], // smooth cinematic easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
