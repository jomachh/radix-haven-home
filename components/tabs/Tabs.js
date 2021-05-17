import styles from "../../styles/modules/Tabs.module.sass";

export const Tabs = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
