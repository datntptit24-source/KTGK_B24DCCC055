import { useState } from "react";
import { Post } from "../type/post";

interface Props {
  onSubmit: (post: Omit<Post, "id" | "date">) => void;
  initialData?: Post;
}

export default function PostForm({ onSubmit, initialData }: Props) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    author: initialData?.author || "",
    thumbnail: initialData?.thumbnail || "",
    content: initialData?.content || "",
    category: initialData?.category || "Khác",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.length < 1)
      return alert("Tiêu đề phải có ít nhất 1 ký tự");
    if (formData.author.length < 3)
      return alert("Tên tác giả phải có ít nhất 3 ký tự");
    if (formData.content.length < 5)
      return alert("Nội dung phải có ít nhất 5 ký tự");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        name="title"
        placeholder="Tiêu đề"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="author"
        placeholder="Tác giả"
        value={formData.author}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="thumbnail"
        placeholder="URL ảnh thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="content"
        placeholder="Nội dung bài viết..."
        rows={10}
        value={formData.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {initialData ? "Cập nhật" : "Đăng bài"}
        </button>
      </div>
    </form>
  );
}
