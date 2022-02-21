import customerLogo1 from '../images/Services/customers-logo01.jpg'
import customerLogo2 from '../images/Services/customers-logo02.png'
import customerLogo3 from '../images/Services/customers-logo03.jpeg'
import customerLogo4 from '../images/Services/customers-logo04.jpg'
import customerLogo5 from '../images/Services/customers-logo05.jpg'
import customerLogo6 from '../images/Services/customers-logo06.jpg'
import customerLogo7 from '../images/Services/customers-logo07.jpg'
import customerLogo8 from '../images/Services/customers-logo08.jpg'
import customerLogo9 from '../images/Services/customers-logo09.jpg'
import customerLogo10 from '../images/Services/customers-logo10.png'
import customerLogo11 from '../images/Services/customers-logo11.png'
import customerLogo12 from '../images/Services/customers-logo12.png'
import customerLogo13 from '../images/Services/customers-logo13.jpg'
import customerLogo14 from '../images/Services/customers-logo14.jpeg'
import customerLogo15 from '../images/Services/customers-logo15.jpg'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const customers = [
    {
        id:1,
        logo:customerLogo1
    },
    {
        id:2,
        logo:customerLogo2
    },
    {
        id:3,
        logo:customerLogo3
    },
    {
        id:4,
        logo:customerLogo4
    },
    {
        id:5,
        logo:customerLogo5
    },
    {
        id:6,
        logo:customerLogo6
    },
    {
        id:7,
        logo:customerLogo7
    },
    {
        id:8,
        logo:customerLogo8
    },
    {
        id:9,
        logo:customerLogo9
    },
    {
        id:10,
        logo:customerLogo10
    },
    {
        id:11,
        logo:customerLogo11
    },
    {
        id:12,
        logo:customerLogo12
    },
    {
        id:13,
        logo:customerLogo13
    },
    {
        id:14,
        logo:customerLogo14
    },
    {
        id:15,
        logo:customerLogo15
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
}

function OurCustomers() {
    return (
        <div className='mb-5 pb-5 customers-slider'>
        <Slider {...settings}>
            {
                customers.map((customer)=>{
                    return (
                        <div className='p-5' key={customer.id}>
                            <img className='w-100' src={customer.logo}></img>
                         </div>
                    )
                })
            }
        </Slider>
                    </div>
    )
}

export default OurCustomers
