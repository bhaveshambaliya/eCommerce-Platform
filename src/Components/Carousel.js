import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card } from 'react-bootstrap'
import market from "../images/item-14.jpg";
import hatter from "../images/item-11.jpg";
import padre from "../images/item-10.jpg";

const data = [
    {
      id: 1,
      image: market,
      title: "Marketplace Fresh",
      desp: "Alex’s team makes sure everything's serviced, working correctly, that we're not paying too much. It's their personalised service that makes them the best - they’ll come out, take measurements, work out what will fit and what will display the food best, what will help us sell more.",
    },
    {
      id: 2,
      image: hatter,
      title: "The Hatter & The Hare",
      desp: "Flexikitch provides businesses with flexibility. They take care of the customers and want to work together with you. Arthur has given us a lot of advice, he always recommends the right product for us.",
    },
    {
      id: 3,
      image: padre,
      title: "Padre Coffee",
      desp: "Flexikitch understands our business model, they know what is important to us and they make it happen. Having that two-way relationship creates values for us and we believe that this is key to having a long-term relationship with all suppliers.",
    },
    {
        id: 4,
        image: market,
        title: "Marketplace Fresh",
        desp: "Alex’s team makes sure everything's serviced, working correctly, that we're not paying too much. It's their personalised service that makes them the best - they’ll come out, take measurements, work out what will fit and what will display the food best, what will help us sell more.",
      },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

function Carousel() {

    return (
        <div id='review-slider'>
            <Slider {...settings} className='mt-5'>
                {
                    data.map((item)=>{
                        return (
                            <div>
                            <Card key={item.id} className='me-3 border-0'>
                                <Card.Img src={item.image}></Card.Img>
                                <Card.Body className='py-4'>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.desp}</Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Carousel
