import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const MyArticles = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // Calculate total views
  const totalViews = data.reduce((sum, item) => sum + Number(item.view || 0), 0);

  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-10">
        My Articles
      </h2>

     
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Category Tag */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-gray-500 mb-4">
                    {item.description.length > 80
                      ? item.description.slice(0, 80) + "..."
                      : item.description}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3 mt-3">
                    <p>
                      👁️ Views:{" "}
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {item.view || 0}
                      </span>
                    </p>

                    <p>
                      🗓️ Posted:{" "}
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {item.date
                          ? new Date(item.date).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </p>
                  </div>

                  {/* Details Button */}
                  <button
                    onClick={() => navigate(`/article/${item._id}`)}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-gray-600 dark:text-gray-300 text-xl">
          You have added zero articles
        </h2>
      )}
    </div>
  );
};

export default MyArticles;
