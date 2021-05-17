import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../../styles/modules/Fab.module.sass";

export const Fab = ({
  icon,
  href = "",
  position,
  initial,
  transition,
  animate,
  layoutId,
}) => {
  return (
    <Link href={href}>
      <motion.a
        layoutId={layoutId}
        className={styles.fab}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {icon}
      </motion.a>
    </Link>
  );
};
