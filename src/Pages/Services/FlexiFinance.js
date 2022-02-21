import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import AboutAcord from "../../Components/AboutAcord";
import BenefitBox from "../../Components/BenefitBox";
import FinanceCalc from "../../Components/FinanceCalc";
import flexiFinanceBgImg from "../../images/Services/hero-service-1.jpg";
import heroServiceText from "../../images/Services/hero-service-text.png";
import swish from "../../images/Services/swish.png";
import CostCalculator from "../../Components/CostCalculator";
import CalcButtons from "../../Components/CalcButtons";
import EquipSection from "../../Components/EquipSection";

const CalcButton = styled.button`
  padding: 10px 0;
  width: 50%;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid gainsboro;
  border-bottom: ${(props) => props.theme.bottom};
  background-color: ${(props) => props.theme.bgcolor};
  color: rgba(0, 0, 0, 0.75);

  :hover {
    color: #f26449;
  }
`;
CalcButton.defaultProps = {
  theme: {
    bgcolor: "transparent",
    bottom: "1px solid gainsboro",
  },
};

const CalcBtnClick = {
  bgcolor: "#f8f4ec",
  bottom: "1px solid transparent",
};

const FlexiFinanceBg = styled.div`
  background-image: url(${flexiFinanceBgImg});
  width: 100%;
  height: 100%;
  position: fixed;
  top: 108px;
  z-index: -1;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

const flexiFinanceAccord = [
  {
    id: 1,
    question: "What is the minimum rental period?",
    answers: [
      "Flexikitch Finance works with a 12-month minimum term. After that stage, you can continue to rent &ndash and after 3 years of continuous rental you will own the equipment outright.",
    ],
  },
  {
    id: 2,
    question: "What equipment can I finance?",
    answers: [
      "Any equipment that is serialised within the hospitality industry and has an invoice value above $3,000.",
      "We may limit our standard inclusions for specialised and/or high value appliances",
    ],
  },
  {
    id: 3,
    question: "Can I change equipment at any time?",
    answers: [
      "Yes, you can upgrade or downgrade equipment at any time, allowing you the flexibility to grow your business.",
    ],
  },
  {
    id: 4,
    question: "What happens if equipment breaks down?",
    answers: [
      "We provide all Flexikitch Rentals with ongoing breakdown service cover for the lifetime of contract. It’s vital to us that you have a seamless experience, and that is why we have decided to extend service cover past the manufacturer’s warranty for the lifetime of rental.",
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

export const CalcBtnContext = React.createContext();

function FlexiFinance() {
  return (
    <div className="">
      <FlexiFinanceBg></FlexiFinanceBg>
      <div className="py-5 px-md-5">
        <Container className="p-5">
          <img
            style={{ maxWidth: "80%" }}
            src={heroServiceText}
            alt="hero-service-text"
          ></img>
          <h5 className="text-white ps-2" style={{ marginTop: "-30px" }}>
            We believe in the Australian dream of business ownership
            <br />
            and we endeavour to provide you with the right tools without
            <br />
            compromising your financial freedom.
          </h5>
        </Container>
      </div>
      <img
        style={{ opacity: "0.95" }}
        className="w-100"
        src={swish}
        alt="swish"
      ></img>
      <div
        className="px-md-5"
        style={{ backgroundColor: "rgba(248,244,236,0.95)" }}
      >
        <Container className="py-5">
          <Row>
            <Col md={6} className="p-5">
              <h5 className="fw-bold">
                Flexikitch is a full-service hospitality financier. We've built
                our philosophy around sharing risk and supporting our customers'
                businesses as they change and grow.
              </h5>
              <p className="py-5 m-0">
                Running a hospitality business is no simple task, and we want to
                help you on the journey. We pride ourselves on finding you the
                right solutions for your business, and our finance product is
                developed with this one goal in mind. We aim to provide you with
                a solution that does not impede your financial freedom.
              </p>
              <div id="flexifin-accord" className="py-5">
                <AboutAcord accordData={flexiFinanceAccord} />
              </div>
            </Col>
            <Col md={6}>
              <div className="col-md-9 col-11 py-5 mx-auto">
                <h4 className="mb-3" style={{ color: "#f26449" }}>
                  Flexikitch finance benefits
                </h4>
                <BenefitBox />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="px-md-5 pt-5 border-bottom"
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        <Container className="py-5 px-md-5">
          <h3 className="text-center">Finance Calculator</h3>
          <hr
            className="mx-auto"
            style={{
              width: "10%",
              color: "#f26449",
              height: "3px",
              opacity: "1",
            }}
          ></hr>
          <div className="pt-5" style={{ color: "#f26449" }}>
            <h5 className="ms-4">Enter Equipment Value</h5>
            <FinanceCalc />
          </div>
        </Container>
        <Container className="px-5" id='flexifin-calcBtn'>
          <CalcButtons />
        </Container>
      </div>
      <div className="px-md-5 py-5" id="flexifin-calculator">
        <Container className='p-5'>
        <CostCalculator />
        </Container>
        <div className='text-center pt-5 mt-5'>
        <button className='bigButton'>Apply for Finance</button></div>
      </div>
      <EquipSection/>
      <div className="flexifinance-details">
        <Container className="py-5">
          <div className="pb-3">
            <h5 className="mb-4">Flexikitch Finance</h5>
            <p>
              Kitting out a commercial kitchen requires the expertise and
              experience of a professional chef or restaurateur. Knowing what
              equipment is needed, what will fit into the space–and how to use
              it–is essential in order to run a business in the food industry.
              But there’s one critical step to be considered before you even set
              about choosing your equipment; it's actually getting the finance
              for the equipment. Few people have enough cash lying around to buy
              restaurant equipment outright; typically finance for a restaurant
              would come from investors or banks. With Flexikitch finance,
              however, financing your restaurant equipment is that much easier.
            </p>
          </div>
          <div className="pb-3">
            <h5 className="mb-4">How Flexikitch Finance Works</h5>
            <p>
              Banks don’t have the same insider knowledge we have, which is why
              we are perfectly positioned to tailor your financial solution to
              your needs. Traditionally, you would buy your equipment based on
              recommendations and persuasive marketing. A better way to choose
              your equipment is by getting advice from food industry
              professionals and renting your equipment first. To start off, you
              select your equipment, pay a deposit, and pay your weekly rental
              fee. This way, you get to work with the equipment and ensure that
              you have selected the correct item before you commit. With our
              rent to own option, after a minimum of 12 months, you can purchase
              your rental outright. If you prefer, you can continue to rent your
              item for three years, at which point your rental becomes your own
              professional kitchen equipment. This way, you know what you’re
              getting.
            </p>
          </div>
          <div className="pb-3">
            <h5 className="mb-4">Flexikitch Finance Perks</h5>
            <p>
              Unlike traditional financial institutions, Flexikitch offers you
              the flexibility to upgrade or downgrade your equipment whenever
              you need to. Whether you have selected equipment too
              conservatively and you need greater capacity, or if you need to
              streamline your kitchen, you can upgrade or downgrade your kitchen
              equipment as required. If you are initially renting your equipment
              from us, it’s easy for us to tailor your rental equipment to your
              requirements as your business responds to the market. This
              not-so-little perk ensures that you are not stuck with equipment
              which isn’t suited to your needs, and you don’t have to sell the
              item to buy another more suitable one.
            </p>
          </div>
          <div className="pb-3">
            <h5 className="mb-4">Flexikitch Saves the Day</h5>
            <p>
              No matter what industry you are in and no matter what equipment
              you use, technical difficulties are part of life. Downtime can be
              debilitating, though. To keep your kitchen cooking, Flexikitch
              rentals come with breakdown service cover over the course of the
              contract - even if the equipment is no longer under the
              manufacturer’s warranty. This added perk ensures you aren’t left
              to starve when things don’t go according to plan. You simply give
              us a call, and we will send a technician over to get your
              equipment back up and running in no time.
            </p>
          </div>
          <div className="pb-3">
            <h5 className="mb-4">Why Use Flexikitch Finance</h5>
            <p>
              Whether you are building an establishment from the ground up or
              growing your business, your primary objective (on par with
              customer satisfaction) is to preserve your cash flow. Even if you
              are lucky enough to get funding or a bank loan, that money needs
              to last at least until your business has found its feet. By using
              Flexikitch Finance, you are able to secure the equipment you need
              without tying all your money up. If you opt to merely rent
              equipment, you will be left with nothing after three years. With
              Flexikitch, the money you spend renting equipment is not lost
              because you can buy it outright–at a reduced price–after a year or
              continue to rent for a further three years until you own the
              equipment. Should you choose to buy your equipment outright, your
              day-to-day finances are negatively impacted, leaving you with
              little wiggle room for emergencies.
            </p>
            <p>
              More than a flexible way to buy professional foodservice
              equipment, Flexikitch offers personalised service. We have
              real-life experience working in the foodservice industry, making
              it easier to recommend equipment. With our professional fleet, we
              can move and store your equipment nationally. We offer a vast
              range of professional kitchen equipment for refrigeration,
              warewashing, cooking, display, coffee, and various other
              appliances. For more advice or information,{" "}
              <a href="">get in touch</a> with us, or skip right ahead and give
              our <a href="">finance calculator</a> a go.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FlexiFinance;
