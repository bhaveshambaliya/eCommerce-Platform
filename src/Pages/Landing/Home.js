import React from "react";
import banner from "../../images/home-bg.jpg";
import promo1 from '../../images/promo-1.jpg';
import promo2 from '../../images/promo-2.jpg';
import fkWork from '../../images/fk-howworks.jpg';
import fkProduct from '../../images/fk-howworks-product.jpg';
import fkService from '../../images/fk-howworks-service.jpg';
import iconFlexiwork from '../../images/icon-howflexiworks.png'
import iconEquip from '../../images/icon-equipment.png'
import iconEquipService from '../../images/icon-equipmentservice.png'
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Banner = styled.div`
  background: url(${banner});
  width: 100%;
  height: 75vh;
  background-size: cover;

  div {
    padding-top: 125px;
  }
`;

function Home() {
  return (
    <div style={{ paddingTop: "108px" }}>
      <Banner>
        <div className="mx-md-5 ps-md-4 col-md-6 mx-auto col-8 text-center text-md-start text-white">
          <h1 className="display-5 fw-bold">
            Hospitality Finance & Commercial Kitchen Equipment
          </h1>
          <p className="py-2 fs-5">
            All in one place help you get started and grow
          </p>
          <button className="inq-btn">Inquire Now</button>
        </div>
      </Banner>
      <div className='promo-box py-3'>
          <Container className='py-5'>
          <h4 className='py-4'>Current Promotions</h4>
          <Slider arrows={false} autoplay={true} slidesToShow={1} slidesToScroll={1} dots={true} fade={true}>
              <div>
                  <img className='w-100' src={promo1} alt='promo-1'></img>
              </div>
              <div>
                  <img className='w-100' src={promo2} alt='promo-2'></img>
              </div>
          </Slider>
          </Container>
      </div>
      <Container className='py-5' style={{color:'#414242'}}>
     <Row>
         <Col lg={4}>
             <Card className='border-0'>
                 <Card.Img style={{minHeight:'237px'}} src={fkWork}></Card.Img>
                 <Card.Body className='d-flex gap-3 align-items-center'>
                     <img width={50} src={iconFlexiwork}></img>
                     <Card.Title>
                         How Flexikitch Works</Card.Title>
                 </Card.Body>
             </Card>
         </Col>
         <Col lg={4}>
             <Card className='border-0'>
                 <Card.Img src={fkProduct}></Card.Img>
                 <Card.Body className='d-flex gap-3 align-items-center'>
                     <img width={50} src={iconEquip}></img>
                     <Card.Title>
                         Browse our equipment</Card.Title>
                 </Card.Body>
             </Card>
         </Col>
         <Col lg={4}>
             <Card className='border-0'>
                 <Card.Img src={fkService}></Card.Img>
                 <Card.Body className='d-flex gap-3 align-items-center'>
                     <img width={50} src={iconEquipService}></img>
                     <Card.Title>
                         Service Request</Card.Title>
                 </Card.Body>
             </Card>
         </Col>
        
     </Row>
     </Container>
     <div className='blank'>
     </div>
    </div>
  );
}

export default Home;
