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
};

const getPostsQuery = `*[_type == "post"]{
    title,
    slug,
    "author": author->name,
    "imageUrl": mainImage.asset->url,
    categories,
    publishedAt,
    body
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery, {
    revalidate: new Date().getHours(),
  });
}
