import React from "react";
import { Helmet } from "react-helmet";
import {
  FaPenNib,
  FaUserCheck,
  FaUsers,
  FaCrown,
  FaGlobe,
  FaComments,
} from "react-icons/fa";

const Community = () => {
  const steps = [
    {
      icon: <FaPenNib className="text-4xl text-blue-500" />,
      title: "Writers Submit",
      desc: "Writers and contributors share articles on trending topics.",
    },
    {
      icon: <FaUserCheck className="text-4xl text-green-500" />,
      title: "Editors Review",
      desc: "Editors and admins review articles to ensure quality and accuracy.",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Readers Engage",
      desc: "Readers explore, share, and interact with their favorite articles.",
    },
    {
      icon: <FaCrown className="text-4xl text-yellow-500" />,
      title: "Premium Access",
      desc: "Subscribers enjoy unlimited posts and exclusive premium content.",
    },
    {
      icon: <FaGlobe className="text-4xl text-red-500" />,
      title: "Stronger Community",
      desc: "Together, we are building a transparent and trusted news network.",
    },
    {
      icon: <FaComments className="text-4xl text-pink-500" />,
      title: "Feedback & Growth",
      desc: "We listen to our community to improve and grow every day.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-12">
      <Helmet>
        <title>Dailypress || Community</title>
      </Helmet>

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 poppins">
          Our Community & Workflow
        </h2>
        <p className="mt-3 text-gray-600 inter max-w-2xl mx-auto">
          We believe in collaboration. Our platform connects writers, editors, 
          and readers to create a vibrant news ecosystem.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-md border border-gray-200 bg-white flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary px-6 py-2 rounded-md">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default Community;
