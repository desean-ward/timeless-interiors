"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import {
  AuthorAndDateContainer,
  PostCategory,
  PostCategoryContainer,
  PostCategoryWrapper,
  PostContent,
  PostDetailsContainer,
  PostDetailsWrapper,
  PostTitle,
} from "./post-details.styles";
import { default as imageUrlBuilder } from "@sanity/image-url";
import Image from "next/image";
import { PortableText } from "next-sanity";

// Generates an image URL using the builder object
const builder = imageUrlBuilder(client);

/* Helper function to generate image URLs with only the asset reference */
function urlFor(source: any) {
  return builder.image(source);
}

type PostDetailsProps = {
  slug: string;
  title: string;
  author?: string;
  imageUrl: string;
  categories: string[];
  publishedAt: string;
  content: any;
};

const PostDetails = ({
  slug,
  title,
  author,
  imageUrl,
  categories,
  publishedAt,
  content,
}: PostDetailsProps) => {
  console.log("content: ", typeof content);
  const fullDate = new Date(publishedAt).toDateString().split(" ");
  const day = fullDate[0];
  const date = new Date(publishedAt).toLocaleDateString();
  const time = new Date(publishedAt).toLocaleTimeString();

  return (
    <PostDetailsWrapper>
      <PostDetailsContainer>
        <PostCategoryWrapper>
          {/* Post Categories */}
          <PostCategoryContainer>
            {categories?.map((category: string, index: number) => {
              return (
                <PostCategory
                  key={index}
                >
                  {category}
                </PostCategory>
              );
            })}
          </PostCategoryContainer>
        </PostCategoryWrapper>

        {/* Post Title */}
        <div className='my-6 w-full text-balance'>
          <PostTitle>
            {title}
          </PostTitle>

          {/* Post Author */}
          <AuthorAndDateContainer>
            <span>{author}</span>
            <span className='text-[tan]'> | </span>
            <span>
              {day} {date} {time}
            </span>
          </AuthorAndDateContainer>
        </div>

        {/* Post Image */}
        <div>
          <Image
            src={urlFor(imageUrl).url()}
            alt={slug || "Post Image"}
            width={320}
            height={500}
            className='rounded-lg my-8 aspect-video object-cover lg:w-2/4 mx-auto border border-white/60'
          />
        </div>

        {/* Post Content */}
        <PostContent>
          <PortableText value={content} />
        </PostContent>{" "}
      </PostDetailsContainer>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
