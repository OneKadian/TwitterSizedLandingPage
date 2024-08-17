"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBTTContainer = ({ children, transition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default MotionBTTContainer;
