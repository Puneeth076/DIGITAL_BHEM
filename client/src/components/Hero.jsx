import React, { useRef } from "react";
import image from "../assets/avatar.png";
import "../styles/hero.css";
import "../pages/pages.css";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Avatar } from "./Avatar";

const Hero = () => {
  const navigate = useNavigate();
  const start = () => {
    navigate("/doctors");
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Dr. Fisher’s Medical Weight Loss & Aesthetic Centers announced the
          launch of their newly redesigned website. Unlike the previous one, the
          latest website is mobile-friendly and, according to the company, is
          easy to use. Users can now book their appointment with the doctor
          directly online.
        </p>
        <button class="cssbuttons-io-button " onClick={start}>
          {" "}
          Look our doctor's
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <Canvas className="model bg-dark">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />

        <Avatar
          scale={3.5}
          position={[0, -3, -1]}
          rotationMainLoop={[5, 0, 0]}
        />
        <mesh>
          <Stars rotationMainLoop={[0, 0, 1]} className="bg-dark" />
        </mesh>
      </Canvas>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
