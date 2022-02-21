import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import AboutAcord from "../../Components/AboutAcord";
import abtbanner1 from "../../images/About/turnkey-hero.jpg";
import iconBrowse from "../../images/About/icon-browse.png";
import iconSelect from "../../images/About/icon-select.png";
import iconCashflow from "../../images/icon-cashflow.png";
import iconContract from "../../images/About/icon-contract.png";
import iconCart from "../../images/icon-purchase.png";
import Whatwedo2 from "./Whatwedo2";

const AboutBanner = styled.div`
  background: url(${abtbanner1});
  width: 100%;
  padding: 8.5rem 0 0rem;
  background-size: cover;
`;

const flexiFinanceOffers = [
  {
    id: 1,
    icon: iconBrowse,
    heading: "Personalised solutions",
    text: "make decisions with the advice of our experienced sales team",
  },
  {
    id: 2,
    icon: iconSelect,
    heading: "Select your equipment",
    text: "with the option to upgrade or downgrade",
  },
  {
    id: 3,
    icon: iconCashflow,
    heading: "Preserve your cashflow",
    text: "only 10% deposit of total value up front",
  },
  {
    id: 4,
    icon: iconContract,
    heading: "12-month contract",
    text: "give your business flexibility with a short minimum term",
  },
  {
    id: 5,
    icon: iconCart,
    heading: "Purchase anytime",
    text: "after 12 months, or own your equipment outright after 3 years",
  },
];

const accordion1Data = [
  {
    id: 1,
    question: "Can I purchase equipment outright?",
    answers: [
      "Yes – we are a dealer of commercial hospitality equipment, with access to suppliers nationally. We will give you the best price we can, and work with you to provide a competitive package.",
    ],
  },
  {
    id: 2,
    question: "What equipment can I finance?",
    answers: [
      "Any equipment that is serialised within the hospitality industry and has an invoice value above $3,000.",
    ],
  },
  {
    id: 3,
    question: "What are my financing options?",
    answers: [
      "Flexikitch Finance works with a 12-month minimum term. After that, you can continue to rent – and after 3 years of continuous rental you will own the equipment outright",
      "We also provide ongoing service cover for your equipment past the manufacturer’s warranty. It’s vital to us that you have a smooth experience, so we extend service cover past the manufacturer’s warranty.",
    ],
  },
  {
    id: 4,
    question: "Can I change equipment later?",
    answers: [
      "Yes, you can upgrade or downgrade equipment at any time, allowing you the flexibility to grow your business.",
    ],
  },
  {
    id: 5,
    question: "How do I get started?",
    answers: [
      "Complete the form at this link and one of our sales team will get in touch with you.",
      "Alternatively, head over to this link for pre-approval on finance for equipment up to $20,000 or contact us on 1300 769 161.",
    ],
  },
];

function Whatwedo() {
  return (
    <div>
      <AboutBanner>
        <Container className="py-5">
          <div className="pt-5 text-white col-lg-6 col-md-8">
            <h1 className="display-5 fw-bold">
              Hospitality Equipment, Finance, Service & Know How
            </h1>
            <hr style={{ height: "3px", opacity: "1" }} className="w-50"></hr>
            <p className="py-2 mb-5 fs-3" style={{ color: "#f26449" }}>
              All in one place
            </p>
            <h4>
              Flexikitch is a full-service hospitality financier offering
              personalised equipment solutions and ongoing maintenance and
              service to a broad range of customers throughout Australia.
            </h4>
          </div>
        </Container>
      </AboutBanner>
        <Row className="ps-md-5">
          <Col
            md={6}
            className="p-5 order-md-2"
            style={{ backgroundColor: "#fdfaf4" }}
          >
            <div className="py-md-5">
              <h5 className="fw-bold py-3" style={{ color: "#f26449" }}>
                If you need finance to help business cashflow, Flexikitch
                Finance offers
              </h5>
            </div>
            <div>
              {flexiFinanceOffers.map((offer) => {
                return (
                  <div className="d-flex align-items-center py-4">
                    <img width={65} src={offer.icon} alt={offer.heading}></img>
                    <span className="ms-4">
                      <h5>{offer.heading}</h5>
                      <p className="m-0">{offer.text}</p>
                    </span>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={6} className="p-5 order-md-1">
            <div className="py-md-5">
              <h5 className="fw-bold py-3">
                We know what it’s like to turn a vision into reality because
                we’ve stood behind the espresso machine and over the cooktop.
                We’ve paced nervously on opening night. And we’ve experienced
                the buzz of a full house.
              </h5>
              <hr
                style={{
                  height: "3px",
                  backgroundColor: "#f26449",
                  opacity: "1",
                  width: "75%",
                }}
              ></hr>
              <p className="py-3">
                Choose from a wide range of ex-rental or brand-new hospitality
                equipment to suit your business needs. We keep the process
                simple and transparent, and our sales staff will be with you all
                the way to answer any questions you might have.
              </p>
            </div>
            <div>
              <AboutAcord accordData={accordion1Data} />
            </div>
          </Col>
        </Row>
        <Whatwedo2/>
    </div>
  );
}

export default Whatwedo;
