"use client";
import { Input } from "@/components/ui/input";
import { getListBlog } from "@/utils/fetch-blogs";
import React, { useEffect, useState } from "react";
import BlogItem from "./blog-item";
import { Blog } from "@/interfaces/blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogFiltered, setBlogFiltered] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getListBlog();
      setBlogs(data);
      setBlogFiltered(data);
    };
    fetchBlogs();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchValue.toLowerCase()));
    // delay 1s
    setTimeout(() => {
      setBlogFiltered(filteredBlogs);
    }, 500);
  };

  return (
    <div className="mt-12 w-full flex flex-col gap-10 items-center">
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
          type="text"
          placeholder="Tìm kiếm..."
          onChange={handleSearch}
          className="w-full text-lg h-14 px-4 border-none bg-neutral-950/5 dark:bg-neutral-50/5 rounded-3xl"
        />
      </div>
      <ul className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogFiltered.map((blog, index: number) => (
          <BlogItem
            className={(index > 4 && index % 5 == 0) || index == 0 ? "lg:col-span-2" : ""}
            key={blog.id}
            blog={blog}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
