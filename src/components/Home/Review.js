import React from "react";
import { review } from "../../Data";
import qouteImg from "../../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              I had the pleasure of dining at Table 42 last weekend, and I must say, it was an exceptional experience! From the moment I entered, the ambiance was warm and inviting, with soft lighting and tasteful decor creating the perfect setting for a relaxing meal.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="box-container">
          

        
        </div>

      </section>
    </>
  );
};

export default Review;
