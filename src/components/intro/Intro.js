import React from "react";
import "./intro.css";
import Me from "../../img/new.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h2 className="intro__greeting">Hi! I am Emmanuel. </h2>
          <h1 className="intro__name">I am a full stack developer.</h1>
          {/* <div className="intro-title">
            <div className="intro-title__wrapper">
              <div className="intro-title__item">Web Developer</div>
              <div className="intro-title__item">UI/UX Designer</div>
              <div className="intro-title__item">Mobile Developer</div>
              <div className="intro-title__item">Dev OPS</div>
              <div className="intro-title__item">Content Creator</div>
            </div>
          </div> */}
          <p className="intro-desc">
            I have proven experience and skills in designing awesome and
            interactive UI interfaces and platforms using React, NodeJS, Express
            and MongoDB.
          </p>
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__bg"></div>
        <img src={Me} alt="" className="intro__img" />
      </div>
    </div>
  );
};

export default Intro;
