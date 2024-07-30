import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="neon-city" fill className={styles.img} />
          </div>
        )}

        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          {" "}
          Read more
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
