import React, { useState, useEffect } from "react";
import "./home.css"; 
import himg from "../../assets/images/home-img.jpeg";
import himg2 from "../../assets/images/home-img";
import himg6 from "../../assets/images/himg6.jpg";
import himg4 from "../../assets/images/himg4.jpg";
import himg5 from "../../assets/images/himg5.jpg";

const images = [
  himg,himg2,himg4,himg5,himg6
]; 

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h3>Where <span>Every Meal </span>Tells a Story</h3>
        <p>
        Welcome to <span>Table 42</span>, where culinary artistry meets a warm, inviting ambiance.
            Whether you’re here for a hearty meal, a light bite, or an indulgent dessert, our menu celebrates 
            the richness of flavors and the joy of dining together. Discover your next favorite dish and make every meal
             a memorable experience.
        </p>
        <a href="#menu" className="btn">
          Explore Menu
        </a>
      </div>
    </section>
  );
};


export default Header;
