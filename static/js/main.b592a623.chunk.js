(this.webpackJsonpopencart=this.webpackJsonpopencart||[]).push([[0],{28:function(e,t,a){},36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(41),a(8)),o=a(4),s=a(9),m=a(10),u=a(12),d=a(11),p=a(13),h=(a(28),a(17));var f=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"branding"},r.a.createElement("h1",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("i",{className:"fa fa-star"})))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/cart"},r.a.createElement("i",{className:"fa fa-shopping-cart badge1","data-badge":e.productcount})))))))},E=a(2),v=a(20),b=a.n(v),g=(a(31),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).filterProducts=function(){var e=Object(o.a)({},this.state),t=Object(E.a)({},e);console.log(t),this.props.filterProducts(t.value.min,t.value.max)},a.state={value:{min:100,max:1e3}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("aside",{id:"sidebar",className:"hide-sm"},r.a.createElement("div",{className:"filtersidebar"},r.a.createElement("h3",null,"Filters ",r.a.createElement("span",{style:{fontSize:"11px"}},"(Price in RS)")),r.a.createElement("p",null,r.a.createElement(b.a,{formatLabel:function(e){return"".concat(e)},maxValue:1e3,minValue:100,value:this.state.value,onChange:function(t){return e.setState({value:t})}})),r.a.createElement("p",{className:"text-center"},r.a.createElement("button",{className:"button text-white",onClick:function(){return e.filterProducts()}},"Apply"))))}}]),t}(r.a.Component)),O=a(26),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onOpenSortModal=function(){a.setState({sortopen:!0})},a.onCloseSortModal=function(){a.setState({sortopen:!1})},a.onOpenFilterModal=function(){a.setState({filteropen:!0})},a.onCloseFilterModal=function(){a.setState({filteropen:!1})},a.handleSorting=function(){a.setState({sortopen:!1}),a.props.sortProducts(a.state.selectedOption)},a.handleFiltering=function(){var e=Object(o.a)({},a.state),t=Object(E.a)({},e);a.setState({filteropen:!1}),a.props.filterProducts(t.value.min,t.value.max)},a.handleOptionChange=function(e){a.setState({selectedOption:e.target.value})},a.updateDimensions=function(){("undefined"!==typeof window?window.innerWidth:0)>768&&(1==a.state.filteropen||1==a.state.sortopen)&&a.setState({filteropen:!1,sortopen:!1})},a.state={sortopen:!1,filteropen:!1,value:{min:100,max:1e3},selectedOption:"highestprice"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hide-md"},r.a.createElement("div",{className:"filter-main "},r.a.createElement("div",{className:"filter-first",onClick:this.onOpenSortModal},"SORT"),r.a.createElement("div",{className:"filter-second",onClick:this.onOpenFilterModal},"FILTER"))),r.a.createElement("div",{id:"sortby",className:"hide-sm"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Sort By")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.props.sortProducts("highestprice")}},"Price--High Low")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.props.sortProducts("lowestprice")}},"Price--Low High")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.props.sortProducts("highestdiscount")}},"Discount")))),r.a.createElement(O.a,{open:this.state.sortopen,onClose:this.onCloseSortModal,top:!0,showCloseIcon:!1},r.a.createElement("div",{id:"modalHeader"},r.a.createElement("h5",{className:"nomargin"},"Sort Options")),r.a.createElement("div",{id:"modalContent"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("label",{className:"radiobox-container"},"Price--High Low",r.a.createElement("input",{type:"radio",value:"highestprice",checked:"highestprice"===this.state.selectedOption,onChange:this.handleOptionChange}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("label",{className:"radiobox-container"},"Price--Low High",r.a.createElement("input",{type:"radio",value:"lowestprice",checked:"lowestprice"===this.state.selectedOption,onChange:this.handleOptionChange}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("label",{className:"radiobox-container"},"Discount",r.a.createElement("input",{type:"radio",value:"highestdiscount",checked:"highestdiscount"===this.state.selectedOption,onChange:this.handleOptionChange}),r.a.createElement("span",{className:"checkmark"}))))),r.a.createElement("div",{id:"modalFooter"},r.a.createElement("div",{className:"button1",onClick:this.onCloseSortModal},"Cancel"),r.a.createElement("div",{className:"button2",onClick:this.handleSorting},"Apply"))),r.a.createElement(O.a,{open:this.state.filteropen,onClose:this.onCloseFilterModal,top:!0,showCloseIcon:!1},r.a.createElement("div",{id:"modalHeader"},r.a.createElement("h5",{className:"nomargin"},"Filter Options ",r.a.createElement("span",{style:{fontSize:"11px"}},"(Price range in RS)"))),r.a.createElement("div",{id:"modalContent",style:{padding:"30px"}},r.a.createElement(b.a,{maxValue:1e3,minValue:100,value:this.state.value,onChange:function(t){return e.setState({value:t})},style:{padding:"25px"}})),r.a.createElement("div",{id:"modalFooter"},r.a.createElement("div",{className:"button1",onClick:this.onCloseFilterModal},"Cancel"),r.a.createElement("div",{className:"button2",onClick:this.handleFiltering},"Apply"))))}}]),t}(r.a.Component);var S=function(e){return e.products.map((function(t){return r.a.createElement("div",{className:"box",key:t.id},r.a.createElement("img",{src:t.img_url}),r.a.createElement("h5",{className:"nomargin text-left item-text1"},t.name),r.a.createElement("p",{className:"nomargin text-left item-text2"},r.a.createElement("b",null,r.a.createElement("i",{className:"fa fa-inr"}),t.price," ")," "," ",r.a.createElement("span",{className:"offer"},t.discount,"% Off")),r.a.createElement("p",{className:"nomargin text-center item-text3"},r.a.createElement("button",{className:"button",onClick:function(a){return e.addProductsToCart(t)}},"Add to Cart")))}))},j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).addProductsToCart=function(t){if(e.cartItems.some((function(e){return e.id===t.id})))return!1;t.count=1,e.cartItems.push(t),localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),e.setState((function(t){return Object(o.a)({},t,{count:++e.state.count})}))},e.sortProducts=function(t){var a=e.state.filter?Object(i.a)(e.state.filtredProducts):Object(i.a)(e.state.products);"highestprice"===t||"lowestprice"===t?a.sort((function(e,a){return"lowestprice"===t?e.price>a.price?1:-1:e.price<a.price?1:-1})):a.sort((function(e,a){return"lowestdiscount"===t?e.discount>a.discount?1:-1:e.discount<a.discount?1:-1})),e.setState((function(e){return Object(o.a)({},e,{filtredProducts:a})}))},e.filterProducts=function(t,a){var n=Object(i.a)(e.state.products);e.setState((function(e){return Object(o.a)({},e,{filtredProducts:n.filter((function(e){return e.price>=t&&e.price<=a})).sort((function(e,t){return t.price>e.price?1:-1})),filter:!0})}))},e.state={sort:"highestprice",filter:!1,products:[],filtredProducts:[],count:0,open:!0},e.cartItems=[],e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;JSON.parse(localStorage.getItem("cartItems")).length>0&&(Object.assign(this.cartItems,JSON.parse(localStorage.getItem("cartItems"))),this.setState({count:this.cartItems.length})),fetch("https://api.myjson.com/bins/qzuzi").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState((function(e){return Object(o.a)({},e,{products:[].concat(Object(i.a)(e.products),Object(i.a)(t))})})),e.sortProducts("highestprice")})).catch((function(e){console.log("Network Error",e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{productcount:this.state.count}),r.a.createElement("section",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(g,{filterProducts:this.filterProducts}),r.a.createElement("article",{id:"main-col"},r.a.createElement(N,{sortProducts:this.sortProducts,filterProducts:this.filterProducts}),r.a.createElement(S,{products:this.state.filtredProducts,addProductsToCart:this.addProductsToCart})))))}}]),t}(r.a.Component),C=a(16),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).incrementProductSize=function(e){this.state.cartItems.forEach((function(t){t.id===e.id&&(t.count+=1)})),this.setState((function(e){return Object(o.a)({},e,{cartItems:e.cartItems})}))},a.decrementProductSize=function(e){this.state.cartItems.forEach((function(t){t.id===e.id&&(t.count-=1)})),this.setState((function(e){return Object(o.a)({},e,{cartItems:e.cartItems})}))},a.removeProduct=function(e){var t=Object(i.a)(this.state.cartItems),a=t.indexOf(e);if(-1!==a){t.splice(a,1);var n=Object(i.a)(JSON.parse(localStorage.getItem("cartItems")));n.splice(n.findIndex((function(t){return t.id===e.id})),1),localStorage.setItem("cartItems",JSON.stringify(n)),console.log("local Storage",localStorage.getItem("cartItems"))}this.setState((function(e){return Object(o.a)({},e,{cartItems:t})}))},a.state={cartItems:JSON.parse(localStorage.getItem("cartItems"))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.cartItems.reduce((function(e,t){return e+t.price*t.count}),0),a=this.state.cartItems.reduce((function(e,t){return e+t.discount*t.price/100*t.count}),0),n=t-a,c=this.state.cartItems.reduce((function(e,t){return e+t.count}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("section",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("article",{id:"cart-col"},r.a.createElement("ul",{id:"item-lists"},this.state.cartItems.map((function(t,a){var n;return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("div",{style:(n={width:"100px"},Object(C.a)(n,"width","85px"),Object(C.a)(n,"padding","6px"),n)}," ",r.a.createElement("img",{src:t.img_url,className:"img"})),r.a.createElement("div",{className:"item-detail"},r.a.createElement("h4",null,t.name),r.a.createElement("h5",null,r.a.createElement("i",{className:"fa fa-inr"}),t.price," ",r.a.createElement("span",{className:"offer"},t.discount,"% Off")))),r.a.createElement("div",{className:"product-counter"},r.a.createElement("h5",null,r.a.createElement("i",{className:"fa fa-minus-circle icon-color",onClick:function(){return e.decrementProductSize(t)}})),r.a.createElement("h5",null,r.a.createElement("input",{type:"text",className:"qty",value:t.count})),r.a.createElement("h5",null,r.a.createElement("i",{className:"fa fa-plus-circle icon-color",onClick:function(){return e.incrementProductSize(t)}}))),r.a.createElement("h5",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.removeProduct(t)}},"REMOVE"))))})))),r.a.createElement("aside",{id:"sidebarright"},r.a.createElement("div",{className:"pricedetail"},r.a.createElement("h5",{className:"nomargin"},"PRICE DETAILS"),r.a.createElement("hr",null),r.a.createElement("div",{className:"totals"},r.a.createElement("div",{className:"totals-item"},r.a.createElement("label",null,"Price (",c," Item): "),r.a.createElement("div",{className:"totals-value",id:"cart-subtotal",style:{display:"block"}},r.a.createElement("i",{className:"fa fa-inr"}),t)),r.a.createElement("div",{className:"totals-item"},r.a.createElement("label",null,"Discount : "),r.a.createElement("div",{className:"totals-value",id:"cart-subtotal",style:{display:"block"}},r.a.createElement("i",{className:"fa fa-inr"}),a))),r.a.createElement("div",{className:"total-payable"},r.a.createElement("div",null,"Total Payable"),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-inr"}),n)))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(14),k=r.a.createElement(h.a,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:j}),r.a.createElement(P.a,{path:"/cart",component:I})));l.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b592a623.chunk.js.map