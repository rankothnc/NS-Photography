import React, { useState, useEffect } from "react";
import im1 from "../../../assets/Home_Photo/Photography/WildLife.jpg";
import im2 from "../../../assets/Home_Photo/Photography/Location.jpg";

import "../Landscape/GalleryStyle.css";

const WGallery = () => {
    const images = [
      { src: im1, desc: "Adipisci consequuntur ipsa fugit perspiciatis eligendi." },
      { src: im2, desc: "Omnis blanditiis, totam placeat." },
      { src: im1, desc: "Nobis dolore harum vitae libero adipisci officia." },
      // Add more images here
    ];

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      //Delay thhe loaded state to trigger animation
      const timer = setTimeout(()=> setLoaded(true),100);
      return () => clearTimeout(timer);
    },[]);
  
    return (
      <div className={`gallery-container ${loaded ? "loaded" : ""}`}>
        {images.map((image, index) => (
          <div className={`card ${loaded ? "show" : ""}`} key={index}>
            <div className="image-container">
              <img src={image.src} alt={`Gallery ${index}`} />       
              <button className="view-gallery-btn">Go to Gallery<span className="material-icons">photo_camera</span></button>       
            </div>
            <div className="description">
              <p>{image.desc}</p>
              
            </div>
            
          </div>
          
        ))}
      </div>
    );
  };

export default WGallery;
