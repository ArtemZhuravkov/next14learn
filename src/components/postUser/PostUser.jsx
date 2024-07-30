import { getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./postUser.module.css";

const PostUser = async ({ userId }) => {
  const userData = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={userData.img ? userData.img : "/noavatar.png"}
        alt="neon-city"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{userData.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
