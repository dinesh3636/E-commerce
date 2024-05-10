import React, { useState } from 'react'
import "./AddProduct.css"
import upload from "../../assets/upload_area.svg"
import axios from "axios";
const AddProduct = () => {
    const [image, setImage]= useState(false);


    const imageHandler=(e)=>{
       const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(file);
                setProductDetails({
                    ...productDetails,
                    image: reader.result.split(',')[1], 
                });
            };
            reader.readAsDataURL(file);
        }
        
    }
    const [productDetails, setProductDetails]= useState({
        name:'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''
    })
    const changeHandler = (e)=> {
        setProductDetails({...productDetails, [e.target.name]:e.target.value, 
        })
    }
    const Add_Product = async()=>{


        let product = productDetails;
        console.log(product);
        let formdata = new FormData();
        formdata.append('product', image);
        await fetch('http://localhost:4000/upload',{
            method: 'POST',
            headers:{
                Accept: 'application/json'
            },
            body: formdata,
        }).then
        try{
            const response = await axios.post('http://localhost:4000/addproduct', productDetails);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }


    }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input type="text" value={productDetails.name} onChange={changeHandler} name='name' placeholder='Type here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
            </div>

            <div className="addproduct-itemfield">
                <p> Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector' id="">
                <option value="women">Women </option>
                <option value="men">Men </option>
                <option value="kid">Kid </option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image? URL.createObjectURL(image) :upload} className='addproduct-thumbail' alt="" />
                </label>
                <input  type="file" name='image' id='file-input' hidden/>
            </div>
            <button onClick={Add_Product} className='addproduct-button'> ADD </button>
    </div>
  )
}

export default AddProduct
