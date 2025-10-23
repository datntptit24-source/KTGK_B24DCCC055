import React from "react";
import { Post } from "../types/Post";
import { Link } from "react-router-dom";
import "./PostCard.css";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  return (
    <div className="card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><i>{post.date}</i></p>
      <p>{post.content.slice(0, 100)}...</p>
      <div className="actions">
        <Link to={`/posts/${post.id}`}>Đọc thêm</Link>
        <button onClick={() => onDelete(post.id)}>Xóa</button>
      </div>
    </div>
  );
};

export default PostCard;
