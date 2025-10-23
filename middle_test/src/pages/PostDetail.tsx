import { useParams, Link, useNavigate } from "react-router-dom";
import { samplePosts } from "../data/samplePosts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = samplePosts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center mt-10 text-red-500">Bài viết không tồn tại!</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <img src={post.thumbnail} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">Tác giả: {post.author} • {post.date}</p>
      <p className="mb-6 whitespace-pre-wrap">{post.content}</p>
      <div className="flex justify-between">
        <button onClick={() => navigate(-1)} className="bg-gray-300 px-4 py-2 rounded-md">
          Quay lại
        </button>
        <div className="flex gap-2">
          <Link to={`/posts/edit/${post.id}`} className="bg-yellow-400 px-4 py-2 rounded-md">Chỉnh sửa</Link>
          <button onClick={() => { if (window.confirm("Bạn có chắc muốn xóa?")) navigate("/"); }} className="bg-red-500 text-white px-4 py-2 rounded-md">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
