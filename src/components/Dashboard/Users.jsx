import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaUserTie, FaUserAlt } from "react-icons/fa";

const Users = ({ stats }) => {
  // Example dynamic data fallback
  const { allUsers = 1500, premiumUsers = 320, normalUsers = 1180 } = stats || {};

  // Detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.3, // start animation when 30% visible
  });

  const cards = [
    {
      id: 1,
      title: "All Users",
      count: allUsers,
      icon: <FaUsers className="text-blue-600 text-4xl mb-3" />,
      bg: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      id: 2,
      title: "Premium Users",
      count: premiumUsers,
      icon: <FaUserTie className="text-yellow-500 text-4xl mb-3" />,
      bg: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      id: 3,
      title: "Normal Users",
      count: normalUsers,
      icon: <FaUserAlt className="text-green-600 text-4xl mb-3" />,
      bg: "bg-green-50 dark:bg-green-900/30",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-11/12 mx-auto py-16 px-4 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-12">
        User Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} rounded-2xl shadow-md p-8 flex flex-col justify-center items-center hover:shadow-xl transition-all duration-300`}
          >
            {card.icon}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {card.title}
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-200">
              {inView ? (
                <CountUp
                  start={0}
                  end={card.count}
                  duration={2.5}
                  separator=","
                />
              ) : (
                0
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Users;
