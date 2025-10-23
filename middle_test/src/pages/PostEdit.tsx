import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onUpdate: (post: Post) => void;
}

const PostEdit: React.FC<Props> = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h2>Không tìm thấy bài viết để chỉnh sửa!</h2>;

  const handleSubmit = (updated: Post) => {
    onUpdate(updated);
    alert("Cập nhật thành công!");
    navigate(`/posts/${updated.id}`);
  };

  return (
    <div className="container">
      <h2>✏ Chỉnh sửa bài viết</h2>
      <PostForm initialData={post} onSubmit={handleSubmit} />
      <button onClick={() => navigate(`/posts/${post.id}`)}>Hủy</button>
    </div>
  );
};

export default PostEdit;
