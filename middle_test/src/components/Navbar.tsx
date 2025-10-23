import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg rounded-b-2xl">
      <h1 className="text-2xl font-bold tracking-wide">📝 Blog Manager</h1>
      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline font-semibold" : "")}
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          className="bg-white text-purple-700 px-3 py-1 rounded-lg hover:bg-purple-100 transition"
        >
          Viết bài
        </NavLink>
      </div>
    </nav>
  );
}
