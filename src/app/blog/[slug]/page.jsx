import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./singlePost.module.css";

// FETCH example
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};


const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="neon-city" fill className={styles.img} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.details}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Date</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
