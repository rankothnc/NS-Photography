import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";
import Carousel from "../Banner/Carousel/Carousel";

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col justify-center h-screen bg-white dark:bg-gray-800">
      <div>
        <SectionHeader heading={"About Us"}></SectionHeader>
        <Container>
          <div className="grid grid-cols-1 gap-10">
            <FadeInAnimation></FadeInAnimation>
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                  <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
                  <div className="hero-content text-justify text-neutral-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-0 gap-24">
                      <div className="flex justify-center items-center">
                        <Reavel>
                          <p className="dark:text-white text-slate-700 text-lg md:text-xl">
                            I bring your vision to life through my lens,
                            offering personalized photography services that
                            reflect your unique story. Each moment is captured
                            with creativity and precision, ensuring that your
                            memories are preserved just the way you imagined.
                            Because your moments are as important to me as they
                            are to you...
                          </p>
                        </Reavel>
                      </div>
                      <div>
                        <Carousel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;


