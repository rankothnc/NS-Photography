import React, { useState, useEffect } from "react";
import im1 from "../../../assets/Home_Photo/Photography/WildLife.jpg";
import im2 from "../../../assets/Home_Photo/Photography/Location.jpg";

import "../Landscape/GalleryStyle.css";
import { useNavigate } from "react-router-dom";

const TGallery = () => {
  const navigate = useNavigate();

  const images = [
    {  id: 1,
      src: im1,
      desc: "Adipisci consequuntur ipsa fugit perspiciatis eligendi.",
    },
    { id: 2, src: im2, desc: "Omnis blanditiis, totam placeat." },
    { id: 3, src: im1, desc: "Nobis dolore harum vitae libero adipisci officia." },
    { id: 4, src: im1, desc: "Nobis dolore harum vitae libero adipisci officia." },
    { id: 5, src: im2, desc: "Omnis blanditiis, totam placeat." },
    { id: 6, src: im1, desc: "Nobis dolore harum vitae libero adipisci officia." },
    // Add more images here
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //Delay thhe loaded state to trigger animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className={`gallery-container ${loaded ? "loaded" : ""}`}>
      {images.map((image, index) => (
        <div
          className={`card ${loaded ? "show" : ""}`}
          key={index}
          onClick={() => handleCardClick(image.id)}
        >
          <div className="image-container">
            <img src={image.src} alt={`Gallery ${image.id}`} />
            <button
              className="view-gallery-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling up to the parent `div`
                handleCardClick(image.id);
              }}
            >
              Go to Gallery<span className="material-icons">photo_camera</span>
            </button>
          </div>
          <div className="description">
            <p>{image.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TGallery;
