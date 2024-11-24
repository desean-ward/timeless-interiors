import Blog from "@/components/blog/blog.component";
import { getPosts } from "@/sanity/queries/posts";

const BlogPage = async () => {
  const postsData = await getPosts()

  return <Blog postsData={postsData} />;
};

export default BlogPage;
