import React, { useContext } from 'react';
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItem = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cartitem '>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
    // Check if the quantity is greater than 0
    if (cartItems[e.id] > 0) {
        return (
            <div key={e.id}>
                <div className="cartitem-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>₹{e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>₹{e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
            </div>
        );
    }
    // If quantity is 0 or less, don't render anything for this product
    return null;
})}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>

            <div>
                <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Sgipping Fee</p>
                    <p>Fee</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CartItem;
