import React from 'react';
import Modal from 'react-responsive-modal';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class SortComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      sortopen:false,
      filteropen:false,
      value: { min: 100, max: 1000 },
      selectedOption:'highestprice'
    };
  }

  componentDidMount() {
    //set the event listner
    window.addEventListener("resize", this.updateDimensions);
  }

 
  //handling popup window open and close operation
  onOpenSortModal = () => {
    this.setState({ sortopen: true });
  };
  
  onCloseSortModal = () => {
    this.setState({ sortopen: false });
  };

  onOpenFilterModal = () => {
    this.setState({ filteropen: true });
  };
  
  onCloseFilterModal = () => {
    this.setState({ filteropen: false });
  };

  //handle sorting options
  handleSorting=()=>{
    this.setState({ sortopen: false });
    this.props.sortProducts(this.state.selectedOption);
  };

  //Handle Filtering options
  handleFiltering=()=>{
    const {...range}= {...this.state};
    this.setState({ filteropen: false });
    this.props.filterProducts(range.value.min,range.value.max);
  };

  //handle radio button onchange operation 
  handleOptionChange= (changeEvent)=> {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };

  //update the window when screen size greater than 768
  updateDimensions=()=> {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    
    
    if(windowWidth > 768 && (this.state.filteropen == true || this.state.sortopen == true)){
      this.setState({ filteropen:false,sortopen:false });
    }
  };

  //umnount the event listener
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

render() {
    return (
      <React.Fragment>
      <div className="hide-md">
          <div className="filter-main ">
            <div className="filter-first" onClick={this.onOpenSortModal}>SORT</div>
            <div className="filter-second" onClick={this.onOpenFilterModal}>FILTER</div>
          </div>
        </div>
        
        <div id="sortby" className="hide-sm">
          <ul>
            <li><span>Sort By</span></li>
              <li className="current"><a href="javascript:void(0)" onClick={()=> this.props.sortProducts("highestprice")}>Price--High Low</a></li>
              <li className="current"><a href="javascript:void(0)" onClick={()=> this.props.sortProducts("lowestprice")}>Price--Low High</a></li>
              <li className="current"><a  href="javascript:void(0)" onClick={()=> this.props.sortProducts("highestdiscount")}>Discount</a></li>
            
          </ul>
        </div>
       
        <Modal open={this.state.sortopen} onClose={this.onCloseSortModal} top showCloseIcon={false}>
          <div id="modalHeader">
            <h5 className="nomargin">Sort Options</h5>
          </div>
          <div id="modalContent">
            <ul>
              <li>
                <label className="radiobox-container">Price--High Low
                <input type="radio" value="highestprice" checked={this.state.selectedOption === 'highestprice'} onChange={this.handleOptionChange}/>
                <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="radiobox-container">Price--Low High
                <input type="radio" value="lowestprice" checked={this.state.selectedOption === 'lowestprice'} onChange={this.handleOptionChange}/>
                <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="radiobox-container">Discount
                <input type="radio" value="highestdiscount" checked={this.state.selectedOption === 'highestdiscount'} onChange={this.handleOptionChange}/>
                <span className="checkmark"></span>
                </label>
              </li>
              
            </ul>
          </div>
          <div id="modalFooter">
              <div className="button1" onClick={this.onCloseSortModal}>Cancel</div>
              <div className="button2" onClick={this.handleSorting}>Apply</div>
          
          </div>
          
        </Modal>
        <Modal open={this.state.filteropen} onClose={this.onCloseFilterModal} top showCloseIcon={false}>
          <div id="modalHeader">
            <h5 className="nomargin">Filter Options <span style={{fontSize:'11px'}}>(Price range in RS)</span></h5>
          </div>
          <div id="modalContent" style={{padding: '30px'}}>
          <InputRange
              maxValue={1000}
              minValue={100}
              value={this.state.value}
              onChange={value => this.setState({ value })}
              style={{padding:'25px'}}
              />
          </div>
          <div id="modalFooter">
              <div className="button1" onClick={this.onCloseFilterModal}>Cancel</div>
              <div className="button2" onClick={this.handleFiltering}>Apply</div>
          
          </div>
          
        </Modal>
      </React.Fragment>
    );
  }
}

export default SortComponent;
