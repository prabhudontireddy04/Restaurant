import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a
            href="https://www.facebook.com/"
            className="fab fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://x.com" // 
            className="fab fa-twitter"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/"
            className="fab fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/" 
            className="fab fa-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.youtube.com/"
            className="fab fa-youtube"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>

        
        <div className="links">
          <a href="/">home</a>
          <a href="/#about">about</a>
          <a href="/#menu">menu</a>
          <a href="/#products">products</a>
          <a href="/#review">review</a>
          <a href="/#contact">contact</a>
          <a href="/#blogs">blogs</a>
        </div>

        
        <div className="credit">
          <span>
            <a
              href="https://www.google.com/maps/place/New+Street,+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> New Street, New Delhi
            </a>
          </span>
          <span>
            <a
              href="https://wa.me/919849374901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> +91 9849374901
            </a>
          </span>
          <span>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i> Google
            </a>
          </span>
          <span>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-bell"></i> Subscribe
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
