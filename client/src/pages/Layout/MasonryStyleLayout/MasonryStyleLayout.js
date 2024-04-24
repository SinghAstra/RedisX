import React from "react";
import "./MasonryStyleLayout.css";
import { Link } from "react-router-dom";

const MasonryStyleLayout = () => {
  return (
    <div className="main-container masonry">
      <header>
        <Link to="/">Home</Link>
        <Link to="/">Articles</Link>
        <h1>
          <div>Express</div>
          <div>Yourself</div>
        </h1>
        <Link to="/">Guides</Link>
        <Link to="/">Contact</Link>
      </header>
      <main>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="/">Read more</a>
        </div>
        <div class="tall">
          <img src="/img/4.png" alt="model" />
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="/">Read more</a>
        </div>
        <div class="tall">
          <img src="/img/5.png" alt="model" />
        </div>
        <div class="tall">
          <img src="/img/6.png" alt="model" />
        </div>
        <div class="tall">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            perspiciatis natus sit dicta repellendus quia mollitia. Voluptas
            ullam ipsa dolorem.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            accusamus possimus asperiores fugiat at nostrum odio repellendus
            voluptates. Iusto asperiores voluptate similique maiores ut omnis
            dolores corporis, tenetur excepturi quis?
          </p>
          <a href="/">Read more</a>
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="/">Read more</a>
        </div>
        <div class="tall">
          <img src="/img/4.png" alt="model" />
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="/">Read more</a>
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            reprehenderit.
          </p>
          <a href="/">Read more</a>
        </div>
      </main>
      <footer>
        <p>Copyright 2022 Express Yourself</p>
      </footer>
    </div>
  );
};

export default MasonryStyleLayout;
