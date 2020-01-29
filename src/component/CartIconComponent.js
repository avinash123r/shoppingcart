import React from 'react';
import HeaderComponent from './HeaderComponent';
import '../App.scss';



class CartIconComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cartItems:  JSON.parse(localStorage.getItem("cartItems")),
    };
    
  }

 /*********Increment the Products Size************/
 incrementProductSize=function(product){
   this.state.cartItems.forEach(cp => {
    if (cp.id === product.id) {
      cp.count += 1;
    }
  });

   this.setState((prevState)=>({
     ...prevState,
     cartItems: prevState.cartItems,

   }));
 };

 /*********Decrements the Products Size************/
 decrementProductSize=function(product){
    this.state.cartItems.forEach(cp => {
    if (cp.id === product.id) {
      cp.count -= 1;
    }
  });

    this.setState((prevState)=>({
      ...prevState,
      cartItems: prevState.cartItems,

    }));
};

/**************Remove the Product From CartList */

removeProduct=function(product){
  let productArray = [...this.state.cartItems]; // make a separate copy of the array
  let index = productArray.indexOf(product);
  if (index !== -1) {
    productArray.splice(index, 1);

    //remove the product data form local Storage
    let storageData=[...JSON.parse(localStorage.getItem("cartItems"))];
    storageData.splice(storageData.findIndex(x=> x.id === product.id), 1);
   
     //Set the Updated Arrya Data
    localStorage.setItem('cartItems',JSON.stringify(storageData));
    console.log("local Storage",localStorage.getItem("cartItems"));

  };

  this.setState(prevState => ({
    ...prevState,
    cartItems: productArray,
   
  }));
};
  
  
  render(){
  
  
  let TotalPrice= this.state.cartItems.reduce((a, c) => (a + c.price * c.count), 0); //calculatete the total product price
  let discountPrice= this.state.cartItems.reduce((a, c) => (a + (c.discount * c.price/100) * c.count), 0); //calculate the total Discount Price
  let payablePrice=TotalPrice-discountPrice; // Calculate the Total Payabe
  let ItemCount=this.state.cartItems.reduce((a, c) => (a + c.count), 0);

  return (
    <React.Fragment>
    <HeaderComponent></HeaderComponent>

    
    <section id="main">
      <div className="container">
        

        <article id="cart-col">
          
          <ul id="item-lists">
            {  this.state.cartItems.map((product,index)=>(
                <li key={product.id}>
                  <div className="flex-container">
                    <div style={{flexDirection: 'row',display:'flex'}}>

                      <div style={{width:'100px',width: '85px',
    padding: '6px'}}> <img src={product.img_url} className="img" /></div>
                      <div className="item-detail">
                        <h4>{product.name}</h4>
                        <h5><i className="fa fa-inr"></i>{product.price} <span className="offer">{product.discount}% Off</span></h5>
                      </div>
                    </div>
                    <div className="product-counter">
                      <h5><i className="fa fa-minus-circle icon-color" onClick={()=> this.decrementProductSize(product)}></i></h5>
                      <h5><input type="text" className="qty" value={product.count} /></h5>
                      <h5><i className="fa fa-plus-circle icon-color" onClick={()=> this.incrementProductSize(product)}></i></h5>

                        
                    </div>
                    <h5>
                      <a href="javascript:void(0)" onClick={()=>this.removeProduct(product)}>REMOVE</a>
                    </h5>
                  </div>
                </li>

              ))
            
            }
            

            
          </ul>
        </article>

          <aside id="sidebarright">
            <div className="pricedetail">
              <h5 className="nomargin">PRICE DETAILS</h5>
              <hr/>
              <div className="totals">
                <div className="totals-item">
                  <label>Price ({ItemCount} Item): </label>
                  <div className="totals-value" id="cart-subtotal" style={{display: 'block'}}><i className="fa fa-inr"></i>{TotalPrice}</div>
                </div>
             
                <div className="totals-item">
                  <label>Discount : </label>
                  <div className="totals-value" id="cart-subtotal" style={{display: 'block'}}><i className="fa fa-inr"></i>{discountPrice}</div>
                </div>
              </div>
              

              <div className="total-payable">
                <div>Total Payable</div>
                <div><i className="fa fa-inr"></i>{payablePrice}</div>
            </div>

                 


              


              
              
            </div>
            
          
        </aside>
         
        
      </div>
    </section>
  
    </React.Fragment>
  );
}
}

export default CartIconComponent;
