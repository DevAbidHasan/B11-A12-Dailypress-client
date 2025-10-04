import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";

const ArticleDetails = () => {
  const data = useLoaderData() || {};

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10 p-6">
        <Helmet>
            <title>
                Dailypress || Article Details
            </title>
        </Helmet>
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
        {/* Article Image */}
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-60 md:h-80 object-cover"
          />
        )}

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            {data.title}
          </h2>

          {/* Author & Date */}
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
            {data.authorPhoto && (
              <img
                src={data.authorPhoto}
                alt={data.authorName}
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <div>
              <p className="font-semibold text-blue-600">{data.authorName}</p>
              <p>{data.authorEmail}</p>
              <p className="text-xs text-blue-600">
                {data.posted
                  ? new Date(data.posted).toLocaleString()
                  : "Date not available"}
              </p>
            </div>
          </div>

          {/* Publisher */}
          {data.publisher && (
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-semibold">Publisher: </span> {data.publisher}
            </p>
          )}

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            {data.description}
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

          {/* Back Button */}
          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
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
