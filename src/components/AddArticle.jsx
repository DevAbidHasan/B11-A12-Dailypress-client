import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";

const AddArticle = () => {
  const options = [
    { value: "Politics", label: "Politics" },
    { value: "Sports", label: "Sports" },
    { value: "Technology", label: "Technology" },
    { value: "Health", label: "Health" },
    { value: "Entertainment", label: "Entertainment" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalViews, setTotalViews] = useState(0); // ✅ State for views

  const { data: publishers = [] } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://b11-a12-dailypress-server.vercel.app/publishers"
      );
      return res.data;
    },
  });

  const handleChange = (selected) => setSelectedOptions(selected);

  const { user } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.name.value;
    const imageFile = form.image.files[0];
    const description = form.description.value;
    const publisher = form.publisher.value;

    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const uploadRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`,
        formData
      );

      const imageUrl = uploadRes.data.data.url;

      // Prepare article data
      const articleData = {
        title,
        image: imageUrl,
        tags: selectedOptions.map((opt) => opt.value),
        publisher,
        description,
        premium: false,
        state: "pending",
        posted: new Date().toLocaleDateString(),
        view: 0, // initially zero views
      };

      // Send to backend
      await axios.post(
        "https://b11-a12-dailypress-server.vercel.app/articles",
        articleData
      );

      // Show success toast
      toast.success("✅ Article submitted for admin review!");

      form.reset();
      setSelectedOptions([]);
      setTotalViews(articleData.view); // update total views badge
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="w-11/12 my-10 mx-auto">
      <Helmet>
        <title>Dailypress || Add Article</title>
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10 font-black text-blue-600 text-center poppins">
        Add Article
      </h2>

      {/* Views Badge */}
      {totalViews > 0 && (
        <div className="flex items-center justify-center mb-4">
          <FaEye className="text-blue-500 mr-2" />
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
            {totalViews} views
          </span>
        </div>
      )}

      <div className="inter">
        <form
          onSubmit={handleFormSubmit}
          className="border p-6 border-gray-300 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Title */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="font-bold">Article Title</label>
              <input
                required
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter article title"
              />
            </fieldset>

            {/* Image */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="font-bold">Article Image</label>
              <input required type="file" name="image" className="input w-full" />
            </fieldset>

            {/* Tags */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="font-bold">Article Tags</label>
              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Select categories..."
              />
              <p className="mt-2 text-sm text-gray-600">
                Tags : {selectedOptions.map((opt) => opt.label).join(", ")}
              </p>
            </fieldset>

            {/* Publisher */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="font-bold mb-2 block">Article Publisher</label>
              <select
                name="publisher"
                className="select select-bordered w-full"
                required
              >
                <option value="" disabled selected>
                  -- Select Publisher --
                </option>
                {publishers.map((pub) => (
                  <option key={pub._id} value={pub.name}>
                    {pub.name}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>

          {/* Description */}
          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
            <label className="font-bold">Article Description</label>
            <textarea
              required
              name="description"
              className="input pt-2 py-25 w-full"
              placeholder="Enter article description"
            />
          </fieldset>

          <input
            className="btn btn-primary inter w-full"
            type="submit"
            value="Submit Article"
          />
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
