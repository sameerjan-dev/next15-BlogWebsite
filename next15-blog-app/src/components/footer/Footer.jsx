import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SJ's TechnoHub</div>
      <div className={styles.text}>SJ's TechnoHub © All rights reserved.</div>
    </div>
  );
};

export default Footer;
