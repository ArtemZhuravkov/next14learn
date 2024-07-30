import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "Contacts page",
};
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/1620.jpeg" alt="neon-city" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone number (Optional)" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
