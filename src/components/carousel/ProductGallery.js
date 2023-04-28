import React from "react";
import classes from "./ProductGallery.module.css";
import SliderComp from "./SliderComp";
const ProductGallery = () => {
  return (
    <div className={classes.productGalleryContainer}>
      <div className={classes.galleryContainer}>
        <SliderComp>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1100"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0267/1699/5754/articles/5-market-99-eco-friendly-products-for-sustainable-living-market-99.jpg?v=1678003246"
              alt="showcaseImage"
            />
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <img
              src="https://www.niir.org/blog/wp-content/uploads/2020/10/ecofriendly-products-1-638.jpg"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0267/1699/5754/articles/5-market-99-eco-friendly-products-for-sustainable-living-market-99.jpg?v=1678003246"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="800"
          >
            <img
              src="https://www.niir.org/blog/wp-content/uploads/2020/10/ecofriendly-products-1-638.jpg"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="700"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0267/1699/5754/articles/5-market-99-eco-friendly-products-for-sustainable-living-market-99.jpg?v=1678003246"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="600"
          >
            <img
              src="https://www.niir.org/blog/wp-content/uploads/2020/10/ecofriendly-products-1-638.jpg"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0267/1699/5754/articles/5-market-99-eco-friendly-products-for-sustainable-living-market-99.jpg?v=1678003246"
              alt="showcaseImage"
            ></img>
          </div>
        </SliderComp>
      </div>
    </div>
  );
};

export default ProductGallery;
