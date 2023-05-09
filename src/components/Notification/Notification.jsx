import styles from "./Notification.module.scss";
export const Notification = (props) => {
  return <div className={styles[props.notificationType]}>Check it out</div>;
};
// в props прокидываем ключ массива который в дальнейшем можно переесипользовать в main присвоив ему какое-либо значение (мами значения и ключи устанавливаются в Main 36:12)
