import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>somelogo</div>
      <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
    </div>
  );
};
export default Footer;
