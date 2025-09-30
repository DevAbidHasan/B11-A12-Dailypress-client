import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { FaBars, FaUser, FaNewspaper, FaPlus, FaUsers, FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const actions = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "All Users", icon: <FaUsers />, path: "/dashboard/all-users" },
    { name: "All Articles", icon: <FaNewspaper />, path: "/dashboard/all-articles" },
    { name: "Add Publisher", icon: <FaPlus />, path: "/dashboard/add-publisher" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Large screen drawer */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200 p-5 fixed h-screen">
        <h2 className="text-2xl font-bold text-blue-600 mb-10 poppins">Admin Dashboard</h2>
        <nav className="flex flex-col relative space-y-4">
          {actions.map((action, idx) => {
            const isActive = location.pathname === action.path;
            return (
              <NavLink
                key={idx}
                to={action.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-100 ${
                  isActive ? "text-blue-700 font-semibold" : "text-gray-700"
                }`}
              >
                {action.icon} {action.name}
                {isActive && (
                  <span className="absolute left-0 w-1 h-full bg-blue-600 rounded-tr-md rounded-br-md" />
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Hamburger menu for medium and small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-2xl text-blue-600 p-2 rounded-md bg-white shadow-md"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer for small/medium screens */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 p-5 z-40 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-xl`}
      >
        <h2 className="text-lg font-bold text-blue-600 ml-13 mb-10 poppins">Admin Dashboard</h2>
        <nav className="flex flex-col relative space-y-4">
          {actions.map((action, idx) => {
            const isActive = location.pathname === action.path;
            return (
              <NavLink
                key={idx}
                to={action.path}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-100 ${
                  isActive ? "text-blue-700 font-semibold" : "text-gray-700"
                }`}
              >
                {action.icon} {action.name}
                {isActive && (
                  <span className="absolute left-0 w-1 h-full bg-blue-600 rounded-tr-md rounded-br-md" />
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Overlay backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-5 transition-all duration-300">
        {/* Heading for medium and small screens */}
        <div className="lg:hidden text-center mb-8 mt-0">
          <h2 className="text-2xl font-bold text-blue-600 poppins">Admin Dashboard</h2>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
