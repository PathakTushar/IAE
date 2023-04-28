import React from "react";
import classes from "./ProductModal.module.css";
import Button from "../UI/Button";
import CloseIcon from "@mui/icons-material/Close";
const ProductModal = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.backdrop} onClick={props.onRemoveBackdrop}/>
      <div className={classes.productModalContainer} >
        <button className={classes.closeButton} onClick={props.onRemoveBackdrop}>
          <CloseIcon />
        </button>
        <div className={classes.modalImage}>
          <img
            src={props.image}
            alt="productImage"
          />
        </div>
        <div className={classes.modalContent}>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>{props.price}</p>
          <label htmlFor="set">Set of</label>
          <select className={classes.set} id='set'>
          {props.set.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className={classes.quantity} placeholder='quantity' id="quantity"/>
          <Button active={true}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

/*

  

            



      <div className={classes.cartModalContainer}>
      <div className={classes.modalImage}>
        <img src='https://static.wixstatic.com/media/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg/v1/fill/w_489,h_733,al_c,q_85,usm_0.66_1.00_0.01/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.webp' alt='productImage'/>
      </div>
      <div className={classes.modalContent}>
        <h1>
          Reusable Bamboo Straws
        </h1>
      </div>
    </div>
*/
