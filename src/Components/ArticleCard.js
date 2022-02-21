import React from 'react'
import { Card } from 'react-bootstrap'
import {BsDot} from 'react-icons/bs'
import styled from 'styled-components'

const CardButton = styled.button`
text-transform: uppercase;
font-weight:light;
font-size: 15px;
color: #333;
background-color: white;
border: 1px solid #333;
padding: 8px 16px;
margin-top: 15px;

:hover{
    color:white;
    background-color: #333
}
`

function ArticleCard({item}) {
    return (
        <Card className='flex-md-row my-4 py-2 border-0'>
            <a href='#' className='col-md-5 '><Card.Img className='w-100' src={item.pic}></Card.Img></a>
            <Card.Body className='col-md-7 py-2 mt-4 mt-md-0'>
                <h3 className='text-uppercase fw-100'>{item.title}</h3>
                <p className='py-2' style={{fontSize:'14px',color:'#6f6f6f'}}>
                    <span>{item.date}</span>
                    <BsDot className='fs-5'/>
                    <span>{item.readTime} read</span>
                </p>
                <Card.Text>{item.detail}
                </Card.Text>
                <CardButton>Read More</CardButton>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard
