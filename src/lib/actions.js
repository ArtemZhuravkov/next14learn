"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("Saved to db.");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return {
      resetKey: newPost.id,
    };
  } catch (error) {
    console.log(error);
    return { error: "Somth went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from db.");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somth went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("Saved to db.");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somth went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Deleted from db.");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somth went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(
    formData
  );
  if (password !== passwordRepeat) {
    return { error: "Password doesn't match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "user alredy exists!" };
    }
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Wrong username or password!" };
    }
    throw error;
  }
};
