import React from "react";
import "./MultiColumnLayout.css";

const MultiColumnLayout = () => {
  return (
    <div className="main-container">
      <header>
        <h1 className="text-2xl">Gallery Images</h1>
      </header>
      <main className="article-container">
        <article className="featured">
          <img src="/img/1.png" alt="featured" />
          <div>
            <h2 className="text-xl">Balloon Magic</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              atque sit molestias corporis quod quis velit at ea laborum? Quia
              repellendus nobis eveniet, eligendi obcaecati est odit molestias
              quisquam maxime voluptatem mollitia, explicabo atque tempore vitae
              optio? Asperiores, deserunt commodi?
            </p>
          </div>
        </article>
        <article>
          <img src="/img/1.png" alt="featured" />
          <div>
            <h3 className="text-xl">Balloon Magic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              atque sit molestias corporis quod quis velit at ea laborum? Quia
              repellendus nobis eveniet, eligend
            </p>
          </div>
        </article>
        <article>
          <img src="/img/2.png" alt="article img" />
          <div>
            <h3 className="text-xl">Road to Freedom</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              nisi minus placeat hic animi eveniet consectetur voluptates
              aliquid, sunt accusamus!
            </p>
          </div>
        </article>
        <article>
          <img src="/img/3.png" alt="article img" />
          <div>
            <h3 className="text-xl">The Clear Blue</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              nisi minus placeat hic animi eveniet consectetur voluptates
              aliquid, sunt accusamus!
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default MultiColumnLayout;
