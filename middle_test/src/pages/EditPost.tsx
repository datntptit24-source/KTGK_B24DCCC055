import { useNavigate, useParams } from "react-router-dom";
import { samplePosts } from "../data/samplePosts";
import PostForm from "../components/PostForm";
import { Post } from "../type/post";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = samplePosts.find((p) => p.id === Number(id));

  const handleSubmit = (updated: Omit<Post, "id" | "date">) => {
    alert("Cập nhật thành công!");
    navigate(`/posts/${id}`);
  };

  if (!post) return <p className="text-center mt-10 text-red-500">Không tìm thấy bài viết!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa bài viết</h1>
      <PostForm onSubmit={handleSubmit} initialData={post} />
    </div>
  );
}
