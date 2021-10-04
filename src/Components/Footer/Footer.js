import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component{

    render(){

        return(

            <div className="footer ">
                <div className="subscrib-section pt-5">
                    <div className="container">
                        <div className="row subscribe-content">
                            <div className="col-lg-6 col-12 my-3 text-center">
                                <h5>Subscribe Newsletter</h5>
                                <p>Subscribe newsletter to get 5% on all products.</p>

                            </div>
                            <div className="col-lg-6 col-12 my-3 text-center">
                                    <form className="form">

                                    <input type="email" required placeholder=" Enter Your Email" className="email-input"/>
                                    <button type="submit" className="submit-btn">Subscribe</button>
                                    </form>
                                
                                
                            </div>
                        
                        </div>
                        <hr/>
                    </div>
                    
                </div>

                <div className="footer-details">
                    <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-4 col-12 text-center pb-3">
                            <h6 className="mb-4">About Us</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                        </div>

                        <div className="col-md-4 col-12 text-center footer-links pb-3">
                            <h6 className="mb-4">Quik Links</h6>
                            <div className="link"><Link exact to = "/" onClick={()=> window.scroll(0,0)}  >Home</Link></div>
                            <div className="link"><Link exact to = "/about" onClick={()=> window.scroll(0,0)}>About</Link></div>
                            <div className="link"><Link exact to = "/shopping" onClick={()=> window.scroll(0,0)}>Shopping</Link></div>
                            <div className="link"><Link exact to = "/contact" onClick={()=> window.scroll(0,0)}>Contact</Link></div>



                            
                        </div>
                        <div className="col-md-4 col-12 text-center footer-icons pb-3">
                        <h6 className="mb-4">Follow Us</h6>
                        <div ><i class="fab fa-facebook-f mx-2" ></i>
                        <i class="fab fa-twitter mx-2"></i>
                        <i class="fab fa-instagram mx-2"></i>
                        <i class="fab fa-linkedin-in mx-2"></i>
                        </div>
                    
                

                        

                    </div>

                    <hr/>

                    <div className="text-center py-4">
                            <h6>All Copyrights &copy; Reseved To Fashionista 2021  </h6>
                        </div>
                    

                </div>
                </div>
            </div>
            </div>

        )
    }
}

export default Footer;
