import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostDetail: React.FC<Props> = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h2>Không tìm thấy bài viết!</h2>;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
      navigate("/");
    }
  };

  return (
    <div className="container detail">
      <img src={post.thumbnail} alt={post.title} className="detail-img" />
      <h1>{post.title}</h1>
      <p>
        <b>Tác giả:</b> {post.author} | <i>{post.date}</i> |{" "}
        <b>Thể loại:</b> {post.category}
      </p>
      <p className="content">{post.content}</p>

      <div className="btn-group">
        <button onClick={() => navigate(-1)}>⬅ Quay lại</button>
        <Link to={`/posts/edit/${post.id}`} className="btn-edit">✏ Chỉnh sửa</Link>
        <button onClick={handleDelete} className="btn-delete">🗑 Xóa bài viết</button>
      </div>
    </div>
  );
};

export default PostDetail;
