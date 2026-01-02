import React from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:mb-20 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {[...logoIconsList, ...logoIconsList].map((icon, i) => (
            <LogoIcon key={`${icon.name}-${i}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
