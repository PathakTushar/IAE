import classes from "./ProductContainer.module.css";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";
import { useState } from "react";
import ProductModal from "../productOverlay/ProductModal";
const ProductContainer = (props) => {
  const [showModal, setShowModal] = useState(false);

  const removeBackdrop = () => {
    setShowModal(false);
  };
  return (
    <div className={classes.productContainer}>
      {showModal && (
        <ProductModal
          image={props.image}
          description={props.description}
          price={props.price}
          set={[1, 4, 10]}
          onRemoveBackdrop={removeBackdrop}
        />
      )}
      <ProductItem
        image={props.image}
        hoverImage={props.hoverImage}
        description={props.description}
        price={props.price}
      />
      <Button
        active={props.active}
        onClick={() => {
          setShowModal(true);
        }}
      >
        {props.active ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
};
export default ProductContainer;
