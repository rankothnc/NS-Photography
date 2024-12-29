import React, { useState } from "react";
import { useParams } from "react-router-dom";
import im1 from "../../../assets/Home_Photo/Photography/WildLife.jpg";
import im2 from "../../../assets/Home_Photo/Photography/Location.jpg";
import "../Landscape/miniGalleryStyles.css";

const MiniGallery = () => {
  const { id } = useParams();

  const images = [
    {
      id: 1,
      src: im1,
      title: "Wildlife Gallery",
      desc: "Explore breathtaking wildlife photos.",
    },
    {
      id: 2,
      src: im2,
      title: "Location Gallery",
      desc: "Discover beautiful landscapes and locations.",
    },
    {
      id: 3,
      src: im1,
      title: "Wildlife Gallery",
      desc: "Explore breathtaking wildlife photos.",
    },
    {
      id: 4,
      src: im2,
      title: "Location Gallery",
      desc: "Discover beautiful landscapes and locations.",
    },
  ];

  const gallery = images.find((image) => image.id === parseInt(id, 10));
  const [currentImage, setCurrentImage] = useState(
    gallery ? gallery.src : images[0].src
  );

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  const handleThumbnailClick = (src) => {
    setCurrentImage(src);
  };

  const navigateImages = (direction) => {
    const currentIndex = images.findIndex(
      (image) => image.src === currentImage
    );
    const nextIndex =
      (currentIndex + direction + images.length) % images.length;
    setCurrentImage(images[nextIndex].src);
  };

  return (
    <div className="detailed-gallery">
      <div className="carousel-container">
        <div className="carousel">
          <button onClick={() => navigateImages(-1)}>&lt;</button>
          <img className="main-image" src={currentImage} alt={gallery.title} />
          <div className="description">
            <h2>{gallery.title}</h2>
            <p>{gallery.desc}</p>
          </div>
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
              onClick={() => handleThumbnailClick(image.src)}
            />
          ))}
        </div>
      </div>

      <button onClick={() => navigateImages(1)}>&gt;</button>
    </div>
  );
};

export default MiniGallery;
