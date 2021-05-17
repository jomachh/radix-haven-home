import { motion } from "framer-motion";
import Image from "next/image";
import { ListItem } from "../";
import { MdCheckCircle as Check } from "react-icons/md";
import styles from "../../styles/components/Section.module.sass";

export const Section = ({
  name,
  subtitle,
  description,
  imagePath,
  benefits = [],
}) => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    <Image
      className={styles.img}
      src={imagePath}
      alt={name}
      width={535}
      height={337}
    />
    <h3>{subtitle}</h3>
    <div className={styles.content}>
      <label>{description}</label>
      <div>
        {benefits.map((benefit, index) => {
          const step = index + 3;
          return (
            <ListItem
              key={index}
              icon={<Check size={25} color="#54ccf0" />}
              label={benefit}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: step * 0.1 }}
            />
          );
        })}
      </div>
    </div>
  </motion.div>
);
