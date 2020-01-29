import React from 'react';
import './App.scss';
import HeaderComponent from './component/HeaderComponent';
import FilterComponent from './component/FilterComponent';
import SortComponent from './component/SortComponent';
import ShoppingListComponent from './component/ShoppingListComponent';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: "highestprice",
      filter:false,
      products: [],
      filtredProducts:[],
      count:0,
      open:true,
    };

    this.cartItems=[];
  }
  
  componentDidMount() {
     
    
   
    fetch('https://api.myjson.com/bins/qzuzi')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState(prevState =>({
          ...prevState,
          products: [...prevState.products,...result],
        }));
        this.sortProducts("highestprice");
      }).catch((error)=>{
        console.log("Network Error",error);
      });

  }

  //Add The Product List
  addProductsToCart = (product) => {
    if(this.cartItems.some(el => el.id === product.id)){
      return false;
    }

    product.count = 1;
    this.cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    
    
    this.setState(prevState =>({
      ...prevState,
      count: ++this.state.count,
    }));
    //console.log(this.cartItems);
  };

  //Sort The Products List
  sortProducts = (sortby) => {
     let productArray = this.state.filter?[...this.state.filtredProducts]:[...this.state.products]; // make a separate copy of the array
    
     //do the sorting using price and discount
     if(sortby === "highestprice" || sortby === "lowestprice"){
      productArray.sort((a, b) =>
        sortby === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
    }else{
      productArray.sort((a, b) =>
        sortby === "lowestdiscount"
            ? a.discount > b.discount
              ? 1
              : -1
            : a.discount < b.discount
            ? 1
            : -1
        );
    }

      this.setState(prevState =>({
        ...prevState,
        filtredProducts: productArray,
      }));
  };

  /**************Filter The Product List***********/
  filterProducts = (min,max) => {
    let productArray = [...this.state.products]; // make a separate copy of the array

    

    this.setState(prevState =>({
       ...prevState,
       filtredProducts: productArray.filter(
        a => a.price >= min && a.price <= max 
      ).sort((a, b) =>
      b.price > a.price
          ? 1
          : -1
       
    ),
      filter:true,
       
     }));
 };





  render(){
  return (
     <React.Fragment>
      <HeaderComponent productcount={this.state.count}></HeaderComponent>
      <section id="main">
          <div className="container">
            
            <FilterComponent filterProducts={this.filterProducts}></FilterComponent>
            <article id="main-col">
              <SortComponent sortProducts={this.sortProducts} filterProducts={this.filterProducts}></SortComponent>
              <ShoppingListComponent products={this.state.filtredProducts} addProductsToCart={this.addProductsToCart}></ShoppingListComponent>


            </article>
          </div>
        </section>
      </React.Fragment>

  );
  }
}

export default App;
