import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Post } from "../type/post";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<Props> = ({ posts, onDelete }) => {
  const [filter, setFilter] = useState("");

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h2>Tổng số bài: {filteredPosts.length}</h2>
        <div>
          <input
            className="search-box"
            placeholder="Tìm kiếm bài viết..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Link to="/create">
            <button className="create-btn">+ Viết bài mới</button>
          </Link>
        </div>
      </div>

      <div className="post-grid">
        {filteredPosts.map((p) => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
