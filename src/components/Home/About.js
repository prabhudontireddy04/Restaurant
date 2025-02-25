import React from "react";
import AboutImg from "../../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            At <span>Table 42</span>, we bring passion and care to every dish.
             Our food is crafted with fresh, locally-sourced ingredients, 
             authentic recipes, and a modern touch. Each meal is a blend of
              tradition and innovation, prepared by skilled chefs who prioritize 
              quality and flavor. From hearty classics to health-conscious options, 
              we ensure every bite is a memorable experience. Come, taste the difference!
            </p>
           
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
