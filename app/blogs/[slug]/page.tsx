import { getListBlog, getOneBlog } from "@/utils/fetch-blogs";
import React, { Suspense } from "react";
import Loading from "./loading";
import { formatDate } from "@/utils/helper";
import ImageFallback from "@/components/image-fallback";
import { Metadata } from "next";
import { Blog } from "@/interfaces/blog";

interface BlogProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const data = await getListBlog();
  return data.map((blog: Blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: BlogProps): Promise<Metadata> {
  const blogData = await getOneBlog(slug);
  if (!blogData) {
    return {
      title: "Bài viết không tồn tại",
      description: "Bài viết không tồn tại",
    };
  }
  return {
    title: blogData.title,
    description: blogData.description,
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      images: [`/api/og?title=${blogData.title}&image=${blogData.imageUrl}`, blogData.imageUrl],
    },
  };
}

const BlogDetailPage = async ({ params: { slug } }: BlogProps) => {
  const blogData = await getOneBlog(slug);
  if (!blogData) {
    return <div>Blog not found</div>;
  }

  const content = (
    <span
      className="mx-auto block max-w-7xl [&>*]:leading-7 [&>p>img]:mx-auto [&>p>img]:my-4 [&>p>img]:aspect-video [&>p>img]:max-w-4xl [&>p>img]:rounded-md [&>p>img]:border-2 [&>p>img]:border-gray-300 [&>p>img]:object-cover [&>p>img]:drop-shadow-lg [&>p]:text-lg [&>p]:font-normal dark:[&>p]:text-neutral-100"
      dangerouslySetInnerHTML={{ __html: blogData?.content }}
    />
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className="z-[5] h-full w-full">
        <div className="space-y-2 p-4 md:p-8">
          <p className="text-center">Ngày cập nhật: {formatDate(blogData.createdAt)}</p>
          <div className="space-y-6 pt-6 max-w-screen-lg mx-auto">
            <h1 className="text-center text-3xl font-black">{blogData.title}</h1>
            <p className="text-center">Tác giả: {blogData.normalizedName || "Unknown"}</p>
            <ImageFallback
              fallbackSrc="/speaker-ui/og-image.jpg"
              src={blogData.imageUrl}
              alt={blogData.title}
              width={1200}
              height={600}
              className="rounded-lg max-w-full aspect-video md:aspect-[5/2] object-cover shadow-lg border"
            />
            {content}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BlogDetailPage;
