import React from 'react';





function ShoppingListComponent(props) {

 

  return (
    
      props.products.map(product => (
        <div className="box" key={product.id}>
          <img src={product.img_url}
           />
          <h5 className="nomargin text-left item-text1">{product.name}</h5>
          <p className="nomargin text-left item-text2"><b><i className="fa fa-inr"></i>{product.price} </b> {/* <span className="strip">416</span> */} <span className="offer">{product.discount}% Off</span></p>
          <p className="nomargin text-center item-text3"><button className="button" onClick={(e)=> props.addProductsToCart(product)}>Add to Cart</button></p>
        </div>
    ))

  );
}

export default ShoppingListComponent;
