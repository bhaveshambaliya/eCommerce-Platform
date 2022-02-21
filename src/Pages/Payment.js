import React, { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { BsPaypal } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import MediaQuery from 'react-responsive'
import PaymentOrdSum from "../Components/Checkout/PaymentOrdSum";
import Layer from "../Components/StyledComponents/Layer";
import SummaryBox from "../Components/StyledComponents/SummaryBox";
import {connect} from 'react-redux'
import ShippingForm from "../Components/Checkout/ShippingForm";


function Payment({cartValue,cartTotal,userDetails}) {
 
  const [moreInfo, setmoreInfo] = useState({
    creditcardInfo: false,
    paypalInfo: false
  })
  const [summaryShow, setsummaryShow] = useState(false)
  const [addressSame, setaddressSame] = useState(true)

  const viewSummary = ()=>{
    setsummaryShow(true)
  }

  const hideSummary =()=>{
    setsummaryShow(false)
  }

  const optionHandler = (e) => {
   
    if(e.target.id === 'creditcard'){
      setmoreInfo({paypalInfo:false,creditcardInfo: true})
    }else if(e.target.id === 'paypal'){
      setmoreInfo({creditcardInfo:false,paypalInfo:true})
    }else if(e.target.id === 'bill-address'){
      setaddressSame(!addressSame)
    }

  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    
    <div className="py-5 mt-5">
      <div className="p-3 p-md-5">
        <ul className="list-unstyled d-flex gap-1 py-4 progress-box">
          <li>
            <div>
              <TiTick className="fs-5" fill="#414242" />
            </div>
            <p className="py-4 m-0 text-center">Shipping</p>
          </li>
          <li>
            <div>
              <TiTick className="fs-5" fill="#414242" />
            </div>
            <p className="py-4 m-0 text-center">Review & Payments</p>
          </li>
        </ul>
        <MediaQuery maxWidth={767}>
          <div className='d-flex justify-content-between align-items-center'>
          <span>
            <h5>Estimated Total</h5>
            <h5>${cartTotal + (cartTotal*10/100)}</h5>
          </span>
          <button className="bg-transparent position-relative p-3 border-0" onClick={viewSummary}>
            <Badge bg='success' className='p-2 position-absolute top-0 right-0 rounded-circle'>{cartValue}</Badge>
            <HiOutlineShoppingCart className='fs-2'/>
          </button></div>
          <Layer show={summaryShow} close={hideSummary}></Layer>
          <SummaryBox boxShow={summaryShow} child={<PaymentOrdSum closeHandler={hideSummary}/>}>
          </SummaryBox>
          <hr/>
          </MediaQuery>
        <Row>
          <Col md={8} className="radio-option">
            <h2>Payment</h2>
            <hr className="my-4" />
            <input
              onChange={optionHandler}
              id="creditcard"
              name="payment"
              type="radio"
            ></input>
            <label for="creditcard">Credit Card</label>
            {
              moreInfo.creditcardInfo ? 
            <div className="p-5">
              <input
                onChange={optionHandler}
                type="checkbox"
                id="bill-address"
                checked={addressSame}
              ></input>
              <label for="bill-address" className="ms-2 mb-3">
                My billing and shipping address are the same
              </label>
              {
                userDetails.map((detail)=>{
                  return (
              <div className="p-3">
                {detail.fname} {detail.lname} <br />
                {detail.street}
                <br />
                {detail.city}, {detail.province} {detail.postcode}
                <br />
                {detail.country}
                <br />
                {detail.phone}
              </div>
                  )
                })
              }
              {
                addressSame ? null :
              <ShippingForm cancelFunc={()=>setaddressSame(true)} />
              }
              <form className="shipping-box">
                <div className="col-md-6 mb-3">
                  <label>Name on Card *</label>
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Name on Card"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Credit Card Number *</label>
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Card Number"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Card Expiration Date *</label>
                  <input className="w-100" type="month"></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Card Verification Number *</label>
                  <input
                    className="w-100"
                    type="text"
                    placeholder="CVN"
                  ></input>
                </div>
              <div style={{fontSize:'14px'}} className='p-4 border border-2 rounded-3 my-3'>
                <h6>Pre-delivery checklist</h6>
                <p>To ensure a streamlined delivery service of your new equipment, we want to avoid unforeseen variables when attempting to deliver appliances that could result in additional costs.</p>
                <p>Please review our checklist before placing your order so we can do our best to meet your needs and expectations</p>
                <ul>
                  <li>Check for obstacles or space restrictions (will the appliance fit through doors, up stairs or through internal doors)</li>
                  <li>Will the appliance fit in the intended space (including ventilation)</li>
                  <li>Verify dimensions of your equipment, will it fits into the intended area (height, width, depth)</li>
                  <li>Is there suitable access for delivery drivers</li>
                  <li>Correct plumbing connection (if applicable)</li>
                  <li>Correct gas supply (if applicable)</li>
                  <li>Correct electrical connections (if applicable)</li>
                  </ul>
                  <p>We reserve the right to charge for additional time and services required to make a delivery that fails to adhere to the checklist</p>
                </div>
                <div className='col-md-6'>
                <input type='checkbox' required></input>
                <label className='ms-2'>I have reviewed the checklist</label>
                <button className="checkout-btn mt-3">
                  <MdShoppingCart className="fs-5 mb-1 me-3" />
                  Place Order
                </button></div>
                  </form>
            </div> : null
            }
            <hr className="my-4" />
            <input
              onChange={optionHandler}
              id="paypal"
              name="payment"
              type="radio"
            ></input>
            <label for="paypal">
              <BsPaypal fill="darkblue" className="me-2" />
              Paypal Express Checkout <a href="#">What is Paypal?</a>
            </label>
            {
              moreInfo.paypalInfo ?  
            <div className='p-5'>
              <p>You will be redirected to the PayPal website.</p>
              <div style={{fontSize:'14px'}} className='p-4 border border-2 rounded-3 my-3'>
                <h6>Pre-delivery checklist</h6>
                <p>To ensure a streamlined delivery service of your new equipment, we want to avoid unforeseen variables when attempting to deliver appliances that could result in additional costs.</p>
                <p>Please review our checklist before placing your order so we can do our best to meet your needs and expectations</p>
                <ul>
                  <li>Check for obstacles or space restrictions (will the appliance fit through doors, up stairs or through internal doors)</li>
                  <li>Will the appliance fit in the intended space (including ventilation)</li>
                  <li>Verify dimensions of your equipment, will it fits into the intended area (height, width, depth)</li>
                  <li>Is there suitable access for delivery drivers</li>
                  <li>Correct plumbing connection (if applicable)</li>
                  <li>Correct gas supply (if applicable)</li>
                  <li>Correct electrical connections (if applicable)</li>
                  </ul>
                  <p>We reserve the right to charge for additional time and services required to make a delivery that fails to adhere to the checklist</p>
                </div>
                <div className='col-md-6'>
                <input type='checkbox'></input>
                <label className='ms-2'>I have reviewed the checklist</label>
                <button className="checkout-btn mt-3">
                  <MdShoppingCart className="fs-5 mb-1 me-3" />
                  Continue to Paypal
                </button></div>
              </div> : null
              }
            <hr className="my-4" />
          </Col>
          <MediaQuery minWidth={768}>
          <Col md={4}>
            <PaymentOrdSum/>
          </Col>
          </MediaQuery>
        </Row>
      </div>
    </div>
    
  );
}

const mapStatetoProps = (state)=>{
  return {cartValue: state.cartValue,
    cartTotal:state.cartTotal,
    userDetails: state.userDetails
  }
}

export default connect(mapStatetoProps)(Payment);
