import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "font-awesome/css/font-awesome.min.css";
import { FaStar } from "react-icons/fa";
import ProductDelivery from "../components/images/ProductDelivery.png";
import './Page3.css';

function ProductDetails() {
  const { state } = useLocation();
  const ring = state?.ring || {};

  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [currentImage, setCurrentImage] = useState(ring.image || "");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const swiperRef = useRef(null);

  // Array of images for the carousel
  const images = [
    ring.image || "https://images.unsplash.com/photo-1721804975881-1768e59f46cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    // Add more images if needed
  ];

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);

  const handleClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handleReviewSubmit = () => {
    console.log("Review submitted:", reviewText);
    setReviewText("");
  };

  return (
    <section className="product-details">
      <div className="product-image">
        <div
          className="image-placeholder"
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
        >
          <i
            className={isHeartFilled ? "fa fa-heart" : "fa fa-heart-o"}
            style={{
              fontSize: "37px",
              color: isHeartFilled ? "white" : "inherit",
            }}
            onClick={handleClick}
          ></i>
        </div>

        <div className="image">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index}`}
              className="Delivery"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        <div className="Delivery">
          <img src={ProductDelivery} alt="Product Delivery" />
        </div>
        <div className="Reviews">
          <h3>Customer Review :</h3>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />
                <FaStar
                  className="star"
                  size={30}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here"
            rows="4"
            cols="50"
            style={{ width: "100%", marginTop: "10px" }}
          ></textarea>
          <button
            onClick={handleReviewSubmit}
            className="s_review"
            style={{
              marginTop: "10px",
              backgroundColor: "#d3d3d3",
              color: "black",
              fontFamily: "Michroma, sans-serif",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Submit Review
          </button>
        </div>
      </div>

      <div className="Product">
        <div className="product-info">
          <h1>{ring.name || "Product Name"}</h1>
          <p>By DJC Jeweller | Product Code: OOZER00117MM-FXY20</p>
          <p className="ring">GOLD RING</p>
          <p>M.R.P.: ₹{ring.price || "Price"} (Inclusive of all taxes)</p>
          <p>
            SIZE:{" "}
            <select>
              <option>Select Size</option>
            </select>
          </p>
          <button className="Add">Add To Cart</button>
          <button className="Buy">Buy Now</button>
        </div>
        <div className="Productdetails">
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
