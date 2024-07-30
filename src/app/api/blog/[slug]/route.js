import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};
