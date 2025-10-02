import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllPublishers = () => {
  const {
    data: allPublishers = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axios.get("https://b11-a12-dailypress-server.vercel.app/publishers");
      return res.data;
    },
  });
//   console.log(allPublishers);

  return (
    <div className="w-11/12 mx-auto my-13">
      <h2 className="text-3xl text-center md:text-4xl font-extrabold text-blue-600 mb-4">
        All Publishers
      </h2>
      <div className="grid gap-6 mt-15 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allPublishers.map((publisher) => (
          <div
            key={publisher._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg p-4 flex flex-col items-center transition duration-300"
          >
            <img
              src={publisher.photo}
              alt={publisher.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {publisher.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPublishers;
