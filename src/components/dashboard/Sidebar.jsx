import { Link } from "react-router-dom";
import {
  UserPen,
  Calendar,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

function Route({ name, icon: Icon, isActive, path, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
        ${
          isActive
            ? "bg-indigo-100 text-indigo-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      <Icon className="h-5 w-5" />
      <span>{name}</span>
    </Link>
  );
}

export default function Sidebar({ currentPath, onNavigate }) {
  const activePath =
    !currentPath || currentPath === "dashboard" ? "events" : currentPath;

  const routes = [
    { name: "Profile", icon: UserPen, path: "/admin/dashboard/profile" },
    { name: "Events", icon: Calendar, path: "/admin/dashboard/events" },
    {
      name: "Feedback",
      icon: MessageCircle,
      path: "/admin/dashboard/feedback",
    },
    {
      name: "Suggestions",
      icon: Lightbulb,
      path: "/admin/dashboard/suggestions",
    },
  ];

  return (
    <div className="w-64 h-screen lg:min-h-[calc(100vh-4rem)]">
      <div className="px-4 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-8">Dashboard</h2>
        <nav className="space-y-2">
          {routes.map((route) => (
            <Route
              key={route.name}
              {...route}
              isActive={activePath === route.path.split("/").pop()}
              onClick={onNavigate}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}