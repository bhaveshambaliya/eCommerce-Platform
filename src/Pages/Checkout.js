import React, { useState, useEffect } from "react";
import {Badge, Col, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { regionList } from "./ShoppingCart";
import { MdOutlineCancel, MdShoppingCart } from "react-icons/md";
import CartSummary from "../Components/Checkout/CartSummary";
import {Link} from 'react-router-dom'
import MediaQuery from "react-responsive";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Layer from "../Components/StyledComponents/Layer";
import SummaryBox from "../Components/StyledComponents/SummaryBox";
import {connect} from 'react-redux'
import ShippingForm from "../Components/Checkout/ShippingForm";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

const phoneRegex = /^(?:[0-9]\s?){5,14}[0-9]$/;
const postcodeRegex = /^([0-9]{4,4})$/;

function Checkout({ cartValue, cartTotal }) {

  const [summaryShow, setsummaryShow] = useState(false)

  const viewSummary = ()=>{
    setsummaryShow(true)
  }

  const hideSummary =()=>{
    setsummaryShow(false)
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="py-5 mt-5">
      <div className="p-md-5 p-3">
        <ul className="list-unstyled d-flex gap-1 py-4 progress-box">
          <li>
            <div>
              <TiTick className="fs-5" fill="#414242" />
            </div>
            <p className="py-4 m-0 text-center">Shipping</p>
          </li>
          <li className='unticked'>
            <div>2</div>
            <p className="py-4 m-0 text-center">Review & Payments</p>
          </li>
        </ul>
        <MediaQuery maxWidth={767}>
          <div className='d-flex justify-content-between align-items-center'>
          <span>
            <h5>Estimated Total</h5>
            <h5>${(cartTotal + (cartTotal*10/100)).toFixed(2)}</h5>
          </span>
          <button className="bg-transparent position-relative p-3 border-0" onClick={viewSummary}>
            <Badge bg='success' className='p-2 position-absolute top-0 right-0 rounded-circle'>{cartValue}</Badge>
            <HiOutlineShoppingCart className='fs-2'/>
          </button></div>
          <Layer show={summaryShow} close={hideSummary}></Layer>
          <SummaryBox boxShow={summaryShow} child={<div>
            <h5 className="p-3 m-0">Order summary
            <button className='float-end border-0 bg-transparent' onClick={hideSummary}>
                <MdOutlineCancel fill='gainsboro' className='fs-4'/>
                </button>
            </h5>
              <CartSummary/>
          </div>} >
          </SummaryBox>
          <hr/>
          </MediaQuery>
        <Row>
          <Col md={8}>
            <h2 className='py-1'>Shipping address</h2>
            <hr/>
            <ShippingForm shippingMethod={true} />
          </Col>
          <MediaQuery minWidth={768}>
          <Col md={4} className="ps-md-4">
            <div className="border border-2 rounded-3 mt-5">
              <h5 className="p-3 m-0">Order summary</h5>
              <CartSummary/>
            </div>
          </Col>
          </MediaQuery>
        </Row>
      </div>
    </div>
  );
}

const mapStatetoProps = (state)=>{
  return {cartValue: state.cartValue,
    cartTotal:state.cartTotal
  }
}

export default connect(mapStatetoProps)(Checkout);
