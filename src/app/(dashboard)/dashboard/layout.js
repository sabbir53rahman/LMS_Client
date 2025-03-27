import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar - Fixed on the left */}
      <div className="hidden md:block w-64 fixed top-0 left-0 h-screen bg-gray-900 shadow-md overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content - Takes full width and scrolls */}
      <div className="flex-1 md:ml-64">
        {children}
      </div>
    </div>
  );
}

export default Layout;
