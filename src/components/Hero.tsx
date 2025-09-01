import "../styles/hero.css";
import React from "react";
import Audio from "./Audio";
import heroImage from "../assets/img/hero.png";

function Hero() {
  return (
    <>
      <Audio />
      <div className="hero-container">
        <figure>
          <img src={heroImage} alt="Hero background" />
        </figure>
        <div className="hero-title">
          <h1 className="title-we">We're</h1>
          <h1 className="title-getting">Getting</h1>
          <h1 className="title-married">Married</h1>
        </div>
        <div className="hero-sub-title">
          <p className="p1">2025년 11 월 1일 (토) 12 : 30</p>
          <p className="p2">센텀 사이언스파크</p>
          <p className="p3">별관 4층 더하우스홀</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
