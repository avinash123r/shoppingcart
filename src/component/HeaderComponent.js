import React from 'react';
import {Link} from 'react-router-dom';


function HeaderComponent(props) {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><Link to="/"><i className="fa fa-star"></i></Link></h1>
        </div>
        <nav>
          <ul>
            <li><i className="fa fa-search"></i></li>
            <li ><Link to="/cart"><i className="fa fa-shopping-cart badge1" data-badge={props.productcount} ></i></Link></li>

            
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
