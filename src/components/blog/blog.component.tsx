import { PostType } from "@/sanity/queries/posts";
import Image from "next/image";
import React from "react";
import {
  BlogContainer,
  BlogContent,
  BlogTitle,
  BlogWrapper,
  ImageContainer,
  PostHeader,
  PostSubHeader,
  ReadMoreBtn,
  SmallDescription,
} from "./blog.styles";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const Blog = ({ postsData }: { postsData: PostType[] }) => {
  return (
    <BlogWrapper>
      <BlogContainer>
        {/* Blog Title */}
        <div id='title'>
          <BlogTitle className="text-[tan]">Our Blog</BlogTitle>
        </div>

        {/* Blog Content */}
        <BlogContent>
          {postsData.map((post, idx) => {
            const fullDate = new Date(post.publishedAt)
              .toDateString()
              .split(" ");
            const day = fullDate[0];
            const date = new Date(post.publishedAt).toLocaleDateString();
            const time = new Date(post.publishedAt).toLocaleTimeString();
            const { title, smallDescription, imageUrl, slug } = post;

            return (
              <Card key={idx} className='group'>
                {/* Post Image */}
                <ImageContainer>
                  <Image
                    src={imageUrl}
                    alt={title || ""}
                    width={500}
                    height={500}
                    className='w-full group-hover:scale-150 ease-in-out duration-1000 h-full object-cover'
                  />
                </ImageContainer>

                {/* Title */}
                <CardContent className='relative prose prose-a:no-underline'>
                  <PostHeader>
                    <h2 className='text-black text-lg'>{title}</h2>

                    {/* Subheader */}
                    <PostSubHeader>
                      <span>{post.author}</span>
                      <span className='text-[tan]'> | </span>
                      <span>
                        {day} {date} {time}
                      </span>
                    </PostSubHeader>
                  </PostHeader>

                  {/* Small Description */}
                  <SmallDescription>{smallDescription}</SmallDescription>

                  {/* Button */}
                  <ReadMoreBtn asChild>
                    <Link
                      href={`/blog/${slug?.current}` || ""}
                      className='py-5 text-decoration-none'
                    >
                      Read More
                    </Link>
                  </ReadMoreBtn>
                </CardContent>
              </Card>
            );
          })}
        </BlogContent>
      </BlogContainer>
    </BlogWrapper>
  );
};

export default Blog;
