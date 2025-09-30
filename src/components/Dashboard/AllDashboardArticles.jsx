import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  FaCheck,
  FaTimes,
  FaTrash,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { Link } from "react-router";

Modal.setAppElement("#root");

const AllArticles = () => {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("pending");

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axios.get(
        "https://b11-a12-dailypress-server.vercel.app/articles"
      );
      return res.data;
    },
  });

  const [declineModalOpen, setDeclineModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [declineReason, setDeclineReason] = useState("");

  const handleApprove = async (id) => {
    try {
      await axios.patch(
        `https://b11-a12-dailypress-server.vercel.app/articles/${id}/approve`
      );
      toast.success("Article approved!");
      queryClient.invalidateQueries(["articles"]);
    } catch {
      toast.error("Failed to approve article.");
    }
  };

  const handleViewDetails = (id) => {
    alert(id);
  };

  const openDeclineModal = (article) => {
    setCurrentArticle(article);
    setDeclineModalOpen(true);
  };

  const handleDecline = async () => {
    try {
      await axios.patch(
        `https://b11-a12-dailypress-server.vercel.app/articles/${currentArticle._id}/decline`,
        { reason: declineReason }
      );
      toast.success("Article declined!");
      setDeclineModalOpen(false);
      setDeclineReason("");
      queryClient.invalidateQueries(["articles"]);
    } catch {
      toast.error("Failed to decline article.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this article?")) return;
    try {
      await axios.delete(
        `https://b11-a12-dailypress-server.vercel.app/articles/${id}`
      );
      toast.success("Article deleted!");
      queryClient.invalidateQueries(["articles"]);
    } catch {
      toast.error("Failed to delete article.");
    }
  };

  const handlePremium = async (id) => {
    try {
      await axios.patch(
        `https://b11-a12-dailypress-server.vercel.app/articles/${id}/premium`
      );
      toast.success("Article is now premium!");
      queryClient.invalidateQueries(["articles"]);
    } catch {
      toast.error("Failed to make premium.");
    }
  };

  if (isLoading)
    return <p className="text-center py-10">Loading articles...</p>;

  // Filtered data based on tab
  const filteredArticles = articles.filter((a) => {
    if (activeTab === "pending") return a.state === "pending";
    if (activeTab === "accepted") return a.state === "approved";
    if (activeTab === "rejected") return a.state === "declined";
    return true;
  });

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-600">
        All Articles
      </h2>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <button
          onClick={() => setActiveTab("pending")}
          className={`flex-1 py-2 rounded font-medium ${
            activeTab === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Pending Articles
        </button>
        <button
          onClick={() => setActiveTab("accepted")}
          className={`flex-1 py-2 rounded font-medium ${
            activeTab === "accepted"
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Accepted Articles
        </button>
        <button
          onClick={() => setActiveTab("rejected")}
          className={`flex-1 py-2 rounded font-medium ${
            activeTab === "rejected"
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Rejected Articles
        </button>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No {activeTab} articles found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article._id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
            >
              {/* Thumbnail */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  {article.authorPhoto && (
                    <img
                      src={article.authorPhoto}
                      alt={article.authorName}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-sm">
                      {article.authorName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {article.authorEmail}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  {/* <p>
                    <span className="font-medium">Publisher:</span>{" "}
                    {article.publisher}
                  </p> */}
                  <p>
                    <span className="font-medium">Posted:</span>{" "}
                    {new Date(article.posted).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${
                        article.state === "approved"
                          ? "bg-green-100 text-green-700"
                          : article.state === "declined"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {article.state}
                    </span>
                  </p>
                  {article.state === "declined" && article.declineReason && (
                    <p className="text-xs flex items-center text-red-500">
                      <FaInfoCircle className="mr-1" /> {article.declineReason}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Premium:</span>{" "}
                    {article.premium ? "Yes" : "No"}
                  </p>
                </div>

                {/* Buttons (only for Pending tab) */}
                {activeTab === "pending" && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    <button
                      onClick={() => handleApprove(article._id)}
                      className="flex-1 px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center text-sm"
                    >
                      <FaCheck className="mr-1" /> Approve
                    </button>
                    <button
                      onClick={() => openDeclineModal(article)}
                      className="flex-1 px-3 py-1.5 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex items-center justify-center text-sm"
                    >
                      <FaTimes className="mr-1" /> Decline
                    </button>
                    <Link to={`/article-details/${article._id}`}
                      // later you can open a modal or navigate
                      className="flex-1 px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center text-sm"
                    >
                      <FaInfoCircle className="mr-1" /> Details
                    </Link>

                    <button
                      onClick={() => handlePremium(article._id)}
                      className="flex-1 px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center text-sm"
                    >
                      <FaStar className="mr-1" /> Premium
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Decline Modal */}
      <Modal
        isOpen={declineModalOpen}
        onRequestClose={() => setDeclineModalOpen(false)}
        contentLabel="Decline Article"
        className="bg-white rounded-lg max-w-md mx-auto mt-20 p-6 relative shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold mb-4">Reason for Declining</h3>
        <textarea
          value={declineReason}
          onChange={(e) => setDeclineReason(e.target.value)}
          className="w-full border rounded-md p-2 mb-4 resize-none"
          rows={4}
          placeholder="Write the reason for decline..."
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setDeclineModalOpen(false)}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button onClick={handleDecline} className="btn btn-warning">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AllArticles;
