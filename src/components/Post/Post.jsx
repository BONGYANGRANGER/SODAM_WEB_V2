import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Post = ({ id, image, sellerName, productName, price }) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <div className={styles.postContainer}>
        <img src={image} alt={productName} className={styles.image} />
        <div className={styles.sellContainer}>
          <p className={styles.sellerName}>{sellerName}</p>
          <h3 className={styles.productName}>{productName}</h3>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
