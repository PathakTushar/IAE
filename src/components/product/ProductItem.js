import { useState } from "react";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classes.productItem}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-duration="1100"
    >
      <img
        src={!hover ? props.image : props.hoverImage}
        alt="products"
        className={classes.productImage}
      />
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{props.price}</p>
      <p className={classes.hoverDesc}>Quick View</p>
    </div>
  );
};
export default ProductItem;
