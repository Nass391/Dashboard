import React from "react";
import { useSelector } from "react-redux";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductComponent = () => {
    const products = useSelector ((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price} = product;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return ( 
            <div>
            {/* <h8 className="title-Product">
                MY SHOP
            </h8> */}
                <div key={id} className="slider">
                    <div className="title-Product">{title}</div>
                    <div className="price-Product">{price} $</div>
                    <div>
                    <img className="image-product" src={image} alt={title}/>
                    </div>                      
                </div> 
                </div>
               );  
    })
    return (
        
        <AwesomeSlider>
            {renderList}
        </AwesomeSlider>
    );
};

export default ProductComponent ;
