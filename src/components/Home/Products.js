
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../feature/CartSlice"; 

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [favorites, setFavorites] = useState([]); 
  const dispatch = useDispatch();

 
  const cartItems = useSelector((state) => state.allCart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

 
  const products = [
    {
      id: 1,
      title: "Fresh Coffee", 
      img: require("../../assets/images/coffee.png"),
      price: 89.99,
    },
    {
      id: 2,
      title: "Green Tea", 
      img: require("../../assets/images/greentea.png"),
      price: 79.99,
    },
    {
      id: 3,
      title: "Chocolate Muffin", 
      img: require("../../assets/images/product4.png"),
      price: 49.99,
    },
  ];
  

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    
  };

  
  const handleViewProduct = (product) => {
    setSelectedProduct(product); 
  };

  
  const handleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId) 
        : [...prev, productId] 
    );
  };

  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {products.map((item) => (
            <div className="box" key={item.id}>
              <div className="icons">
                <a
                  
                  className="fas fa-shopping-cart"
                  onClick={() => dispatch(addToCart(item))}
                ></a>
                <a
                  
                  className={`fas fa-heart ${
                    favorites.includes(item.id) ? "favorite" : ""
                  }`}
                  onClick={() => handleFavorite(item.id)}
                ></a>
                <a
                  
                  className="fas fa-eye"
                  onClick={() => handleViewProduct(item)}
                ></a>
              </div>
              <div className="image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <div className="price">
                  Rs.{item.price.toFixed(2)}{" "}
                  <span>Rs.{(item.price + 10).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Viewing Product */}
{selectedProduct && (
  <div className="modal">
    <div className="modal-content">
      <span
        className="close"
        onClick={() => setSelectedProduct(null)} 
      >
        &times;
      </span>
      <img
        src={selectedProduct.img}
        alt={selectedProduct.name}
        className="modal-image"
      />
      <h2>{selectedProduct.name}</h2>
      <p className="modal-price">Price: Rs. {selectedProduct.price.toFixed(2)}</p>
      <p className="modal-description">
        This is a high-quality {selectedProduct.name} made with the finest
        ingredients. Perfect for enjoying your day .
      </p>
      <button className="btn-add-to-cart" onClick={() => dispatch(addToCart(selectedProduct))}>Add to Cart</button>
    </div>
  </div>
)}

{/* Style for Modal and Enlarged Elements */}
<style>
  {`
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1000;
    }
    .modal-content {
      background: white;
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      width: 60%; /* Increase width for larger modal */
      max-width: 800px;
      position: relative;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .modal-image {
      width: 300px;
      height: auto;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 28px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
    }
    .close:hover {
      color: red;
    }
    h2 {
      font-size: 24px;
      margin: 15px 0;
    }
    .modal-price {
      font-size: 20px;
      font-weight: bold;
      color: #ffc107;
      margin-bottom: 10px;
    }
    .modal-description {
      font-size: 16px;
      line-height: 1.5;
      color: #555;
      margin-bottom: 20px;
    }
    .btn-add-to-cart {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #ffc107;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .btn-add-to-cart:hover {
      background-color:  #ffd700;
    }
  `}
</style>

    </>
  );
};

export default Products;



