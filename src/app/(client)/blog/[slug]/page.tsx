import PostDetails from "@/components/post-details/post-details.component";
import { getPostDetail } from "@/sanity/queries/posts";

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getPostDetail(slug);
  const { title, author, imageUrl, categories, publishedAt, body } = data;
  console.log("DATA: ", data);

  return (
    <PostDetails
      title={title}
      author={author}
      imageUrl={imageUrl}
      categories={categories}
      publishedAt={publishedAt}
      body={body}
    />
  );
};

export default PostDetailPage;
