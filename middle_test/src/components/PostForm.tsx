import React, { useState, useEffect } from "react";
import { Post } from "../types/Post";
import "./PostForm.css";

interface Props {
  initialData?: Post;
  onSubmit: (data: Post) => void;
}

const PostForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [category, setCategory] = useState(initialData?.category || "Khác");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 10 || author.length < 3 || content.length < 5  ) {
      alert("Vui lòng kiểm tra lại thông tin!");
      return;
    }
    const post: Post = {
      id: initialData?.id || Date.now(),
      title,
      author,
      thumbnail,
      content,
      category,
      date: initialData?.date || new Date().toISOString().split("T")[0],
    };
    onSubmit(post);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tiêu đề" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Tác giả" />
      <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="URL ảnh thumbnail" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung bài viết..."
      />
      <button type="submit">{initialData ? "Cập nhật" : "Đăng bài"}</button>
    </form>
  );
};

export default PostForm;
