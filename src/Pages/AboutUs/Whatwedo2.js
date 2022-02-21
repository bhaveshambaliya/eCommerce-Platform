import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import iconEquip from "../../images/About/icon-equip.png";
import iconFinance from "../../images/About/icon-finance.png";
import iconWarranty from "../../images/icon-equipmentservice.png";
import iconFleet from "../../images/About/icon-fleet.png";
import AboutAcord from "../../Components/AboutAcord";
import whatwedoImg2 from '../../images/About/what-we-do-img2.jpg'
import Carousel from '../../Components/Carousel'
import GuaranteeComp from "../../Components/GuaranteeComp";

const coreServices = [
  {
    id: 1,
    pic: iconEquip,
    service: "Equipment",
    detail:
      "We have a wide range of new and ex-rental hospitality equipment, available for purchase or finance.",
  },
  {
    id: 2,
    pic: iconFinance,
    service: "Finance",
    detail:
      "We will find you the right finance solutions for your business, that won’t impede your financial freedom.",
  },
  {
    id: 3,
    pic: iconWarranty,
    service: "Service Warranty",
    detail:
      "Ongoing service of your rental equipment is our highest priority. We extend service cover for the lifetime of the rental contract, to ensure your security and peace of mind.",
  },
  {
    id: 4,
    pic: iconFleet,
    service: "Fleet Management",
    detail:
      "If you are looking to expand your brand presence, our expertise will enable your business to scale to the next level.",
  },
];



const accordion2Data = [
  {
    id:1,
    question:'1. The Right Solution',
    answers:["At Flexikitch, we pride ourselves on finding the right equipment to suit your business activities"]
  },
  {
    id:2,
    question:'2. Dedicated Equipment Consultant',
    answers:["Before anything else, we’re equipment specialists. We listen to you and provide a variety of solutions to suit your individual needs and budget requirements Each customer is assigned a dedicated sales representative to guide you at every step. We’ll work with you to design the layout, all the way to the installation where we’ll even figure out how to get the equipment in the door."]
  },
  {
    id:3,
    question:'3. Finance Option Available',
    answers:["The credit environment is constrained, and there are significant roadblocks to accessing funding. If cash flow is tight, we offer in house funding solutions, with finance approval granted in less than 24 hours."]
  },
  {
    id:4,
    question:'4. Finance Benefits',
    answers:["As our name says, customer flexibility is our priority. Our model is designed to help your business scale and grow. Upgrade or downgrade your equipment to suit your business needs at any stage, without penalty."]
  },
  {
    id:5,
    question:'5. Peace of Mind',
    answers:["Quick, efficient service is a value we treasure and that is our promise to customers. If you’re wanting to buy the equipment outright, we will provide the payout figure before the end of the day. We are also the only equipment financier offering comprehensive warranty on all rental equipment across the industry nationwide. This means that for the duration of rental, if your equipment breaks down we’ll organise and pay for a technician to fix it."]
  },
]
function Whatwedo2() {
  return (
      <>
    <div id="core-services" className='pt-5'>
      <Container className="pt-5 text-center">
        <h3 className="fw-bold">Our Core Services</h3>
        <hr
          style={{
            width: "10%",
            margin: "15px auto",
            height: "3px",
            color: "#f26449",
            opacity: "1",
          }}
        />
        <Row className='pt-4'>
          {coreServices.map((service) => {
            return (
              <Col md={6} key={service.id} className="d-md-flex border-bottom p-5">
                <img height={90} src={service.pic}></img>
                <div className="text-md-start py-4 p-md-0 my-auto ms-md-5">
                  
                  <h5 className="fw-bold">{service.service}</h5>
                  <p>{service.detail}</p>
                  <button id="learn-more">Learn More</button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
    <div id='abt-guarantee' className='p-5'>
        <div className='px-md-5 py-4'>
            <h5>Our Gurantee</h5>
            <GuaranteeComp/>
        </div>

    </div>
        <Container className='my-md-5 iframe-container'>
          <iframe  className='responsive-iframe' src="https://www.youtube.com/embed/HGvKk6FbH3s?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Container>
          <Container className='py-5'>
            <h1 className='display-5 fw-bold'>Our Turnkey Solution
            </h1>
            <hr style={{width:"15vw",height:'3px',color:'#f26449',opacity:'1'}}></hr>
            <Row className='pt-4'>
              <Col md={6}>
                <h4>Why we do what we do</h4>
                <p>We’re business owners too, and we know the struggle of running a hospitality organisation. Our entire product is built to reduce that burden and help you focus on what you need to do. You’re not just a transaction to us, but a story that we’re proud to be a part of - and we want to grow together.</p>
                <AboutAcord accordData={accordion2Data}/>
              </Col>
              <Col md={6} className='ps-5 pe-0 d-none d-md-block'>
                <img className='w-100' src={whatwedoImg2} alt='what-we-do-img2'></img>
              </Col>
            </Row>
          </Container>
            <Container className='py-5'>
              <h4 className='pb-4'>Cutomer Testimonials</h4>
              <Carousel></Carousel>
            </Container>
    </>
  );
}

export default Whatwedo2;
