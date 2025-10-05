import React from "react";
import { Link, useLoaderData } from "react-router";

const AllArticles = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl mt-10 md:text-3xl lg:text-4xl mb-10 font-black text-blue-600 text-center poppins">
        All Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>
                  👤 Publisher:{" "}
                  <span className="text-yellow-500 font-bold">
                    {item.publisher}
                  </span>
                </span>
                <span>👁 {item.view} views</span>
              </div>

              {/* Button */}
              <div className="mt-4">
                <Link
                  className="w-full btn btn-info hover:btn-secondary rounded-xl"
                  to={`/article/${item._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
