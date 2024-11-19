import React from "react";
import {
  PostDetailsContainer,
  PostDetailsWrapper,
} from "./post-details.styles";

type PostDetailsProps = {
  title: string;
  author?: string;
  imageUrl: string;
  categories: string[];
  publishedAt: string;
  body: string;
};

const PostDetails = ({ title, author, imageUrl, categories, publishedAt, body }: PostDetailsProps) => {
  return (
    <PostDetailsWrapper>
      <PostDetailsContainer>
        
      </PostDetailsContainer>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
