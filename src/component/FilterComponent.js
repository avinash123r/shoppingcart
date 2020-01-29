import React from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';



class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 100, max: 1000 },
    };
  }

  //Filter the Products callBack Function
  filterProducts=function(){
   const {...range}= {...this.state};
   console.log(range);
   
   this.props.filterProducts(range.value.min,range.value.max);
  };

  render(){
  return (
    <aside id="sidebar" className="hide-sm">
          <div className="filtersidebar">
            <h3>Filters <span style={{fontSize:'11px'}}>(Price in RS)</span></h3>
            <p>
              <InputRange
              formatLabel={value => `${value}`}
              maxValue={1000}
              minValue={100}
              value={this.state.value}
              onChange={value => this.setState({ value })} /></p>
            <p className="text-center"><button className="button text-white" onClick={()=>this.filterProducts()}>Apply</button></p>
            
          </div>
      </aside>
    );
  }
}

export default FilterComponent;
