import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioLayout.css";

const PortfolioLayout = () => {
  return (
    <div className="portfolio">
      <div className="welcome">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">Contact</Link>
        </nav>
        <div>
          <h1>Moony</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            dignissimos distinctio dolores praesentium iusto! Accusantium
            aspernatur libero dolor delectus amet.
          </p>
        </div>
        <footer>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </footer>
      </div>
      <div className="about">
        <img src="/img/7.png" alt="main pic" />
        <div class="text">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            corrupti.
          </p>
        </div>
      </div>
      <div class="photos">
        <div class="text">
          <h2>Photography</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            culpa.
          </p>
        </div>
        <img src="/img/8.png" alt="landscape pic" />
      </div>
    </div>
  );
};

export default PortfolioLayout;
