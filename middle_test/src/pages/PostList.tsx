import React, { useState } from "react";
import { Post } from "../types/Post";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import "./PostList.css";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<Props> = ({ posts, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h2>Tổng số bài viết: {filteredPosts.length}</h2>
        <div className="post-list-controls">
          <input
            type="text"
            placeholder="Search theo tiêu đề..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/create">
            <button>+ Viết bài mới</button>
          </Link>
        </div>
      </div>

      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
