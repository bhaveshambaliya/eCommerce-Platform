import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Accordion, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeCart, updateCart } from "../App";
import { MdShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'
import GrandTotal from "../Components/Checkout/GrandTotal";

const postcodeRegex = /^([0-9]{4,4})$/

export const regionList = ['Australian Capital Territory','New South Wales','Northern Territory','Queensland','South Australia','Tasmania','Victoria','Western Australia']

function ShoppingCart({cartItems,cartTotal,updateCart,removeCart,getCartTotal}) {

  const [contentShow, setcontentShow] = useState(false)
  const [postcodeValidate, setpostcodeValidate] = useState({
    postcode:'',
    error: false
  })

  const postcodeHandler = (e)=>{
    if(postcodeRegex.test(e.target.value) || !e.target.value){
      setpostcodeValidate({
        postcode: e.target.value,
        error: false
      })
    }else{
      setpostcodeValidate({
        postcode: e.target.value,
        error: true
      })
    }
  }
  useEffect(() => {
   window.scrollTo(0,0)
   if(cartItems.length > 0){
     setcontentShow(true)
   }else{
     setcontentShow(false)
   }
  }, [cartItems.length])

  return (
    <div className="pt-5 mt-5">
      <div className="px-3 py-5 px-md-5">
        <h2 className='py-3'>Shopping Cart</h2>
        {
          contentShow ? 
        
        <Row>
          <Col lg={8} className='table-responsive'>
            <table className='cart-table table table-condensed  w-100'>
              <thead className='' style={{backgroundColor:'#f8f4ec'}}>
                <tr className='border-0'>
                  <th style={{borderRadius:'5px 0 0 5px'}} className='border-0 py-3 text-center text-sm-start'>Item</th>
                  <th  className='border-0 py-3 text-center'>Price</th>
                  <th  className='border-0 py-3 text-center'>Qty</th>
                  <th style={{borderRadius:'0 5px 5px 0'}} className='border-0 py-3 text-center'>Subtotal</th>
                </tr>
              </thead>
              <tbody className='border-0'>
                {cartItems &&
                  cartItems.map((cartitem) => {
                    const item = cartitem.product;
                    return (
                        <>
                      <tr className=''>
                        <td className='d-sm-flex text-center text-sm-start border-0 gap-4 pt-4'>
                          <img className='mb-3' width={80} src={item.pic[0]}></img>
                          <h6 className="text-capitalize">{item.name}</h6>
                        </td>
                        <td className='text-center border-0 pt-4 px-2'>${item.buy[0].toFixed(2)}</td>
                        <td  className='text-center border-0 pt-4 px-2'>
                          <input
                            className="text-center"
                            type="number"
                            name={item.name}
                            value={cartitem.quantity}
                            onChange={(e) =>
                              updateCart(item, e.target.value)
                            }
                          ></input>
                        </td>
                        <td className='text-center border-0 pt-4 px-2'>${item.buy[0].toFixed(2)}</td>
                      </tr>
                      <tr className=''>
                          <td colSpan={4} className='border-bottom py-0 pb-1'>
                          <button className='bg-transparent float-end p-1 border-0 mx-3'  onClick={() => removeCart(cartitem)}>
                      <MdDeleteForever fill='grey' className='fs-5'/>
                      </button>
                      <button className='bg-transparent float-end p-1 border-0'>
                      <MdEdit fill='grey' className='fs-5'/>
                      </button>
                          </td>
                      </tr>
                      </>
                    );
                  })}
                  <tr>
                      <td colSpan={4} className='border-bottom py-4'>
                          <a className='fw-bold ps-4' onClick={getCartTotal}>Update shopping cart</a>
                          <a className='float-end pe-4'>Continue shopping</a>
                      </td>
                  </tr>
              </tbody>
            </table>
            <Accordion defaultActiveKey='0' className='w-100 my-2'>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Apply Discount Code</Accordion.Header>
                <Accordion.Body>
                  <div className='border border-1 w-75 rounded-2'>
                    <input type='text' placeholder='Enter discount code'></input>
                    <button>Apply discount</button>
                    </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={4}>
              <div className='border border-2 rounded-3'>
                  <h5 className='p-3 m-0'>Summary</h5>
                  <Accordion className='shipping-box' defaultActiveKey='0'>
                      <Accordion.Item eventKey='1'>
                          <Accordion.Header>Estimate shipping & Tax</Accordion.Header>
                          <Accordion.Body>
                            <form>
                              <div className='mb-3'>
                              <label>Country</label>
                              <select className='w-100'>
                                <option value='Australia'>Australia</option>
                              </select>
                              </div>
                              <div className='pb-3'>
                              <label>State/Province</label>
                              <select className='w-100'>
                                <option>Please select a region, state or province</option>
                                {
                                  regionList.map((region)=>{
                                    return <option value={region}>{region}</option>
                                  })
                                }
                              </select>
                              </div>
                              <div className='mb-3'>
                                <label for='postcode'>Postcode</label>
                                <input id='postcode' value={postcodeValidate.postcode} type='text' onChange={postcodeHandler} className='w-100'></input>
                                {
                                  postcodeValidate.error ? <p className='bg-danger text-white p-3 text-center mt-2 border rounded-3'>
                                    Provided Zip/Postal Code seems to be invalid. Example: 1234. If you believe it is the right one you can ignore this notice.
                                  </p> : null
                                }
                              </div>
                              <div className='radio-option'>
                                <input type='radio' id='collect' checked className='form-check me-2'></input>
                                <label className='py-0' for='collect'>Collect in Store $0.00</label>
                              </div>
                            </form>
                          </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
                    <GrandTotal/>
                    <div className='p-4'>
                      <Link to='/checkout/shipping'>
                      <button className='checkout-btn'>
                        <MdShoppingCart className='fs-5 mb-1 me-3'/>
                        Proceed to Checkout</button></Link>
                      </div>
              </div>
          </Col>
        </Row> : <div className='pb-5'>
          <p className='m-0'>You have no items in your shopping cart.</p>
          <p>Click here to continue shopping</p>
          </div>}
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateCart: (product, qty) => dispatch(updateCart(product, qty)),
    removeCart: (product) => dispatch(removeCart(product)),
    getCartTotal: () => dispatch({ type: "GET_TOTAL" }),
  };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(ShoppingCart);
