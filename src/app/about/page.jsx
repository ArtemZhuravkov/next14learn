import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Lorem, ipsum.</h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          incidunt voluptatibus aut cupiditate nam tempore rerum hic soluta est
          blanditiis?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+ K</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={styles.box}>
            <h1>10+ K</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={styles.box}>
            <h1>10+ K</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/1620.jpeg" alt="neon-city" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
