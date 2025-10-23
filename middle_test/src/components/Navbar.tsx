import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>BlogManager</h2>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Trang chủ
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? "active" : "")}>
          Viết bài
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
