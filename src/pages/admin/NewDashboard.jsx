import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../../components/dashboard/Sidebar";
import GradientBackground from "../../components/common/GradientBackground";

export default function NewDashboard() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-md bg-white shadow-lg border"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        <div className="flex min-h-[calc(100vh-4rem)]">
          <GradientBackground position="top" />
          
          {/* Sidebar - Mobile overlay */}
          <div
            className={`bg-white lg:hidden fixed inset-0 bg-gray-800/50 z-40 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={handleSidebarClose}
          />

          {/* Sidebar */}
          <div
            className={`fixed lg:static lg:translate-x-0 z-40 transition-transform duration-200 
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Sidebar currentPath={currentPath} onNavigate={handleSidebarClose} />
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 lg:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}