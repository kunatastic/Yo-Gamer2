import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            libero vitae quidem sapiente cum modi tenetur ipsum provident, amet
            laudantium.
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <i class="fas fa-server fa-3x"></i>
              <h3>10,349,405</h3>
              <p class="text-secondary">Deployments</p>
            </div>
            <div>
              <i class="fas fa-upload fa-3x"></i>
              <h3>987 TB</h3>
              <p class="text-secondary">Published</p>
            </div>
            <div>
              <i class="fas fa-project-diagram fa-3x"></i>
              <h3>2,343,265</h3>
              <p class="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
