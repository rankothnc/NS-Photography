import React from "react";
import "./BnBstyle.css";
import Photo_Banner from "../Home/Banner/Banner/Photo_Banner";

const categories = [
  { name: "Nature", image: "/path-to-nature.jpg" },
  { name: "Wildlife", image: "/path-to-wildlife.jpg" },
  { name: "Urban", image: "/path-to-urban.jpg" },
  { name: "Portrait", image: "/path-to-portrait.jpg" },
  { name: "Abstract", image: "/path-to-abstract.jpg" },
];

const BnB_purchase = () => {
  return (
    <div>
    <Photo_Banner/>
      <div
        className="bg-white-900 py-10 lg:pb-20 px-5"
      >
        <h2 className="text-black text-3xl font-semibold text-center mb-8">
          Choose the image you want
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BnB_purchase;
