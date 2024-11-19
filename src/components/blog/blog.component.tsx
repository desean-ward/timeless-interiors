import { getPosts, PostType } from "@/sanity/queries/posts";
import Image from "next/image";
import React from "react";
import {
  BlogContainer,
  BlogContent,
  BlogPost,
  BlogWrapper,
  ImageContainer,
  PostHeader,
  PostSubHeader,
} from "./blog.styles";

const Blog = async () => {
  const postData: PostType[] = await getPosts();

  return (
    <BlogWrapper>
      <BlogContainer>
        {/* Blog Title */}
        <div id='title'>
          <h1 className='text-white text-6xl font-bebas'>Our Blog</h1>
        </div>

        {/* Blog Content */}
        <BlogContent>
          {postData.map((post, idx) => {
            return (
              <BlogPost key={idx} href={`/blog/${post.slug?.current}` || ""}>
                {/* Header */}
                <PostHeader>
                  <h2 className='text-white text-lg'>{post.title}</h2>

                  {/* Subheader */}
                  <PostSubHeader>
                    <span>{post.author}</span>
                    <span>{post.publishedAt}</span>
                  </PostSubHeader>
                </PostHeader>

                {/* Post Image */}
                <ImageContainer>
                  <Image
                    src={post.imageUrl}
                    alt={post.title || ""}
                    width={300}
                    height={450}
                    className='absolute w-full group-hover:scale-110 duration-300 h-full object-cover'
                  />
                </ImageContainer>
              </BlogPost>
            );
          })}
        </BlogContent>
      </BlogContainer>
    </BlogWrapper>
  );
};

export default Blog;
