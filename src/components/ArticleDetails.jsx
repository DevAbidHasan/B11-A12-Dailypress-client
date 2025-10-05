import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";

const ArticleDetails = () => {
  const data = useLoaderData() || {};

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10 p-1 md:p-6">
      <Helmet>
        <title>DailyPress || {data.title || "Article Details"}</title>
      </Helmet>

      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl">
        {/* Article Image */}
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-60 md:h-80 object-cover"
          />
        )}

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Category */}
          {data.category && (
            <div className="mb-3">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                {data.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            {data.title}
          </h2>

          {/* Author, Date, Views */}
          <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              {data.authorPhoto && (
                <img
                  src={data.authorPhoto}
                  alt={data.authorName}
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div>
                <p className="font-semibold text-blue-700">
                  {data.authorName || "Unknown Author"}
                </p>
                {data.authorEmail && <p>{data.authorEmail}</p>}
                <p className="text-xs text-gray-500">
                  {data.posted
                    ? new Date(data.posted).toLocaleString()
                    : "Date not available"}
                </p>
              </div>
            </div>

            {/* Views */}
            <div className="flex items-center mt-3 md:mt-0">
              <span className="text-gray-600 text-base flex items-center">
                👁️{" "}
                <span className="ml-1 font-medium">
                  {data.view ? data.view : 0}
                </span>
              </span>
            </div>
          </div>

          {/* Publisher */}
          {data.publisher && (
            <p className="text-sm text-gray-700 mb-5">
              <span className="font-semibold text-gray-800">Publisher: </span>
              {data.publisher}
            </p>
          )}

          {/* Description */}
          <p className="text-gray-800 leading-relaxed text-justify mb-6">
            {data.description || "No description available."}
          </p>

          {/* Status */}
          <p className="text-sm mb-4">
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded text-white ${
                data.state === "accepted"
                  ? "bg-green-500"
                  : data.state === "pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {data.state}
            </span>
          </p>

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:shadow-lg hover:scale-105 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
