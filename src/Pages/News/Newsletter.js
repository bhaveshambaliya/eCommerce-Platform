import React from 'react'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'
import fullhousebuzzImg from '../../images/News/FullHouseBuzz.png'
import afrFast100 from '../../images/News/AFR_Fast_100_2020.png'
import fullhousebuzzOct from '../../images/News/FullHouseBuzz-Oct2018.png'
import newsletterSept from '../../images/News/Newsletter_Sep.png'
import newsletterJune18 from '../../images/News/NewsletterJune2018.png'
import newsletterJune19 from '../../images/News/NewsletterJune2019.png'
import emailDec from '../../images/News/Email_Dec2017.png'

const NewsSection = styled.div`
p{
    color: #f26449
}

a{
    color: #f26449;
    text-decoration: none;
    font-weight: lighter
}

a:hover{
    color: #f26449;
    text-decoration: underline;
}
`

const newsletters = [
    {
        id:1,
        tag:'Flexikitch AFR Fast 100 2020',
        pic: afrFast100
    },
    {
        id:2,
        tag:'Full House Buzz - October 2018',
        pic: fullhousebuzzOct
    },
    {
        id:3,
        tag:'Full House Buzz - September 2019',
        pic: newsletterSept
    },
    {
        id:4,
        tag:'Full House Buzz - June 2018',
        pic: newsletterJune18
    },
    {
        id:5,
        tag:'Full House Buzz - June 2019',
        pic: newsletterJune19
    },
    {
        id:6,
        tag:'Christmas email - Dec 2017',
        pic: emailDec
    },
]

function Newsletter() {
    return (
        <div className='pt-5 mt-5'>
            <NewsSection className='container py-5 my-4'>
                <h5>News</h5>
                <img className='pt-5' width={300} src={fullhousebuzzImg} alt='fullhousebuzz-img'></img>
                <h5 className='my-3'><em>Full House Buzz</em> - news from the retail and hospitality scene</h5>
                <p><em>Full House Buzz</em> is full of hospitality and retail stories, news, latest openings and more. How do businesses get started, and how are they managing and growing their businesses?</p>
                <p><a href="#">Read it here or sign up</a> to join our mailing list.</p>
                <Row>
                    {
                        newsletters.map((item)=>{
                            return (
                                <Col xs={6} className='pb-4' key={item.id}>
                                    <a className='d-block mb-3' href='#'>{item.tag}</a>
                                    <a href='#'>
                                        <img style={{width:'200px'}} src={item.pic} alt={item.tag}></img>
                                    </a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </NewsSection>
        </div>
    )
}

export default Newsletter
