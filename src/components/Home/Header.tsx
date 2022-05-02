import React from "react";
import heroBox from "../../assets/images/heroBox.png";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <header id="hero" className="hero wf-section">
        <div className="flex-container w-container">
          <div className="div-block">
            <h1>
              Hi, I’m Okade!
              <br />
              Fullstack Engineer
            </h1>
            <p>
              Case Study: Create a React application that supports searching
              GitHub for both users and organizations.
            </p>
            <a href="https://www.linkedin.com/in/augustine-okade-mcsa-mcsd-devops-655b42a0/" className="w-button">
              Check my LinkedIn
            </a>
          </div>
          <div className="hero-image-mask">
            <img src={`${heroBox}`} alt="bg" className="hero-image" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HeaderComponent;
