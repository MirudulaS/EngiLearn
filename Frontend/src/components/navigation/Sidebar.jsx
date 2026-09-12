import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Boxes,
  Code2,
  TrendingUp,
  Award,
  User,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

// All sidebar menu items
const links = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    to: "/my-learning",
    label: "My Learning",
    icon: GraduationCap,
  },
  {
    to: "/departments",
    label: "Departments",
    icon: Boxes,
  },
  {
    to: "/compiler",
    label: "Compiler",
    icon: Code2,
  },
  {
    to: "/progress",
    label: "Progress",
    icon: TrendingUp,
  },
  {
    to: "/achievements",
    label: "Achievements",
    icon: Award,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: User,
  },
  {
    to: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({ collapsed = false }) {
  return (
    <aside
      className={`sidebar ${collapsed ? "is-collapsed" : ""}`}
    >
      <ul className="sidebar-links">

        {links.map((link) => {
          const to = link.to;
          const label = link.label;
          const Icon = link.icon;

          return (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => {
                  if (isActive) {
                    return "sidebar-link is-active";
                  }

                  return "sidebar-link";
                }}
                title={collapsed ? label : undefined}
              >
                <Icon size={19} />

                {!collapsed && (
                  <span>{label}</span>
                )}
              </NavLink>
            </li>
          );
        })}

      </ul>
    </aside>
  );
}