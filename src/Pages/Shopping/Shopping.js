import React , {Component} from 'react';
import './Shopping.css';
import Filter from '../../Components/Filter/Filter';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
import {Link} from'react-router-dom'





class Shopping extends Component{

    

    constructor(props){

        super(props);
        this.state={

            product:null
        }
    }

    openModal=(product)=>{

        this.setState({

            product
        })
    }
    closeModal=()=>{

        this.setState({
            product:null
        })
    }

    

    

    

    render(){

        const {product} = this.state


        const {products } = this.props;
        const productList = products.map(product => {

            return(

                <Fade bottom cascade>
                
                <div className=" col-lg-3 col-md-4 col-12 mb-4 mt-4 " key={product.id}>
                    <div className="product-details">
                    <div className="product-image">
                        <img src ={product.image}/>
                    </div>
                    <div className="product-title text-center mt-2">
                        <p>{product.title}</p>
                    </div>
                    <div className="product-price text-center">
                        <p> <span>$</span>{product.price}</p>
                    </div>
                    <div className="product-buttons text-center">
                        <Link to="/cart">
                        <button className="cart-button" onClick={()=>this.props.addToCart(product)}>Add To Cart</button>
                        </Link>
                        <button className="view-button" onClick={()=>this.openModal(product)}>View</button>
                    </div>
                
                    </div>

                    
                </div>
                </Fade>
            )
        })


    

        return(


        
            <div className="products mb-5">
                <div className="wrapper">
                    <Filter productsCount={this.props.count}  products={this.props.products} category={this.props.category}

                    filterCategory={this.props.filterCategory}
                    size={this.props.size}
                    filterSize={this.props.filterSize}
                    brandProducts={this.props.brandProducts}
                
                    

                    />
                    
                    
                    <div className="row">
                
                    {productList}

                    </div>

                    
                <div className="load-more-button text-center">
                    <Link exact to ="/shopping" >LOAD MORE</Link>
                </div>

                </div>

                {product && <Modal isOpen={true} onRequestClose={this.closeModal}
                >

                    <Zoom>

                        <div onClick={this.closeModal} className="close-button">x</div>

                        <div className="modal-content">
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-12">
                            <div className="modal-image">
                                <img src ={product.image}/>
                            </div>
                            </div>

                            <div className="col-md-8 col-12 mt-2">
                                <div className="modalProduct-details">
                                    <p>{product.title}</p>
                                    <p className="desc">{product.description}</p>
                                    <p className="price"> Price : <span>$</span>{product.price}</p>
                                    <p className="brand"> Brand : {product.brand}</p>
                                    <p className="availableSizes"> Available Sizes :  {product.availableSizes.map(x=>{

                                        return(
                                            <span> {""}<button>{x} {""}</button></span>
                                        )
                                    })}</p>
                                    
                                    <div className="cart ">
                                        
                                        <button className="cart-button cart-button-modal" onClick={()=>{this.props.addToCart(product); 

                                        this.closeModal()
                                        
                                    }
                                        }>Add To Cart</button>
                                    
                                    
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                        </div>

                        



                    </Zoom>
                    
                    
                    </Modal>}



                
                


                
                

            </div>
            
        
            
        )
    }
    
}

export default Shopping;