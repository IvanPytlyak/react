import styles from "./Footer.module.scss";
export const Footer = () => {
  console.log(styles);
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
};
