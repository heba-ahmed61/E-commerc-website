import React from 'react';
import { Component } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Cart extends Component{

    constructor(props){

        super(props);
        this.state={

            showForm:false,
            responsive:{
                0: {
                    items: 2.5,
                    nav:false,
                    autoplay:true
                },
                450: {
                    items: 2.5,
                    nav:false,
                    autoplay:true

                },
                600: {
                    items: 2.5,
                    nav:false,
                    autoplay:true

                },
                1000: {
                    items: 3.4,
                    autoplay:false
                },
            },
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createOrder=(e)=>{

        e.preventDefault();
        const order ={

            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        };

        this.props.createOrder(order)

    }




    


    render(){

        const {cartItems}=this.props;
        const cartItemsList=cartItems.map(item =>{

            return(
                <Fade left>
                <div className="cart-products mt-4 mb-5" key={item.key}>
                    <div className=" row ">
                        <div className="col-md-3 col-5 ">
                            <div className="item-image">
                                <img src={item.image} className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-9 col-7  align-items-center">
                            <div className="row">
                                <div className="col-md-9 col-8">
                                    <p className="title">{item.title}</p>
                                    <p className="price"><span>$</span>{item.price}</p>
                                </div>
                                <div className="col-md-3 col-4">
                                    <div className="remove-button">
                                        <button onClick={()=> this.props.deleteProduct(item)}>x</button>
                                    
                                    </div>
                                </div>

                            </div>
                            <hr/>
                            <div className="product-quantity">
                                <div className="row">
                                    <div className="col-md-9 col-6">
                                        <p className="quantity">Quantity :</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <button className="increment-btn" onClick={()=> this.props.decrement(item)}>-</button>
                                        <span className="countNumber"> {item.count}</span>
                                        <button className="decrement-btn" onClick={()=> this.props.increment(item)}>+</button>
                                        
                                            
                                        
                                            
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                        


                    <hr/>
                </div>
                </Fade>
                
            )
        })

        return(
            
            <div className="cart-products">
                <p>{ cartItems.length == 0 ?
                <div className="cartTitle ">
                    <div className="container" style={{height:"90vh"}} >

                

                    <div className="bag-icon text-center my-5">
                    <i class="fas fa-shopping-bag "></i>
                    </div>
                <p className="text-center my-5 "> Your Cart Is Empty</p >
                <p className="text-center my-5"><Link exact to ="/shopping">Shop Now</Link></p>
                
                </div>
                </div>

                :


                
                <p></p>}</p>
                <div className="container">
                    {cartItems.length !==0 && <div className="back-btn">
                        <Link to ="/shopping">
                        <button className="back mt-3 mb-4">Back To Shopping</button>
                        </Link>
                        
                        </div>}
                    <div className="product-list">
                        {cartItemsList}

                    </div>
                    {
                        cartItems.length !==0 &&

                        <div className="total text-center mt-2 mb-5">Total : {""}
                        <span><span>$</span>{cartItems.reduce((a,c) => a+c.price* c.count ,0)}</span>
                        <div className="proceed-btn my-5">
                        <button  onClick={()=>this.setState({showForm:true})}>proceed</button>
                        </div>

                        </div>
                        

                    }

                    {
                        this.state.showForm &&  cartItems.length != 0 ? 
                            (
                            <div className="cart-form text-center  my-4">
                                <Fade right >
                                <form onSubmit={this.createOrder}>
                                    <div className="formName mb-3">
                                        <input type ="text" placeholder="Enter Name" required name="name" onChange={this.handleInput}/>
                                    </div>
                                    <div className="formEmail mb-3">
                                        <input type="email" required placeholder="Enter Email" name="email" onChange={this.handleInput}/>
                                        
                                        
                                    </div>
                                    <div className="formAddress mb-3">
                                        <input type="text" placeholder="Enter Address" required name="address" onChange={this.handleInput}/>
                                    </div>
                                    <div className=" formButton text-center">
                                        <button type="submit">Checkout</button>
                                    </div>
                                </form>
                                </Fade>
                            </div>) :(<div></div>)
                    
                            

                    }
                

                
                </div>
            </div>
        )
    }
}
export default Cart;
