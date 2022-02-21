import React from 'react'
import { Accordion } from 'react-bootstrap';
import {connect} from 'react-redux'

function CartSummary({cartItems, cartValue}) {
    return (
        <Accordion className="shipping-box">
                <Accordion.Item>
                  <Accordion.Header>{cartValue} items in cart</Accordion.Header>
                  {cartItems &&
                    cartItems.map((cartitem) => {
                      const item = cartitem.product;
                      return (
                        <Accordion.Body className="d-flex gap-3 p-3 overflow-hidden">
                          <img height={78} src={item.pic[0]}></img>
                          <div>
                            <h6 className="text-capitalize">{item.name}</h6>
                            <p>Qty: {cartitem.quantity}</p>
                          </div>
                          <p>${item.buy[0].toFixed(2) * cartitem.quantity}</p>
                        </Accordion.Body>
                      );
                    })}
                </Accordion.Item>
              </Accordion>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems,
      cartValue: state.cartValue,
    };
  };

export default connect(mapStateToProps)(CartSummary)
