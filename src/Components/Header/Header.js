import React, { useEffect, useRef, useState } from "react";
import { Badge, NavDropdown } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import logo from "../../images/logo.png";
import { navtabs } from "./Navtabs";
import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi";
import MediaQuery from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { removeCart, updateCart } from "../../App";

const CartBoxlayer = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.01);
`;

const Cartbox = styled.div`
  position: absolute;
  right: 5vw;
  top: 105px;
  background-color: white;
  padding: 1rem;
  overflow-y: scroll;
  max-height: calc(100vh - 108px);
  border: 1px solid transparent;
  box-shadow: 1px 1px 5px 2px grey;

  input[type="number"] {
    width: 20%;
    outline: none;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 5px;
    color: grey;
    appearance: textfield;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
export const MenuContext = React.createContext();

function Header({
  cartValue,
  cartItems,
  updateCart,
  cartTotal,
  removeCart,
  getCartTotal,
  showLayer
}) 
{
  const [menuShow, setmenuShow] = useState(false)
  const [searchBoxShow, setsearchBoxShow] = useState(false);
  const [cartBoxShow, setcartBoxShow] = useState(false);
  const [cartBoxContentShow, setcartBoxContentShow] = useState(false);
  const [badgeShow, setbadgeShow] = useState(false);

  const closeProNav = (e) => {
    e.target.parentNode.parentNode.parentNode.classList.remove("show");
  };
  
  const closeNav = (e) => {
    e.target.parentNode.parentNode.classList.remove("show");
  };

  const openMenu = ()=>{
    setmenuShow(true)
    showLayer()
  }

  const toggleCartBox = () => {
    setcartBoxShow(!cartBoxShow);
  };

  const updateCartHandler = (cartitem,e)=>{
    updateCart(cartitem.product,e.target.value)
    cartItems.map((itm)=>{
      if(itm.product.name == cartitem.product.name){
        itm.updateCartTotal = true
      }else{
        itm.updateCartTotal = false
      }
      return itm
    })
  }

  const cartTotalHandler = (cartitem)=>{
    getCartTotal()
    cartitem.updateCartTotal = false
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setcartBoxContentShow(true);
      setbadgeShow(true);
    } else {
      setcartBoxContentShow(false);
      setbadgeShow(false);
    }
  }, [cartItems.length]);

  return (
    <MenuContext.Provider value={{menuShow,setmenuShow}}>
      <div>
        <div
          style={{ zIndex: "1000" }}
          className="px-5 py-4 position-fixed top-0 w-100 "
        >
          <header>
            <div>
              <Link to="/">
                <img className="logo" src={logo} alt="logo"></img>
              </Link>
            </div>
            <MediaQuery minWidth={1025}>
              <div className="d-flex ms-5" style={{ flexBasis: "50%" }}>
                {navtabs
                  .filter((alltab) => alltab.tab !== "Products")
                  .map((item) => {
                    return (
                      <NavDropdown
                        title={item.tab}
                        key={item.id}
                        className={"order-" + `${item.id}`}
                        renderMenuOnMount={true}
                      >
                        {item.subtabs &&
                          item.subtabs.map((itm, index) => {
                            return (
                              <Link to={itm.path}>
                                <NavDropdown.Item
                                  onClick={closeNav}
                                  as="p"
                                  key={index}
                                >
                                  {itm.tabName}
                                </NavDropdown.Item>
                              </Link>
                            );
                          })}
                      </NavDropdown>
                    );
                  })}
                <NavDropdown
                  title="Products"
                  id=""
                  renderMenuOnMount={true}
                  className="order-2"
                >
                  {navtabs
                    .find((alltab) => alltab.tab === "Products")
                    .subtabs.map((product, index) => {
                      return (
                        <Link to={product.path}>
                          <DropdownButton
                            className=""
                            id="dropdown-button-drop-end"
                            title={product.tabName}
                            drop="end"
                            key={index}
                            show={true}
                            onClick={closeProNav}
                          >
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another</Dropdown.Item>
                            <Dropdown.Item>Something</Dropdown.Item>
                          </DropdownButton>
                        </Link>
                      );
                    })}
                </NavDropdown>
              </div>
            </MediaQuery>
            <div
              className="d-flex justify-content-end align-items-center gap-3"
              style={{ flexBasis: "35%" }}
            >
              {searchBoxShow ? (
                <div className="search-box shadow">
                  <span className="input-box">
                    <input
                      type="text"
                      placeholder="Search our product range"
                    ></input>
                  </span>
                  <button className="bg-transparent p-0 border-0">
                    <HiOutlineSearch
                      className="order-1 fs-4 mt-1"
                      onClick={() => setsearchBoxShow(false)}
                    ></HiOutlineSearch>
                  </button>
                </div>
              ) : (
                <button className="bg-transparent p-0 border-0">
                  <HiOutlineSearch
                    className="order-1 fs-4 mt-1"
                    onClick={() => setsearchBoxShow(true)}
                  ></HiOutlineSearch>
                </button>
              )}
              <button
                className="bg-transparent order-3 position-relative p-0 border-0"
                onClick={toggleCartBox}
              >
                {badgeShow ? <Badge>{cartValue}</Badge> : null}
                <HiOutlineShoppingCart className=" fs-4 mt-1"></HiOutlineShoppingCart>
              </button>

              {cartBoxShow ? (
                <>
                  <CartBoxlayer
                    onClick={() => setcartBoxShow(false)}
                  ></CartBoxlayer>
                  <Cartbox className="col-lg-4 col-md-6 col-8">
                    {cartBoxContentShow ? (
                      <>
                        {cartItems &&
                          cartItems.map((cartitem) => {
                            const item = cartitem.product;
                            return (
                              <div key={item.id}>
                                <div className="d-flex gap-5">
                                  <img width={75} src={item.pic[0]}></img>
                                  <div>
                                    <h6 className="text-capitalize">
                                      {item.name}
                                    </h6>
                                    <p>
                                      ${item.buy[0]}
                                      {item.buy[1]}
                                    </p>
                                    <input
                                      className="text-center"
                                      type="number"
                                      name={item.name}
                                      min={1}
                                      value={cartitem.quantity}
                                      onChange={(e) =>
                                        updateCartHandler(cartitem, e)
                                      }
                                    ></input>
                                    {cartitem.updateCartTotal ? (
                            <button className=" btn btn-sm btn-outline-danger mb-1 mx-2"
                            onClick={()=>cartTotalHandler(cartitem)}
                            >
                              Update Total
                            </button>
                          ) : null}
                                    <button
                                      className="bg-transparent float-end p-1 border-0 mx-3"
                                      onClick={() => removeCart(cartitem)}
                                    >
                                      <MdDeleteForever
                                        fill="grey"
                                        className="fs-5"
                                      />
                                    </button>
                                    <button className="bg-transparent float-end p-1 border-0">
                                      <MdEdit fill="grey" className="fs-5" />
                                    </button>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            );
                          })}
                        <div className="px-3">
                          <span className="w-50 d-inline-block">Total:</span>
                          <span className="w-50 d-inline-block text-end">
                            ${cartTotal}
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-evenly">
                          <Link to="/shopping-cart">
                            <button
                              className="text-white bg-secondary py-2 px-4 border-0"
                              onClick={() => setcartBoxShow(false)}
                            >
                              View Cart
                            </button>
                          </Link>
                          <Link to='/checkout/shipping'>
                            <button className="text-white bg-secondary py-2 px-4 border-0" onClick={() => setcartBoxShow(false)}>
                              Checkout
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <p className="text-center m-0">
                        You have no items in your shopping cart.
                      </p>
                    )}
                  </Cartbox>
                </>
              ) : null}

              <MediaQuery minWidth={1025}>
                <button className="bg-transparent p-0 border-0">
                  <HiOutlineUser className="order-2 fs-4 mt-1"></HiOutlineUser>
                </button>
                <button className="order-4 header-btn">1300 769 161</button>
              </MediaQuery>
              <MediaQuery maxWidth={1024}>
                <button className="menu-Btn order-5" onClick={openMenu}>
                  <GiHamburgerMenu />
                </button>
              </MediaQuery>
            </div>
          </header>
          <MediaQuery maxWidth={1024}>
            <Menu />
          </MediaQuery>
        </div>
      </div>
      </MenuContext.Provider>
    
  );
}

const mapStatetoProps = (state) => {
  return {
    cartValue: state.cartValue,
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateCart: (product, qty) => dispatch(updateCart(product, qty)),
    removeCart: (product) => dispatch(removeCart(product)),
    getCartTotal: () => dispatch({ type: "GET_TOTAL" }),
    showLayer: ()=>dispatch({type: 'SHOW_LAYER'})
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
