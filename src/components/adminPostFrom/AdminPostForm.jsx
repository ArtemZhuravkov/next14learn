"use client";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";

const AdminPostFrom = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container} autoComplete="off" key={state?.resetKey}>
      <h1>Add new post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostFrom;
