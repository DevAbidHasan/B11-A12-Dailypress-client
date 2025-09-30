import React from "react";
import Lottie from "lottie-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../../../public/contact.json";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({ name, email, message });

    // Show toast notification
    toast.success("Message sent successfully!");

    // Reset form
    e.target.reset();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 mb-12 poppins">
        Get In Touch
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Lottie Animation */}
        <div className="w-full flex justify-center">
          <Lottie
            className="max-w-[350px] md:max-w-[420px]"
            animationData={contactImage}
          />
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-100">
          <form className="space-y-6 inter" onSubmit={handleSubmit}>
            {/* Name */}
              <input
                type="text"
                name="name"
                required
                className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder=" Name"
              />
              {/* <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                Your Name
              </label> */}
           

            {/* Email */}
            
              <input
                type="email"
                name="email"
                required
                className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder=" Email"
              />
             

            {/* Message */}
            
              <textarea
                rows="4"
                name="message"
                required
                className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder=" Message"
              ></textarea>
            

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
