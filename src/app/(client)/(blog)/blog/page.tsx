import Blog from "@/components/blog/blog.component";
import TransitionEffect from "@/components/transition-effect/transition-effect.component";
import { getPosts } from "@/sanity/queries/posts";

const BlogPage = async () => {
  const postsData = await getPosts();

  return (
    <>
      <TransitionEffect />

      <Blog postsData={postsData} />
    </>
  );
};

export default BlogPage;
