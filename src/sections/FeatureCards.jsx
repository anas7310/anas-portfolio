import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full px-6 lg:px-16">
      {" "}
      {/* padding-x-lg -> Tailwind px-6/lg:px-16 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
