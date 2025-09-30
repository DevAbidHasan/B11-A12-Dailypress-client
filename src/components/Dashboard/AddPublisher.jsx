import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddPublisher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [logo, setLogo] = useState(""); // store uploaded image URL
  const [loading, setLoading] = useState(false);

  // ===== Function to upload image to imgbb =====
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const uploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_upload_key
      }`;
      const res = await axios.post(uploadUrl, formData);
      setLogo(res.data.data.url); // save the uploaded image URL
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ===== Function to submit publisher info =====
  const onSubmit = async (data) => {
    if (!logo) {
      alert("Please upload a publisher photo first.");
      return;
    }

    const publisherInfo = {
      name: data.name,
      photo: logo,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/publishers",
        publisherInfo
      );
      console.log(res);
      if (res.data.insertedId) {
        toast.success("Publisher added successfully!!!");
        reset();
        setLogo("");
      }
      else {
        toast.error("Publisher already exists!");
      }
    } catch (error) {
      console.error("Error saving publisher:", error);
       toast.error("Failed to add publisher!!!");
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10 md:my-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Add Publisher
      </h2>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-6 md:p-10 border border-gray-200 space-y-6 max-w-xl mx-auto"
      >
        {/* Publisher Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Publisher Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Publisher name is required" })}
            placeholder="Enter publisher name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Publisher Photo */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Publisher Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {loading && (
            <p className="text-blue-500 text-sm mt-1">Uploading image...</p>
          )}
          {logo && (
            <img
              src={logo}
              alt="Publisher Preview"
              className="mt-3 w-32 h-32 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 md:py-3 font-semibold rounded-md transition duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Add Publisher"}
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;
