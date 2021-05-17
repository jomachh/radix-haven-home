import styles from "../../styles/modules/TabItem.module.sass";

export const TabItem = ({ selected, icon, label, onClick }) => {
  return (
    <div
      className={`${styles.container} ${selected && styles.selected}`}
      onClick={onClick}
    >
      {icon}
      <label>{label}</label>
    </div>
  );
};
