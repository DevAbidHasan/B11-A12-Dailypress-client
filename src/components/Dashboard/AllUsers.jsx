import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://b11-a12-dailypress-server.vercel.app/users");
      return res.data;
    },
  });

  const [remainingUsers, setRemainingUsers] = useState([]);

  if (isLoading) return <p className="text-center">Loading users...</p>;
  if (error)
    return <p className="text-center text-red-600">Error loading users</p>;

  const handleUserDelete = async (id) => {
    console.log(id)
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`https://b11-a12-dailypress-server.vercel.app/user/${id}`);
        // Update UI after deletion
        setRemainingUsers(users.filter((user) => user._id !== id));
        queryClient.invalidateQueries(["users"]); // Refresh data from server if needed
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete user.", "error");
      }
    }
  };

  // Use remainingUsers if available, otherwise fallback to users from query
  const displayedUsers = remainingUsers.length > 0 ? remainingUsers : users;

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-blue-600">
        Registered Users ({displayedUsers.length})
      </h2>

      {/* ===== Table for md+ screens ===== */}
      <div className="hidden md:block overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                Email
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                Role
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, idx) => (
              <tr
                key={user._id}
                className={`hover:bg-blue-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-4 border-b border-dashed border-gray-300">
                  {user.name}
                </td>
                <td className="py-3 px-4 border-b border-dashed border-gray-300">
                  {user.email}
                </td>
                <td className="py-3 px-4 border-b border-dashed border-gray-300 capitalize">
                  {user.role}
                </td>
                <td className="py-2.5 px-4 border-b border-dashed border-gray-300 text-center">
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="px-4 py-1.5 text-sm bg-red-600 hover:cursor-pointer text-white rounded-md hover:bg-red-400 transition"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Card view for small screens ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {displayedUsers.map((user) => (
          <div
            key={user._id}
            className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white"
          >
            <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm capitalize mb-3">
              Role: {user.role}
            </p>
            <button
              className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-sm"
              onClick={() => handleUserDelete(user._id)}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
