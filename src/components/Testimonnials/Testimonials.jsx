import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [currentComment, setCurrentComment] = useState(0);

  function goPrev() {
    setCurrentComment(
      currentComment === 0 ? testimonialsData.length - 1 : currentComment - 1
    );
  }
  function goNext() {
    setCurrentComment(
      currentComment === testimonialsData.length - 1 ? 0 : currentComment + 1
    );
  }
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text"> WHAT THEY</span>
        <span>SAY ABOUT ME</span>

        <span className="review">
          {testimonialsData[currentComment].review}
        </span>
        <span>
          {testimonialsData[currentComment].name} -{" "}
          {testimonialsData[currentComment].status}
        </span>
        <div>
          <h1>hello</h1>
        </div>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[currentComment].image} alt="" />

        <div className="arrows">
          <img src={leftArrow} alt="" onClick={goPrev} />
          <img src={rightArrow} alt="" onClick={goNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
