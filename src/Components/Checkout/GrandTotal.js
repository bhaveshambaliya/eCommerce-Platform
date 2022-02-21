import React from 'react'
import {connect} from 'react-redux'

function GrandTotal({cartTotal}) {
    return (
        <div className='pt-3'>
                    <span className='d-flex px-3'>
                      <p className='w-50'>Subtotal</p>
                      <p className='w-50 text-end'>${cartTotal.toFixed(2)}</p>
                    </span>
                    <span className='d-flex px-3'>
                      <p className='w-50'>Shipping (undefined - Collect in Store)</p>
                      <p className='w-50 text-end'>$0.00</p>
                    </span>
                    <span className='d-flex px-3'>
                      <p className='w-50'>Tax</p>
                      <p className='w-50 text-end'>${(cartTotal*10/100).toFixed(2)}</p>
                    </span>
                      <span className='d-flex fw-bold p-3 border-top'>
                        <p className='w-50 m-0'>Order Total</p>
                        <p className='w-50 text-end m-0'>${(cartTotal + (cartTotal*10/100)).toFixed(2)}</p>
                      </span>
                    </div>
    )
}

const mapStatetoProps = (state)=>{
    return {cartTotal: state.cartTotal}
}

export default connect(mapStatetoProps)(GrandTotal)
