import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  onAddPost: (post: Post) => void;
}

const PostCreate: React.FC<Props> = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handleSubmit = (post: Post) => {
    onAddPost(post);
    alert("Đăng bài thành công!");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>🖋 Tạo bài viết mới</h2>
      <PostForm onSubmit={handleSubmit} />
      <button onClick={() => navigate("/")}>Hủy</button>
    </div>
  );
};

export default PostCreate;
