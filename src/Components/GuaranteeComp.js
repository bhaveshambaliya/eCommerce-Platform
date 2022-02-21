import React from 'react'
import { Col, Row } from 'react-bootstrap'
import iconFast from '../images/About/icon-fast.png'
import iconCommu from '../images/About/icon-communication.png'
import iconDelivery from '../images/About/icon-delivery.png'
import iconDamage from '../images/About/icon-damage.png'
import iconBack from '../images/About/icon-back.png'
import iconGuarantee from '../images/About/icon-guarantee.png'

const guarantees = [
    {
        id:1,
        icon:iconFast,
        main:'Fast & efficient',
        para:'We pride ourselves on providing a prompt and efficient delivery service in metropolitan and regional areas throughout Australia.'
    },
    {
        id:2,
        icon:iconCommu,
        main:'Open communication',
        para:'Keeping you informed every step of the way is a priority. Once your order has been placed, we will be in touch several times throughout the delivery process and keep you informed of the anticipated delivery date.'
    },
    {
        id:3,
        icon:iconDelivery,
        main:'Safe delivery',
        para:"Sensitive freight requires special handling and transportation. That's why we've selected only the best freight companies with a proven track record to handle your equipment."
    },
    {
        id:4,
        icon:iconDamage,
        main:'In case of damage',
        para:"We will happily work with you to resolve any issues to your damaged stock. We will ensure you get a solution you’re satisfied with – and that is our promise."
    },
    {
        id:5,
        icon:iconBack,
        main:'We’ve got your back',
        para:"If you purchase an item with specific requirements we’ll be in touch prior to delivery. to check that you have the necessary services prior to installation. We aim to help our customers avoid expensive mistakes."
    },
    {
        id:6,
        icon:iconGuarantee,
        main:'And that is our guarantee',
        para:"If you are ever dissatisfied with a Flexikitch transaction, please contact us and let us know what happened so we can make things right. We’ll start with a complimentary bottle of wine – it’s our way of staying on the ball."
    },
]

function GuaranteeComp({showIcon}) {
    return (
        <>
            <Row className='pt-4'>
                {
                    guarantees.map((grnty)=>{
                        return (
                            <Col md={6} lg={4} className='pb-4' key={grnty.id}>
                                {
                                    showIcon ? 
                                    <img width={70} className='mb-4' src={grnty.icon}></img> : null
                                }
                                <h6>{grnty.main}</h6>
                                <p>{grnty.para}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default GuaranteeComp
