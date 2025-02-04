import React from "react";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";

const BnB = () => {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gray-700  py-10 lg:pb-20">
      <Container>
        <FadeInAnimation>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 rounded-lg px-12 py-24 bg-gradient-to-r from-green-600 to-yellow-300 mt-10 container mx-auto gap-6"
            data-aos="zoom-in"
          >
            <p style={{ color: "#fff" }}>BnB</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg"  onClick={() => navigate("/bnb_collection")}>
              Go to BnB
            </button>
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
};

export default BnB;
