import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import im1 from "../../../assets/Home_Photo/Photography/WildLife.jpg";
import im2 from "../../../assets/Home_Photo/Photography/Location.jpg";
import im3 from "../../../assets/Home_Photo/Photography/Travelling.jpg";
import im4 from "../../../assets/Home_Photo/Photography/Landscape.jpg";
import "../Landscape/miniGalleryStyles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MiniGallery = () => {
  const { id } = useParams();

  const images = [
    { id: 1, src: im1, title: "Wildlife Gallery1", desc: "Description 1" },
    { id: 2, src: im2, title: "Location Gallery2", desc: "Description 2" },
    { id: 3, src: im3, title: "Wildlife Gallery3", desc: "Description 3" },
    { id: 4, src: im4, title: "Location Gallery4", desc: "Description 4" },
  ];

  const gallery = images.find((image) => image.id === parseInt(id, 10));
  const [currentImage, setCurrentImage] = useState(
    gallery ? gallery.src : images[0].src
  );
  const [currentTitle, setCurrentTitle] = useState(
    gallery ? gallery.title : images[0].title
  );
  const [currentDesc, setCurrentDesc] = useState(
    gallery ? gallery.desc : images[0].desc
  );
  const [animationClass, setAnimationClass] = useState("");

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  const handleThumbnailClick = (src, title, desc) => {
    setCurrentImage(src);
    setCurrentTitle(title);
    setCurrentDesc(desc);
  };

  const navigateImages = (direction) => {
    setAnimationClass(direction === 1 ? "slide-enter" : "slide-exit");
    setTimeout(() => {
      const currentIndex = images.findIndex(
        (image) => image.src === currentImage
      );
      const nextIndex =
        (currentIndex + direction + images.length) % images.length;
      setCurrentImage(images[nextIndex].src);
      setCurrentTitle(images[nextIndex].title);
      setCurrentDesc(images[nextIndex].desc);
      setAnimationClass(""); // Reset animation class
    }, 500); // Matches the CSS transition duration
  };

  return (
    <div className="detailed-gallery">
      <div className="carousel-container">
        <div className="carousel">
          <button onClick={() => navigateImages(-1)}>
            <FaChevronLeft />
          </button>
          <img
            className={`main-image ${animationClass}`}
            src={currentImage}
            alt={currentTitle}
          />
          <div className="description">
            <h2 className="galleryTitle">{currentTitle}</h2>
            <p>{currentDesc}</p>
          </div>
          <button onClick={() => navigateImages(1)}>
            <FaChevronRight />
          </button>
        </div>
        <div className="thumbnails">
          {images.map((image) => (
            <img
              key={image.id}
              className={`thumbnail ${
                image.src === currentImage ? "active" : ""
              }`}
              src={image.src}
              alt={image.title}
              onClick={() =>
                handleThumbnailClick(image.src, image.title, image.desc)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniGallery;
