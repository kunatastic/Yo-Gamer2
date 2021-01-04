import React, { useState } from "react";
import LoginForm from "../Showcase-Forms/Login-form/Login-Form";
import SigninForm from "../Showcase-Forms/Signin-Form/Signin-Form";
import "./showcase.css";

function Showcase() {
  const [signin, setSignin] = useState(true);
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
            {signin ? (
              <LoginForm send={setSignin} />
            ) : (
              <SigninForm send={setSignin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
