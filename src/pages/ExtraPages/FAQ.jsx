import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How can I submit an article to Dailypress?",
      a: "You can submit articles by registering an account and visiting the 'Add Article' section. Fill in the form with your article title, image, tags, and description, then submit it for review.",
    },
    {
      q: "Are submitted articles reviewed before publishing?",
      a: "Yes, all submitted articles go through an editorial review process to ensure accuracy, originality, and quality before being published.",
    },
    {
      q: "Can I subscribe to get premium content?",
      a: "Yes! We offer multiple subscription plans that unlock premium articles, exclusive insights, and an ad-free reading experience.",
    },
    {
      q: "Is there a free version available?",
      a: "Absolutely. Readers can access general articles for free, while premium subscribers enjoy advanced features and exclusive content.",
    },
    {
      q: "How do I join the community discussions?",
      a: "You can join the community section on our platform to share opinions, comment on articles, and connect with other readers and writers.",
    },
    {
      q: "Can I track topics I am interested in?",
      a: "Yes! You can follow categories like Politics, Sports, Technology, and Health to get personalized article recommendations.",
    },
    {
      q: "How can I contact the support team?",
      a: "You can reach us through the 'Contact Us' page, where you’ll find email and chat support options for faster assistance.",
    },
  ];

  return (
    <div className="my-16 w-11/12 mx-auto">
      {/* Heading */}
      <h2 className="font-black text-center lg:text-3xl sm:text-2xl text-xl mb-10 md:mb-16 text-blue-600 poppins">
        Frequently Asked Questions
      </h2>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-semibold text-gray-800">{item.q}</span>
              {openIndex === idx ? (
                <FaChevronUp className="text-blue-500" />
              ) : (
                <FaChevronDown className="text-blue-500" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-gray-600 inter">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
