import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import BenefitBox from "../../Components/BenefitBox";
import FinanceCalc from "../../Components/FinanceCalc";
import fkFinancebg from "../../images/fk-finance-bg.jpg";

const FinanceBg = styled.div`
  background: url(${fkFinancebg});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Finance() {
  
  return (
    <div>
      <FinanceBg>
        <div style={{ backgroundColor: "rgba(252, 249, 243, .75)" }}>
          <Container className="p-5">
            <Row>
              <Col lg={6} className="pe-lg-5">
                <div className="col-lg-9 pt-lg-5">
                  <h2 style={{ color: "#f26449" }}>
                    Flexikitch Specialist Hospitality Finance
                  </h2>
                  <p className="fs-5 py-3">
                    Whether you need commercial catering equipment or commercial
                    kitchen supplies, Flexikitch can help. Our unique
                    hospitality finance business and knowledge of the
                    hospitality industry enables us to give you all the advice
                    and support you need to turn your vision into a reality.
                  </p>
                </div>
                <div className="finance-calculator border border-0 rounded-3 text-center p-4 pt-5 me-lg-5">
                <h4 className="text-start ms-3">Weekly Rental</h4>
                  <FinanceCalc/>
                  <button className="calc-btn mt-4">
                    Full Financial Calculator
                  </button>
                </div>
              </Col>
              <Col lg={6} className='p-0 py-5'>
               <BenefitBox/>
              </Col>
            </Row>
          </Container>
        </div>
      </FinanceBg>
    </div>
  );
}

export default Finance;
