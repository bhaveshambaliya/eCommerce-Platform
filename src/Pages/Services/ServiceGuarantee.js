import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutAcord from "../../Components/AboutAcord";
import styled from "styled-components";
import serviceBgImg from "../../images/Services/service_hero.jpg";
import BenefitCardBox from "../../Components/BenefitCardBox";
import iconSteps from "../../images/Services/icon-steps.png";
import iconPeace from "../../images/Services/icon-peace.png";
import iconEquipService from "../../images/icon-equipmentservice.png";
import iconValue from "../../images/Services/icon-value.png";
import iconRepair from "../../images/Services/icon-repair.png";
import iconWebform from "../../images/Services/icon-webform.png";
import iconJob from "../../images/Services/icon-job.png";
import iconTechnician from "../../images/Services/icon-technician.png";
import serviceSlider1 from '../../images/Services/service-slider01.jpg'
import serviceSlider2 from '../../images/Services/service-slider02.jpg'
import serviceSlider3 from '../../images/Services/service-slider03.jpg'
import serviceSlider4 from '../../images/Services/service-slider04.jpg'
import serviceSlider6 from '../../images/Services/service-slider06.jpg'
import serviceSlider7 from '../../images/Services/service-slider07.jpg'
import serviceSlider8 from '../../images/Services/service-slider08.jpg'
import serviceSlider9 from '../../images/Services/service-slider09.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import EquipSection from "../../Components/EquipSection";


