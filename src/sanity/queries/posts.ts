/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from "next-sanity";
import { client } from "../lib/client";

// Create a type for the posts
export type PostType = {
  title?: string;
  slug?: {
    current: string;
  };
  imageUrl: string;
  publishedAt: string;
  author: string;
  smallDescription: string;
};

const getPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    smallDescription,
    "author": author->name,
    "imageUrl": mainImage.asset->url,
    categories,
    publishedAt,
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery, {
    revalidate: new Date().getSeconds(),
  });
}

const getPostDetailQuery = groq`*[_type == "post"][slug.current == $slug][0]{
    title,
    "author": author->name,
    "imageUrl": mainImage.asset->url,
    'categories': categories[] -> title,
    publishedAt,
    content,
    smallDescription,
}`;

export async function getPostDetails(slug: string) {
  return await client.fetch(getPostDetailQuery, {
    slug,
    revalidate: new Date().getSeconds(),
  });
}
