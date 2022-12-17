import React, { useState } from "react";
import classes from "./ProductDetailCard.module.css";
import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa";
const ProductDetailCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [onProduct, setOnProduct] = useState(false);
  function likeHandler() {
    setIsLiked((state) => !state);
  }
  let temp = isLiked ? "red" : "gray";
  return (
    <div
      className={classes.card}
      onMouseEnter={() => setOnProduct(true)}
      onMouseLeave={() => {
        setOnProduct(false);
      }}
    >
      <div style={{ position: "relative" }}>
        <img className={classes.img} src={props.img} alt={props.name} />
        {onProduct && (
          <div className={classes.view}>
            <p>View Product</p>
          </div>
        )}
        <span className={classes.wishlist} onClick={likeHandler}>
          <FaHeart size="18" style={{ color: temp }} />
        </span>
      </div>
      <div>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.name}>{props.price}</p>
        <p className={classes.name}>
          <Rating
            style={{ margin: "0" }}
            name="read-only"
            value={props.rating}
            readOnly
          />
        </p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
