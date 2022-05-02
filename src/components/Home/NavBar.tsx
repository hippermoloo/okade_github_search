import React from "react";
import heroIcon from "../../assets/images/heroIcon.png";

const NavBarComponent = () => {
  return (
    <React.Fragment>
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-_1c63d8d5-d282-97aa-475c-4510fae2eec7-b89fae5a">
              <a href="#" className="nav-logo-link">
                <img src={heroIcon} width="14" alt="bg" className="nav-logo" />
              </a>
            </li>
            <li>
              <a href="/" aria-current="page" className="nav-link w--current">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/augustine-okade-mcsa-mcsd-devops-655b42a0/"
                target="_blank"
                className="nav-link"
              >
                About Okade
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBarComponent;
