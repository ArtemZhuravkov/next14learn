import AdminPostFrom from "@/components/adminPostFrom/AdminPostForm";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
import styles from "./admin.module.css";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostFrom userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
