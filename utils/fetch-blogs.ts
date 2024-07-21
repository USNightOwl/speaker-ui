import { Blog } from "@/interfaces/blog";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
const type = process.env.NEXT_PUBLIC_SERVER_URL ? "server" : "local";

export async function getListBlog() {
  const res = await fetch(`${baseUrl}/Blog/getList?type=${type}`);
  return res.json() as Promise<Blog[]>;
}
