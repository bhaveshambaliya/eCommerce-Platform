import React from 'react'
import CartSummary from "./CartSummary";
import GrandTotal from "./GrandTotal";
import styled from "styled-components";
import MediaQuery from 'react-responsive'
import { MdOutlineCancel } from 'react-icons/md';
import {connect} from 'react-redux'

const EditBtn = styled.button`
  color: #f26449;
  background-color: white;
  text-transform: uppercase;
  text-decoration: underline;
  border: none;
  float: right;
`;

function PaymentOrdSum({closeHandler,userDetails}) {
    return (
        <>
            <div className="border border-2 rounded-3">
              <h5 className="p-3 m-0 border-bottom">Order summary
              <MediaQuery maxWidth={767}>
              <button className='float-end border-0 bg-transparent' onClick={closeHandler}>
                <MdOutlineCancel fill='gainsboro' className='fs-4'/>
                </button></MediaQuery>
              </h5>
              <GrandTotal />
              <CartSummary />
            </div>
            <div className="p-4 my-1">
              <span>SHIPT TO</span>
              <EditBtn>Edit</EditBtn>
              <hr />
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
            </div>
            <div className="p-4 my-1">
              <span>SHIPPING METHOD</span>
              <EditBtn>Edit</EditBtn>
              <hr />
              <p>undefined - Collect in Store</p>
            </div>
        </>
    )
}

const mapStatetoProps = (state)=>{
  return {userDetails: state.userDetails}
}

export default connect(mapStatetoProps)(PaymentOrdSum)
