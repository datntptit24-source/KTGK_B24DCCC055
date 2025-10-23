import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../type/post";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <div className="post-card-content">
        <h3>{post.title}</h3>
        <p>
          <strong>{post.author}</strong> • {post.date}
        </p>
        <p>{post.content.slice(0, 100)}...</p>
        <div className="post-card-footer">
          <Link to={`/posts/${post.id}`}><button>Đọc thêm</button></Link>
          <button onClick={() => onDelete(post.id)} className="delete-btn">Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
