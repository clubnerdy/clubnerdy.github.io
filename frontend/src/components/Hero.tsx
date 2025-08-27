import "../styles/hero.css";
import React from "react";
import Audio from "./Audio";

function Hero() {
  return (
    <>
      <Audio />
      <div className="container">
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="hero-title">
          <h1>We're</h1>
          <h1>Getting</h1>
          <h1>Married</h1>
        </div>
        <div className="hero-sub-title">
          <p>2025년 11 월 1일 (토) 12 : 30</p>
          <p>센텀 사이언스파크</p>
          <p>별관 4층 더하우스홀</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
