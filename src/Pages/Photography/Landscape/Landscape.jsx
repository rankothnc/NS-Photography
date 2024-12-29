import React from "react";
import ScrollUp from "../../../Components/ScrollUp/ScrollUp";
import Photo_Banner from "../../Home/Banner/Banner/Photo_Banner";
import LGallery from "./LGallery";
import "./GalleryStyle.css";

const Landscape = () => {
  return (
    <div>
      <Photo_Banner />
      <LGallery />
      <ScrollUp />
    </div>
  );
};

export default Landscape;
