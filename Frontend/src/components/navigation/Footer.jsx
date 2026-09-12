import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        {/* Website name */}
        <div className="site-footer-brand">
          EngiLearn
        </div>

        {/* Footer navigation links */}
        <nav className="site-footer-links">
          <Link to="/about">About</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/features">Features</Link>
          <Link to="/learning-paths">Learning Paths</Link>
        </nav>

        {/* Copyright */}
        <p className="site-footer-copy">
          © {currentYear} EngiLearn. Built for learning, not yet in production.
        </p>

      </div>
    </footer>
  );
}