import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  // Store whether the sidebar is collapsed
  const [collapsed, setCollapsed] = useState(false);

  // Toggle the sidebar between collapsed and expanded
  function toggleSidebar() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="app-shell">

      {/* Navbar */}
      <Navbar
        showSidebarToggle
        onToggleSidebar={toggleSidebar}
      />

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main content */}
      <div
        className="app-main"
        style={{
          marginLeft: collapsed
            ? "var(--sidebar-width-collapsed)"
            : undefined,
        }}
      >
        <Outlet />
      </div>

    </div>
  );
}