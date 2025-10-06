import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaUserTag,
  FaEdit,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const UserProfile = () => {
  const loadedUser = useLoaderData();
  const [user, setUser] = useState(loadedUser);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/user/${user.email}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });

      const data = await res.json();

      if (res.ok && data.modifiedCount > 0) {
        setUser((prev) => ({ ...prev, name: newName })); // ✅ update UI immediately
        toast.success("Username updated successfully");
        setEditing(false);
      } else {
        toast.error("No changes made or failed to update");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update username");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.name}`}
            alt={user?.name}
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md mb-4"
          />
          <Toaster />

          {/* Name + Edit Button */}
          <div className="flex items-center gap-2 relative group">
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  onClick={handleUpdate}
                  className="text-green-600 hover:text-green-700 text-lg"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    setNewName(user?.name);
                  }}
                  className="text-red-500 hover:text-red-600 text-lg"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user?.name}
                </h2>
                <button
                  className="text-blue-600 hover:text-blue-700 text-sm transition-all"
                  onClick={() => setEditing(true)}
                >
                  <FaEdit />
                </button>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Update username
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 capitalize mt-1">{user?.role}</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
            <FaEnvelope className="text-blue-600 text-lg" />
            <p className="text-gray-700 text-sm break-all">{user?.email}</p>
          </div>

          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
            <FaUserTag className="text-blue-600 text-lg" />
            <p className="text-gray-700 text-sm">ID: {user?._id}</p>
          </div>

          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
            <FaCalendarAlt className="text-blue-600 text-lg" />
            <p className="text-gray-700 text-sm">
              Joined: {new Date(user?.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
