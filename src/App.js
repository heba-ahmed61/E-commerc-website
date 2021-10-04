import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter ,Switch, Route} from "react-router-dom";
import Shopping from './Pages/Shopping/Shopping';
import Home from './Pages/Home/Home';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './db.json';
import Cart from './Pages/Cart/Cart';
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';



class App extends Component{

  constructor(props){

    super(props);
    this.state = {

        products:data.products,
        category:"",
        size:"",
        brand:"",
        count:"",
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],

        
}
  }




  /* filter product by category function starts */

  
  filterCategory=(e)=>{

    if(e.target.value === ""){

      this.setState((state)=>({
        category:e.target.value,
        products:data.products
      }))
    } else

    this.setState((state)=>({

      
      category:e.target.value,
      products :data.products.filter(product => product.category === (e.target.value))
    
    }))
  

    
  }

    /* handelCategory function ends */





/* filter products by size function starts */
filterSize = (e)=>{

  if(e.target.value===""){

    this.setState((state)=>({

      size:e.target.value,
      products:data.products


    }))

  
  }else {

    this.setState((state)=>({

      size:e.target.value,
      products:data.products.slice().filter(product => product.availableSizes.indexOf(e.target.value)>=0),
      

    }))
  }
}

/* filter products by size function ends */




/* filter products by brands function starts*/
  brandProducts = (e)=>{

    if(e.target.value === ""){

      this.setState((state)=>({
        category:e.target.value,
        products:data.products
      }))
    } else


    this.setState({

      brand:e.target.value,
      products:data.products.filter(product => product.brand ===(e.target.value))

    })
  }

  /* filter products by brands function ends*/




  /*add to cart function starts */

  addToCart=(product)=>{


    const cartItems= this.state.cartItems;
    let alreadyInCart=false
    cartItems.forEach(item =>{

      if(item.id === product.id){

        item.count++;
        alreadyInCart=true
      
        
      }
    });
    if(!alreadyInCart){

      cartItems.push({...product , count:1})
    }
    this.setState({
      cartItems
    })
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))


  }

    /*add to cart function ends */



  /* increment quantity of product functuion starts*/
  increment=(item)=>{
    item.count = item.count+1
    if (item.count>=0){
    this.setState({

      count:item.count
    })
    }
    
  

  }

    /* increment quantity of product functuion ends*/


    /* decrement quantity of product functuion starts*/

  decrement=(item)=>{

    item.count = item.count-1
    
    if(item.count>=0){
      this.setState({

        count:item.count
      })

    }
    
  }
      /* decrement quantity of product functuion ends*/


  


  /* delete produvt from cart function starts*/
  deleteProduct =(item)=>{
    
    const cartItems = this.state.cartItems.filter(x => x.id !== item.id)
  
    this.setState({
      cartItems
    


    })
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    
  }

    /* delete produvt from cart function ends*/


  

  createOrder =(order)=>{

    alert("Successful order , Thank you "  +  order.name)
  }






  


  
  

    
  


  

  render(){
  return (

  

    <div className="app">


    <BrowserRouter>
        <Navbar  />
        <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route  path="/about"><About/></Route>
        <Route path="/shopping">
          <Shopping products={this.state.products} count={this.state.products.length} category={this.state.category}
        filterCategory={this.filterCategory} 
        size ={this.state.size}
        filterSize={this.filterSize}
        filterSizes={this.state.filterSizes}
        brandProducts={this.brandProducts}
        addToCart={this.addToCart}
        createOrder={this.createOrder}
        />
        </Route>
        <Route path="/contact"><Contact/></Route>
        <Route path ="/cart">
          <Cart cartItems={this.state.cartItems}
          addToCart={this.addToCart}
          deleteProduct={this.deleteProduct}
          count={this.state.products.length}
          increment={this.increment}
          decrement={this.decrement}
          createOrder={this.createOrder}
          
        

        
          
          />
        </Route>
        </Switch>
        <Footer/>
        
        </BrowserRouter>
        
    </div>
    


      

      
    
  );
  



  }

  
      

}

export default App;
;
