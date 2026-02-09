import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "./components/PostList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
  <div className="main-heading">
  <h1>Welcome to Peta Desa Powelua</h1>
  <p>This is the homepage of 
    the Peta Desa Powelua website.
    </p>
  </div>
  <PostList posts={posts}/>
  </>
  );
}