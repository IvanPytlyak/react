import styles from "./Notification.module.scss";
export const Notification = (props) => {
  return <div className={styles[props.notificationType]}>Check it out</div>;
};
