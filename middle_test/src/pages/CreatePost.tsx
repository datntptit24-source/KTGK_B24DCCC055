import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../type/post";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = (post: Omit<Post, "id" | "date">) => {
    alert("Đăng bài thành công!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo bài viết mới</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
