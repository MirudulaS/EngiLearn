import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Menu,
  CircuitBoard,
} from "lucide-react";
import "./Navbar.css";

export default function Navbar({
  onToggleSidebar,
  showSidebarToggle = false,
}) {
  const navigate = useNavigate();

  function handleSearch(event) {
    if (event.key !== "Enter") {
      return;
    }

    const searchText = event.currentTarget.value.trim();

    if (searchText === "") {
      return;
    }

    const encodedText = encodeURIComponent(searchText);

    navigate(`/search?q=${encodedText}`);
  }

  return (
    <header className="navbar">

      {/* Left side of navbar */}
      <div className="navbar-left">

        {/* Sidebar toggle button */}
        {showSidebarToggle && (
          <button
            className="navbar-icon-btn"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu size={20} />
          </button>
        )}

        {/* EngiLearn logo and home link */}
        <Link to="/" className="navbar-brand">
          <CircuitBoard
            size={20}
            color="var(--color-accent)"
          />

          <span>EngiLearn</span>
        </Link>
      </div>

      {/* Search box */}
      <div className="navbar-search">
        <Search
          size={16}
          color="var(--color-text-faint)"
        />

        <input
          type="search"
          placeholder="Search courses, problems, topics…"
          aria-label="Search"
          onKeyDown={handleSearch}
        />
      </div>

      {/* Right side of navbar */}
      <nav className="navbar-right">

        {/* Notifications */}
        <button
          className="navbar-icon-btn"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="navbar-notif-dot" />
        </button>

        {/* Login */}
        <Link
          to="/login"
          className="btn btn-secondary btn-sm"
        >
          Log in
        </Link>

        {/* Register */}
        <Link
          to="/register"
          className="btn btn-primary btn-sm"
        >
          Sign up
        </Link>

      </nav>
    </header>
  );
}