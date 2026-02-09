import Image from "next/image";
import Link from "next/link";
import { getAllPost, getLastPost } from "@/lib/api";
import PostList from "../components/PostList"

export default async function Page() {
  const posts = await getAllPost();
  return (
    <>
  <div className="main-heading">
  <h2>Daftar Peta</h2>
  <p>This is the homepage of 
    the Peta Desa Powelua website.
    </p>
  </div>
  <PostList posts={posts}/>
  </>
  );
}