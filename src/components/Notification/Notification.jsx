import styles from "./Notification.module.scss";
export const Notification = (props) => {
  const setType = (event) => {
    props.setUserAge(event.target.value);
  };
  return <div className={styles[props.notificationType]}>Check it out</div>;
};
