import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import CartIconComponent from './component/CartIconComponent';


import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';


const routing = (
  <Router>
  	<Switch>
    
      <Route exact  path="/" component={App} />
      <Route   path="/cart" component={CartIconComponent} />
     </Switch>
      
    
  </Router>
);

ReactDOM.render(
	routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
