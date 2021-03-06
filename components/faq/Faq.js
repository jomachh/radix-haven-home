import { useState } from "react";
import { motion } from "framer-motion";
import { MdSearch as Search } from "react-icons/md";
import styles from "../../styles/components/Faq.module.sass";

export const Faq = ({ question, answer, transition }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
    >
      <div>
        <Search size={35} color="#54ccf0" />
        <label>{question}</label>
      </div>
      <motion.label
        initial={{ opacity: 0, display: "none", y: 0 }}
        animate={{
          display: isHovered ? "block" : "none",
          opacity: isHovered ? 1 : 0,
        }}
      >
        {answer}
      </motion.label>
    </motion.div>
  );
};
