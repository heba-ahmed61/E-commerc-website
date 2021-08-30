import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) =>{

    const [click , setClick] = useState(false);
    const [scroll ,setScroll] = useState(false)

    const handelClick =()=>{
        setClick(!click)
    }

    const navbarScroll= ()=>{

    if (window.scrollY>=50){
        setScroll(true)
    }else{

        setScroll(false)
    }
    }


    



    return(
        
        <div className="nav">
            <div className="container ">
                <div className="nav-content">
                <div className="nav-logo">
                    <NavLink className="logo-link" exact to="/">FASHIONISTA</NavLink>
                </div>
                <div className={click ? "nav-links active": "nav-links"}>
                    <ul>
                        <li><NavLink activeClassName="active" exact to ="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" exact to ="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" exact to ="/shopping">Shopping</NavLink></li>
                        <li><NavLink activeClassName="active" exact to ="/contact">Contact</NavLink></li>

                    </ul>
                </div>
                <div className="cart-icon"  >
                    <NavLink to ="/cart">
                        <div className="product-count" > {props.count}</div>
                    <i className="fas fa-shopping-cart" ></i>
                    </NavLink>
                </div>

                <div className="nav-icon" onClick={handelClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>                
                </div>
                
            
                </div>

                
            </div>
    
        </div>
    )
}

export default Navbar;