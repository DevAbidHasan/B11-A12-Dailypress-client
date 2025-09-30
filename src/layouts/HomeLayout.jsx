import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import FAQ from '../pages/ExtraPages/FAQ';
import Contact from '../pages/ExtraPages/Contact';
import Plan from '../components/Plan';
import Community from '../components/Community';

const HomeLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    setShowModal(false);
    navigate('/subscription');
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Homepage content */}
      <div className={`${showModal ? 'filter brightness-90 blur-sm transition duration-300' : ''}`}>
        <h2 className="text-2xl font-semibold mb-6">this is home</h2>
        <Plan />
        <Community />
        <FAQ />
        <Contact />
      </div>

      {/* Modern Subscription Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
          {/* Blurry translucent backdrop */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg" onClick={handleClose}></div>

          {/* Modal Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-11/12 md:w-96 p-6 md:p-8 z-10 transform transition-transform duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Unlock Premium Content
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Subscribe now to access exclusive articles, features, and premium content curated just for you.
            </p>
            <button
              onClick={handleSubscribe}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Go to Subscription
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLayout;
