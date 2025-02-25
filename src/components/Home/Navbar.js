import React, { useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../feature/CartSlice";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  
  const { cart } = useSelector((state) => state.allCart);

  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
          <span onClick={() => navigate("/cart")}>Cart</span>
        </nav>
        <div className="icons">
          {/* <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div> */}
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
            style={{ position: "relative" }}
          >
            {/* Badge for item count */}
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",        
                  top: "-8px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.8rem",
                }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="Search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div className="cart-item" key={index * Math.random()}>
                <span
                  className="fas fa-times"
                  onClick={() => dispatch(removeItem(item.id))}
                ></span>
                <img src={item.img} alt="" />
                <div className="content">
                  <h3>{item.title}</h3>
                  <div className="price">Rs. {item.price}/-</div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-center">
              <p className="heading">No Data</p>
            </div>
          )}
          <a href="#" className="btn">
          <Link to="/checkout" className="btn checkout-btn">
            Checkout Now
            </Link>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;


