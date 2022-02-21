import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./Components/Style.scss";
import "./index.scss";
import Landing from "./Pages/Landing/Landing";
import ExRentClea from "./Products/Ex-Rental & Clearance/ExRentClea";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatwedo from "./Pages/AboutUs/Whatwedo";
import OurGuarantee from "./Pages/AboutUs/OurGuarantee";
import FlexiFinance from "./Pages/Services/FlexiFinance";
import FinanceCalculator from "./Pages/Services/FinanceCalculator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import FleetManagement from "./Pages/Services/FleetManagement";
import ServiceGuarantee from "./Pages/Services/ServiceGuarantee";
import Newsletter from "./Pages/News/Newsletter";
import Articles from "./Pages/News/Articles";
import ProductDetails from "./Components/ProductCatalogue/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";

const initialState = {
  activeCalculateBtn: true,
  cartValue: null,
  cartItems: [],
  cartTotal:0,
  layerShow: false,
  userDetails:[]
};

export const addtoCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product: product,
      quantity: 1,
      updateCartTotal: false
    },
  };
};

export const removeCart = (product) => {
  return {
    type: "REMOVE_CARTITEM",
    payload: product,
  };
};

export const updateCart = (product, qty) => {
  return {
    type: "UPDATE_CART",
    payload: {
      product: product,
      quantity: qty,
    },
  };
};

const reducer = (state, action) => {

  if (action.type === "setActive") {
    return { ...state, activeCalculateBtn: !state.activeCalculateBtn };
  }

  if (action.type === "ADD_TO_CART") {

    let checkItem = state.cartItems.find((itm)=>itm.product.name === action.payload.product.name)

    if(checkItem){
      checkItem.quantity++
      return {...state, cartValue: state.cartValue + Number(action.payload.quantity),
        cartTotal: state.cartTotal + action.payload.product.buy[0],}
    }else
    {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartValue: state.cartValue + Number(action.payload.quantity),
        cartTotal: state.cartTotal + action.payload.product.buy[0],
      };
    }
  }

  if (action.type === "UPDATE_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter((itm) =>
        itm.product.name === action.payload.product.name
          ? (itm.quantity = action.payload.quantity)
          : itm.quantity
      ),
      cartValue: state.cartItems.reduce((prevQty,item)=> prevQty + Number(item.quantity),0)
    };
  }

  if(action.type === 'GET_TOTAL'){
    
    let grandTotal = state.cartItems.reduce((prevTotal,item)=> prevTotal + (item.product.buy[0]*item.quantity),0)
    
     return {...state, cartTotal:grandTotal}
  }

  if (action.type === "REMOVE_CARTITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (itm) => itm.product.name !== action.payload.product.name
      ),
      cartValue: state.cartValue - action.payload.quantity,
      cartTotal:
        state.cartTotal -
        action.payload.quantity * action.payload.product.buy[0],
    };
  }

  if(action.type === 'SHOW_LAYER'){
    return {...state, layerShow:true}
  }

  if(action.type === 'CLOSE_LAYER'){
    return {...state, layerShow:false}
  }

  if(action.type === 'ADD_USERINFO'){
    return state
  }
  return state;
};

export const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/ex-rental-clearance" element={<ExRentClea />}></Route>
          <Route path="/what-we-do" element={<Whatwedo />}></Route>
          <Route path="/our-guarantee" element={<OurGuarantee />}></Route>
          <Route path="/flexikitch-finance" element={<FlexiFinance />}></Route>
          <Route
            path="/finance-calculator"
            element={<FinanceCalculator />}
          ></Route>
          <Route path="/fleet-management" element={<FleetManagement />}></Route>
          <Route path="/services" element={<ServiceGuarantee />}></Route>
          <Route path="/latestnews" element={<Newsletter />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/:path" element={<ProductDetails />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/checkout/shipping" element={<Checkout />}></Route>
          <Route path="/checkout/payment" element={<Payment/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
