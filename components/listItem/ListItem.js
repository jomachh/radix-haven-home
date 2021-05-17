import { motion } from "framer-motion";
import styles from "../../styles/components/ListItem.module.sass";

export const ListItem = ({ icon, label, initial, transition, animate }) => (
  <motion.div
    className={styles.item}
    initial={initial}
    animate={animate}
    transition={transition}
  >
    {icon}
    <label>{label}</label>
  </motion.div>
);
