import React , {Component} from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom'
import "aos/dist/aos.css";


class Home extends Component{

    constructor(props){

        super(props);
        this.state= {
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
                    autoplay:true
                },
            },
        }
    
    }



    render(){

        return( 

            <div className="home">

    
                <div className="slider">

                    
                <OwlCarousel 
                    items="1"
                    nav={false}
                    dots={false}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={3000}
                    >
                        <div className="item">
                            <div className="image">
                            <img src="/images/slider1.jpg"></img>
                            </div>
                            <div className="carousel-title" data-aos-delay="50">
                                <h2>The Best Women's <br/>Clothes Ever</h2>
                            </div> 
                    
                <div className="shop-link"data-aos-delay="50"  >
                    <Link exact to ="/shopping">SHOP NOW</Link>
                </div>
            
                        </div>
                        <div className="item">
                            <div className="image">
                            <img src="/images/slider2.jpg"></img>
                            </div>
                            <div className="carousel-title" data-aos-delay="50">
                            <h2>The Best Women's <br/>Clothes Ever</h2>
                            </div>
                    
                <div className="shop-link"data-aos-delay="50"  >
                    <Link exact to ="/shopping">SHOP NOW</Link>
                </div>
            
            

                        </div>
                    </OwlCarousel>

            
            </div>


        




        
    

        <div className="container">
            <div className="category-section">
                <h3 className="text-center mt-2 mb-5">OUR COLLECTIONS</h3>
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <div className="content">
                        <div className="category-image text-center" >
                            <img src="/images/model-collection.jpg"></img>
                        </div>
                        <div className="category-desc text-center my-3 " >
                            <h5 >Dresses Collection</h5>
                        </div>
                        <div className="category-link mt-4 mb-3  text-center">
                            < Link exact to ="/shopping" onClick={()=> window.scroll(0,0)}>SHOP NOW</Link>
                        </div>
                        </div>
                    </div>


                    <div className="col-md-4 col-12 mb-4">
                        <div className="content">
                        <div className="category-image text-center  " >
                            <img src="/images/model2.jpg"></img>
        
                        </div>

                        <div className="category-desc text-center my-3 " >
                            <h5 >Tops Collection</h5>
                        </div>
                        <div className="category-link mt-4 mb-3  text-center">
                            < Link exact to ="/shopping" onClick={()=> window.scroll(0,0)}>SHOP NOW</Link>
                        </div>


                        </div>
                    </div>

                    <div className="col-md-4 col-12 mb-4">
                        <div className="category-image text-center" >
                            <img src="/images/model3.jpg"></img>

                        </div>
                        <div className="category-desc text-center my-3 " >
                            <h5 >Jackets  Collection</h5>
                        </div>
                        <div className="category-link mt-4 mb-3  text-center">
                            < Link exact to ="/shopping" onClick={()=> window.scroll(0,0)}>SHOP NOW</Link>
                        </div>

                    </div>  


                </div>
            </div>
            </div>





            <div className="tranding-products mt-2 mb-5">
                <div className="container">
                <h3 className="text-center mb-5">TRENDING PRODUCRS</h3>
                <OwlCarousel  items="3.4" margin={10} loop={true}
                autoplayTimeout={1000} autoPlay={true} responsive={this.state.responsive} nav  dots={false} autoplayHoverPause={true}
                >
                    <div className="item">
                    <div className="carousel-item-image">
                    <img src="/images/product4.jpg"></img>
                </div>
                <div className="carousel-item-title my-3">
                    < h5 className="text-center"> Classical Dress</h5>
                </div>
                <div className="carousel-item-price">
                    <h6 className="text-center">$120</h6>
                </div>
                </div>



                <div className="item">


                <div className="carousel-item-image">
                    <img src="/images/trend.jpg"></img>
                </div>
                <div className="carousel-item-title my-3">
                    < h5 className="text-center">Summer Dress</h5>
                </div>
                <div className="carousel-item-price">
                    <h6 className="text-center">$190.5</h6>
                </div>
                </div>



                <div className="item">

                <div className="carousel-item-image">
                    <img src="/images/product7.jpg"></img>
                </div>
                <div className="carousel-item-title my-3">
                    < h5 className="text-center">Summer Dress</h5>
                </div>
                <div className="carousel-item-price">
                    <h6 className="text-center">$180</h6>
                </div>
                </div>


                <div className="item">

                <div className="carousel-item-image">
                    <img src="/images/product3.jpg"></img>
                </div>
                <div className="carousel-item-title my-3">
                    < h5 className="text-center">Top with sleeve </h5>
                </div>
                <div className="carousel-item-price">
                    <h6 className="text-center">$160</h6>
                </div>
                </div>


                <div className="item">

                <div className="carousel-item-image">
                    <img src="/images/product6.jpg"></img>
                </div>
                <div className="carousel-item-title my-3">
                    < h5 className="text-center"> Esprit Ruffle Top</h5>
                </div>
                <div className="carousel-item-price">
                    <h6 className="text-center">$50</h6>
                </div>
                </div>


        

                </OwlCarousel>




                <div className="show-button my-5 text-center">
                    <Link exact to ="/shopping" onClick={()=> window.scroll(0,0)}>SHOW MORE</Link>
                </div>




                </div> 

            </div>



            <div className="why-us-section ">
                <div className="container">
                <h3 className="text-center">WHY FASHIONISTA</h3>
                <p className="text-center">We believe in easy access to things that are good for our mind, body and spirit.<br/> With a clever offering, superb support and a secure checkout you’re in good hands.</p>

                <div className="row mt-4">
                    <div className="col-md-4 col-12 my-4">
                        <div className="why-us-icon text-center">
                        <i class="far fa-lightbulb"></i>
                        </div>
                        <div className="why-us-title text-center">
                            <h5 >Smart ideas</h5>
                        </div>
                        <div className="why-us-desc text-center">
                            <p>With dozens of intelligent concepts, you’ll find what you’re looking for in our store, and it will be unique and personalized to match.

                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 my-4">
                        <div className="why-us-icon text-center">
                        <i class="far fa-comments"></i>
                        </div>
                        <div className="why-us-title text-center">
                            <h5>Outstanding support</h5>
                        </div>
                        <div className="why-us-desc text-center">
                            <p>Our customer support is second to none – users rave about how we don’t rest until every issue is solved to their satisfaction.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 my-4">
                        <div className="why-us-icon text-center">
                        <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div className="why-us-title text-center">
                            <h5 >Secure checkout</h5>
                        </div>
                        <div className="why-us-desc text-center">
                            <p>With 128-bit SSL security with advanced encryption you are guaranteed that your purchases are safe.</p>
                        </div>
                    </div>




                </div>
                </div>
            </div>




            
            <div className="brands my-5" >
                <div className="container">
                    <h3 className="text-center my-5">OUR BRANDS</h3>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand1.jpg"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand2.jpg"></img>
                            </div>
                        </div>


                    
                    <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand3.jpg"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand4.jpg"></img>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand5.jpg"></img>
                            </div>
                        </div>


                    <div className="col-lg-2 col-md-4 col-12 my-5">
                            <div className="brand-image text-center">
                                <img src="/images/brand6.jpg"></img>
                            </div>
                        </div>


                        </div>
                </div>
            </div>

        </div>


            
        )
    }
}

export default Home;
