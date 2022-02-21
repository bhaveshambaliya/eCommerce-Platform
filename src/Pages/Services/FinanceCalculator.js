import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CalcButtons from '../../Components/CalcButtons'
import CostCalculator from '../../Components/CostCalculator'
import {RiSendPlaneFill} from 'react-icons/ri'

function FinanceCalculator() {
    return (
        <div className='pt-5 mt-5'>
            <Container className='mt-3 text-center py-5'>
                <h2>Finance Calculator</h2>
            </Container>
            <div id='finance-calc' style={{backgroundColor:'#f8f8f8'}}>
                <Container className='text-center border-bottom pt-5'>
                   <CalcButtons/> 
                </Container>
                <Container className='text-center p-5'>
                    <CostCalculator calculateButton={true}/>
                </Container>
            </div>
            <form className='inquiry-form'>
                <Container className='py-5'>
                    <p>If you're looking to get a fridge or a range of cooking equipment, speak to one of our team to make sure you've got the right equipment for your business.</p>
                    <Row className='pt-4'>
                        <Col md={6} className='pb-4'>
                        <div className='form-group'>
                            <label>First Name *</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group'>
                            <label>Last Name *</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group'>
                            <label>Trading Name</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group'>
                            <label>Email *</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group'>
                            <label>Phone *</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        </Col>
                        <Col md={6} className='pb-4'>
                        <div className='form-group'>
                            <label>State *</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group'>
                            <label>Preferred equipment retailer</label>
                            <input type='text' className='form-control '></input>
                        </div> 
                        <div className='form-group border-0'>
                            <label>Please tell us about your equipment requirements *</label>
                            <textarea rows={5} type='text' className='w-100 border border-secondary mt-1'></textarea>
                        </div>
                        <div className='form-group text-center border-0'>
                            <button className='formSubmitBtn'>
                                <RiSendPlaneFill style={{transform:"rotate(45deg)"}} className='fs-4 me-3 mb-1'/>
                                Submit</button>
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    )
}

export default FinanceCalculator
