import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        {/* Figure */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coached</span>
          </div>
          <div>
            <span>587</span>
            <span>member joined</span>
          </div>
          <div>
            <span>50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </div>
        {/* Hero images */}
        <img src={hero_image} alt="hero image" className="hero-image" />
        <img
          src={hero_image_back}
          alt="hero image back"
          className="hero-image-back"
        />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export const Trash = () => (
  <a href="zalo://conversation?phone=0868456880/" target="_blank">
    <button class="zalo-button">
      <img
        src="https://zalo-app.com/assets/images/icon/zalo-icon-white.svg"
        alt="Zalo"
      />
      <span>Chat với tôi trên Zalo</span>
    </button>
  </a>
);
