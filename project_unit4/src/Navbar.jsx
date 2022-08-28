import React from "react";
import "./App.css";
export default function Navbar(){
    return (
        <>
        <div id="navbar">
            
            <div id="nav">
            <p>Shop</p>
            <p>Fetured</p>
            <p>Best Seller</p>
            <p>Our story</p>
            <p>Perks Program</p>
            <p>Become a consultant</p>
            <p>Blog</p>
            
            </div>
            <div id="input">
            <input id="search" type="text" placeholder="product"/>
            </div>
            <p id="signin">Signin</p>
            <div id="cart">
            <img id="cart_img" src="https://cdn1.iconfinder.com/data/icons/e-commerce-320/512/bag-512.png" alt="cart"/>   
            </div>
            
            
        </div>
        <hr></hr>
        
        </>
    )
}
