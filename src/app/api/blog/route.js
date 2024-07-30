import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    const posts = Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};
