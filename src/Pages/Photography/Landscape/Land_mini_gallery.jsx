import React from "react";
import { useParams } from "react-router-dom";
import im1 from "../../../assets/Home_Photo/Photography/WildLife.jpg";
import im2 from "../../../assets/Home_Photo/Photography/Location.jpg";

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
      src: im2,
      title: "Location Gallery",
      desc: "Discover beautiful landscapes and locations.",
    },
  ];

  const gallery = images.find((image)=> image.id === parseInt(id,10));

  if(!gallery) {
    return <div>Gallery not found</div>;
  }

  return (
    <div className="detailed-gallery">
        <h2>{gallery.title}</h2>
        <img src={gallery.src} alt={gallery.title} />
        <p>{gallery.desc}</p>
    </div>
  )
};

export default MiniGallery;