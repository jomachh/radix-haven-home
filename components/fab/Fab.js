import styles from "../../styles/modules/Fab.module.sass";

export const Fab = ({ icon, action, position }) => {
  return (
    <button className={styles.fab} onClick={action}>
      {icon}
    </button>
  );
};
