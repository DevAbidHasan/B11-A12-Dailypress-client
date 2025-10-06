import React from "react";
import { useLoaderData } from "react-router";
import { FaEnvelope, FaUser, FaCalendarAlt, FaUserTag } from "react-icons/fa";

const UserProfile = () => {
  const user = useLoaderData();

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
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
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

        {/* Button */}
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
