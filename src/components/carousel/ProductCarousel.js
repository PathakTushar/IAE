import React from "react";
import classes from "./ProductCarousel.module.css";
import SliderComp from "./SliderComp";
import ProductItem from "../product/ProductItem";
const ProductCarousel = () => {
  return (
    <div className={classes.productCarousel}>
      <div className={classes.container}>
        <SliderComp>
          <ProductItem
            image="https://static.wixstatic.com/media/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
            description="plant based reusable cups"
            price="$2.5"
          />

          <ProductItem
            image="https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg"
            description="Sustainability Starter Kit"
            price="$10.99"
          />

          <ProductItem
            image="https://static.wixstatic.com/media/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg"
            description="Reusable Bamboo Straws"
            price="$1.99"
          />

          <ProductItem
            image="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg"
            description="Natural Bamboo Loofah"
            price="$2.99"
          />

          <ProductItem
            image="https://static.wixstatic.com/media/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg"
            description="Bamboo Toothbrush (set of 2)"
            price="$3.59"
          />

          <ProductItem
            image="https://static.wixstatic.com/media/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.jpg"
            hoverImage="https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg"
            description="Plant Based Reusable Containers"
            price="$2.99"
          />
        </SliderComp>
      </div>
    </div>
  );
};

export default ProductCarousel;
