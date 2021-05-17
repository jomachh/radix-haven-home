import styles from "../../styles/components/Tabs.module.sass";

export const Tabs = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
