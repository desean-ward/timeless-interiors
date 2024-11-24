/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PostDetails from "@/components/post-details/post-details.component";
import Loader from "@/components/ui/loader";
import { getPostDetails } from "@/sanity/queries/posts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PostDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData: () => Promise<void> = async () => {
      if (typeof slug === "string") {
        const data = await getPostDetails(slug);
        setData(data);
      } else {
        console.error("Slug is not a string");
      }
    };

    fetchData();
  }, [slug]);

  if (!data)
    return (
      <div className='absolute size-ful inset-0 flex items-center justify-center text-3xl bg-[#0A0A0A]/80 backdrop-blur-lg z-50'>
        <Loader
          color="rgba(210, 180, 140, 1)"
          size={50}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );

  const { title, author, imageUrl, categories, publishedAt, content } = data;

  return (
    <PostDetails
      slug={slug ?? ""}
      title={title}
      author={author}
      imageUrl={imageUrl}
      categories={categories}
      publishedAt={publishedAt}
      content={content}
    />
  );
};

export default PostDetailPage;
