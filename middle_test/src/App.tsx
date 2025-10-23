import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}
