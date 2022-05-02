import React from "react";
import heroIcon from "../../assets/images/heroIcon.png";

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer id="footer" className="footer wf-section">
        <div className="w-container">
          <div className="footer-flex-container">
            <a href="#" className="footer-logo-link">
              <img src={heroIcon} alt="bg" className="footer-image" />
            </a>
          </div>
          <div className="text-block">
            © 2022 Okade Augustine - Github Search engine test. All rights
            reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
