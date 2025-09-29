import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    color: "bg-blue-100 border-blue-500",
    tag: "Starter",
    tagColor: "bg-blue-500 text-white",
    features: [
      "Access to 10 articles / month",
      "Standard support",
      "Community access",
      "Single device login",
      "Basic analytics",
      "No ads",
    ],
  },
  {
    name: "Business",
    price: "$29/mo",
    color: "bg-green-100 border-green-500",
    tag: "Most Popular",
    tagColor: "bg-green-500 text-white",
    features: [
      "Unlimited articles",
      "Priority support",
      "Community + Premium group",
      "Multiple devices",
      "Advanced analytics",
      "Offline reading",
      "Early access to new features",
    ],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    color: "bg-purple-100 border-purple-500",
    tag: "Best Value",
    tagColor: "bg-purple-600 text-white",
    features: [
      "Custom solutions",
      "Dedicated support manager",
      "Team collaboration",
      "Unlimited devices",
      "Full analytics dashboard",
      "Ad-free experience",
      "API access",
    ],
  },
];

const Plan = () => {
  return (
    <section className="w-11/12 mx-auto my-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Flexible pricing options designed for individuals, professionals, and
        enterprises. Select the plan that best fits your needs.
      </p>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-md border-2 ${plan.color} flex flex-col justify-between`}
          >
            {/* Header line with name + badge */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="lg:text-2xl text-lg md:text-xl font-bold">{plan.name}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${plan.tagColor}`}
                >
                  {plan.tag}
                </span>
              </div>

              {/* Price */}
              <p className="text-xl font-semibold text-gray-800 mb-6">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plan;
