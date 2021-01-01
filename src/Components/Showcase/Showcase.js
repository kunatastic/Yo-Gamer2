import React from "react";
import "./showcase.css";

function Showcase() {
  return (
    <>
      <div className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Same Gamers</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, eum dolore! Voluptatibus asperiores iste enim, at autem
              exercitationem consequuntur? Pariatur.
            </p>
            <a href="feature.htm" className="btn btn-outline">
              Read more
            </a>
          </div>
          <div className="showcase-form card">
            <h2>Request a demo</h2>
            <form>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
