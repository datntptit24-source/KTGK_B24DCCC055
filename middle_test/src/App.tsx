import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostCreate from "./pages/CreatePost";
import PostEdit from "./pages/PostEdit";
import { Post } from "./types/Post";

const App: React.FC = () => {
  // --- 1. Load từ localStorage nếu có ---
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem("posts");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return []; // nếu lỗi format
      }
    }
    // --- Dữ liệu mẫu mặc định ---
    return [
      {
        id: 1,
        title: "Công nghệ AI và tương lai",
        author: "Nguyễn Minh",
        thumbnail: "https://picsum.photos/300/200?1",
        content: "AI đang thay đổi thế giới với tốc độ nhanh chóng...",
        category: "Công nghệ",
        date: "2025-10-20",
      },
      {
        id: 2,
        title: "Khám phá ẩm thực Hà Nội",
        author: "Lê Hương",
        thumbnail: "https://picsum.photos/300/200?2",
        content: "Ẩm thực Hà Nội mang đậm bản sắc Việt Nam...",
        category: "Ẩm thực",
        date: "2025-10-18",
      },
      {
        id: 3,
        title: "Chuyến du lịch Đà Lạt",
        author: "Trần Anh",
        thumbnail: "https://picsum.photos/300/200?3",
        content: "Đà Lạt là điểm đến lý tưởng cho những ai yêu thiên nhiên...",
        category: "Du lịch",
        date: "2025-10-15",
      },
      {
        id: 4,
        title: "Lối sống xanh trong đô thị",
        author: "Hoàng Thu",
        thumbnail: "https://picsum.photos/300/200?4",
        content: "Lối sống xanh đang trở thành xu hướng tích cực...",
        category: "Đời sống",
        date: "2025-10-10",
      },
      {
        id: 5,
        title: "Công nghệ blockchain",
        author: "Lâm Huy",
        thumbnail: "https://picsum.photos/300/200?5",
        content: "Blockchain mở ra kỷ nguyên mới cho tài chính và dữ liệu...",
        category: "Công nghệ",
        date: "2025-10-05",
      },
    ];
  });

  // --- 2. Tự động lưu mỗi khi posts thay đổi ---
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // --- 3. Các hàm CRUD ---
  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleUpdate = (updatedPost: Post) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  // --- 4. Định tuyến ---
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
        <Route path="/create" element={<PostCreate onAddPost={handleAddPost} />} />
        <Route path="/posts/edit/:id" element={<PostEdit posts={posts} onUpdate={handleUpdate} />} />
      </Routes>
    </Router>
  );
};

export default App;
