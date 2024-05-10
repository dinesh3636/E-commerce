import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplsy-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdispaly-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="oldprice">
                    ${product.old_price}
                </div>
                <div className="newprice">
                ${product.old_price}
                </div>
            </div>
            <div className="product-display-right-description">
            
            </div>
            <div className="productdiplsy-right-size">
                <h1>Select size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="productdisplay-right-categorey">
                <span>Categorey :</span> Women, T-Shirt, Crop Top
            </div>
            <div className="productdisplay-right-categorey">
                <span>Tags :</span> Mordern, Latest
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