const ServiceBg = styled.div`
  background-image: url(${serviceBgImg});
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

const serviceGuaranteeAccord = [
  {
    id: 1,
    question: "What type of equipment is covered by Flexikitch Service?",
    answers: [
      "All Flexikitch Rentals valued above $1000 are provided with extended manufacturer’s warranty and break down service cover.",
    ],
  },
  {
    id: 2,
    question: "How long is my equipment covered by Flexikitch Service?",
    answers: [
      "We provide all Flexikitch Rentals with ongoing break down service cover for the lifetime of rental.",
      "We will organize and pay for a technician to fix the equipment when it breaks down, for the duration of rental.",
    ],
  },
  {
    id: 3,
    question: "How do I book a service request?",
    answers: ["Fill up the service request form here."],
  },
  {
    id: 4,
    question: "What isn’t covered on Flexikitch breakdown service policy?",
    answers: [
      "Installation faults where Flexikitch contractors were not the primary installer.",
      "Faults or breakdown due to user error where it is clear that the equipment has been used or operated incorrectly against manufacturer guidelines.",
      "Faults or breakdowns due to poor maintenance or lack of equipment cleaning.",
      "Consumable components that are not integral to the primary mechanical operation of the appliance (filters, handles, light globes, etc).",
    ],
  },
];

const ServiceGuaranteeBenefits = [
  {
    id: 1,
    icon: iconSteps,
    benefit: "Straight forward process",
    descrip:
      "Book a job with our service team over the phone or via the website.",
  },
  {
    id: 2,
    icon: iconPeace,
    benefit: "Peace of mind",
    descrip: "Customers receive updates at each stage for peace of mind.",
  },
  {
    id: 3,
    icon: iconEquipService,
    benefit: "Full-Service cover",
    descrip:
      "Flexikitch will organize and pay for a technician to fix the equipment when it breaks down, for the duration of rental.",
  },
  {
    id: 4,
    icon: iconValue,
    benefit: "Added value of finance plus service",
    descrip:
      "We are the only equipment financier across the Hospitality Industry in Australia providing extended service cover on rental equipment.",
  },
];

const serviceProcess = [
  {
    id:1,
    icon:iconRepair,
    step:'Repair required',
    detail:'Sometimes, stuff happens!'
  },
  {
    id:2,
    icon:iconWebform,
    step:'Complete webform',
    detail:'Or call our dedicated service team to book a job.'
  },
  {
    id:3,
    icon:iconJob,
    step:'Job confirmed',
    detail:'We will send confirmation when case details are received.'
  },
  {
    id:4,
    icon:iconTechnician,
    step:'Technician dispatched',
    detail:'A technician will be sent ASAP to ensure you get back to full service.'
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const serviceSliderImages = [serviceSlider1,serviceSlider2,serviceSlider3,serviceSlider4,serviceSlider6,serviceSlider7,serviceSlider8,serviceSlider9]

function ServiceGuarantee() {
  return (
    <div>
      <ServiceBg></ServiceBg>
      <Container style={{ paddingTop: "200px" }}>
        <div className="p-5 col-md-8 col-lg-7 text-white">
          <h2>Flexikitch</h2>
          <hr style={{ width: "70%", height: "3px", opacity: "1" }}></hr>
          <h1 className="display-4 fw-bold">Service Guarantee</h1>
          <p className="py-5 fs-4">
            Time is of the essence in the hospitality industry, and that’s why
            we are proud of our service guarantee to repair your broken down
            equipment with a great sense of urgency.
          </p>
        </div>
      </Container>
      <div className="px-lg-5">
        <Row className="mx-0">
          <Col
            md={6}
            className="p-5 mb-5 mb-md-0"
            style={{ backgroundColor: "#ffffffe6" }}
          >
            <div className="py-4 col-lg-9 mx-auto">
              <p className="fw-bold fs-5">
                Ongoing services of your rental equipment is our highest
                priority. We are the only equipment financier that has a
                comprehensive warranty on all retail equipment across the
                industry nation wide.
              </p>
              <hr
                style={{
                  width: "85%",
                  height: "3px",
                  color: "#f26449",
                  opacity: "1",
                }}
              ></hr>
              <p className="mb-5 pb-3">
                Time is the essence in the hospitality industry and that's why
                we are proud of our service gurantee to repair your broken down
                equipment with great sense of urgency.
              </p>
              <AboutAcord accordData={serviceGuaranteeAccord} />
            </div>
          </Col>
          <Col md={6} className="p-5 text-center mt-5 mt-md-0 serv-beni-col">
            <div className="py-4 text-start col-lg-9 mx-auto">
              <h5 className="mb-5" style={{ color: "#f26449" }}>
                Benefits of our service guarantee
              </h5>
              <BenefitCardBox benefitsArray={ServiceGuaranteeBenefits} />
            </div>
            <button className="bigButton mt-5 px-5">
              Request a service or repair
            </button>
          </Col>
        </Row>
      </div>
      <div
        className="mx-lg-5 text-center py-5"
        style={{ backgroundColor: "#ffffffe6" }}>
        <h3 className="pt-5">Our Service Process</h3>
        <hr
          className="mx-auto"
          style={{
            color: "#f26449",
            height: "3px",
            width: "10vw",
            opacity: "1",
          }}
        />
        <Row className='mx-sm-5 mt-5 px-5'>
          {
            serviceProcess.map((item)=>{
              return (
                <Col md={3} xs={6} className=''>
                  <Card
            key={item.id}
            className="bg-transparent align-items-center my-2 border-0"
          >
            <img width={70} height={80} src={item.icon} alt=""></img>
            <Card.Body>
              <h6 className='text-nowrap'>{item.step}</h6>
              <hr
                style={{
                  color: "#f26449",
                  height: "2px",
                  opacity: "1",
                }}
              />
              <Card.Text>{item.detail}</Card.Text>
            </Card.Body>
          </Card>
                </Col>
              )
            })
          }
        </Row>
        <button className="bigButton mt-5 px-5">
              Request a service or repair
            </button>
      </div>
      <div className="mx-lg-5 mb-5 text-center py-5 bg-white">
      <h3 className="pt-5">Installations</h3>
        <hr
          className="mx-auto"
          style={{
            color: "#f26449",
            height: "3px",
            width: "10vw",
            opacity: "1",
          }}
        />
        <p className='px-5 mx-5 pt-2'>Selling you equipment does not mean that our job is over. We’ll work with you to ensure installation is done right; and the equipment has been commissioned for use. Educating people on how to use and maintain equipment is something that we’re passionate about.</p>
        <div className='customers-slider'>
          <Slider {...settings}>
            {
              serviceSliderImages.map((image)=>{
                return (
                  <div>
                  <img className='w-100' src={image} alt=''></img>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
      <EquipSection/>
    </div>
  );
}

export default ServiceGuarantee;
