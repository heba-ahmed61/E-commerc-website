import React from 'react';
import { Component } from 'react';
import './Filter.css';

class Filter extends Component{

    

    render(){

        const {products } = this.props;

        return(
            <div className="filter mb-4">
                <div className="col-12">
                    <h4>{this.props.productsCount} {""}products</h4>
                    <hr/>
                </div>
                <div className="filter-section ">
                <div className="row align-items-center">
                    <div className="col-md-4 col-12 my-2 category-filter ">
                        <div>Category {""}
                        <select value={this.props.category} onChange={  this.props.filterCategory}>
                            <option className="option" value="">All</option>
                            <option className="option" value = "Tops">Tops</option>
                            <option className="option" value = "Jackets">Jackets</option>
                            <option className="option" value = "Dresses">Dresses</option>
                        </select>
                        </div>
                    
                    </div>

                    <div className="col-md-4 col-12 my-2  size-filter ">

                    <div>Size filter {""}
                        <select value={this.props.size} onChange={this.props.filterSize} >
                            <option className="option"  value="">All</option>
                            <option className="option" value = "SM">SM</option>
                            <option className="option" value = "M">M</option>
                            <option className="option"  value = "L">L</option>
                            <option className="option" value = "XL">XL</option>

                        </select>
                        </div>
                    


                    </div>
                    
                
                    <div className="col-md-4 col-12 my-2  brand-filter ">

                        
                    <div> Brand filter {""}
                        <select value={this.props.brand} onChange={this.props.brandProducts} >
                        <option value="">All</option>

                            <option className="option" value="zara">Zara</option>
                            <option className="option" value = "bershka">Bershka</option>
                            <option className="option" value = "asos">Asos</option>

                            
                        </select>
                        </div>


                    </div>


                </div>
                </div>
            </div>
        )
    }
}

export default Filter;