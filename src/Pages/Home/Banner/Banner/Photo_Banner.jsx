import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import { useLocation } from "react-router-dom";

import landscape from '../../../../assets/Home_Photo/Photography/Landscape.jpg';
import locations from '../../../../assets/Home_Photo/Photography/Location.jpg';
import travelling from '../../../../assets/Home_Photo/Photography/Travelling.jpg';
import wildlife from '../../../../assets/Home_Photo/Photography/Wildlife.jpg';
import home from '../../../../assets/Home_Photo/Photography/Wildlife.jpg';

const Photo_Banner = () => {
  const location =useLocation();

  const getBackgroundImage = (path) => {
    switch (path) {
      case "/landscape":
        return `url(${landscape})`;
      case "/location":
        return `url(${locations})`;
      case "/wildlife":
        return `url(${wildlife})`;
      case "/travelling":
        return `url(${travelling})`;
      case "/":
        return `url(${home})`;
      default:
        return `url(${wildlife})`;
    }
  };

  const backgroundImage = getBackgroundImage(location.pathname)

  return (
    <>
      <div
        id="home"
        className="hero min-h-[75vh] !px-0"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          loading: "lazy",
        }}
      >
        <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-1 md:grid-cols-1 pt-16 gap-24">
            <div>
              <TypingEffect />
            </div>
            {/* <div>
              <Carousel />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo_Banner;
