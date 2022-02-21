import React from "react";
import iconWedo from "../../images/icon-whatwedo.png";
import iconGuarantee from "../../images/icon-ourguarantee.png";
import iconEquipService from "../../images/icon-equipmentservice.png";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col lg={6} className='pe-5'>
            <h3>About Us</h3>
            <p className="fs-5 py-3" style={{lineHeight:'40px'}}>
              We offer personalised restaurant, hospitality and retail equipment
              solutions, as well as new, second-hand and rental equipment,
              financing options if you need them and priority ongoing servicing
              of your rental equipment.
            </p>
            <hr
              style={{ color: "#f26449", width: "40%", padding: "1px 0" }}
            ></hr>
            <p className="py-3" style={{lineHeight:'32px'}}>
              More than financing and equipment, Flexikitch ensures that the
              entire process is smooth and seamless. Once you’ve selected your
              hospitality equipment and specified your preferred finance method,
              we’ll ensure that your equipment is delivered promptly so you can
              get back up and running.
            </p>
            <a className="fw-bold text-secondary" href="#">
              Read More
            </a>
          </Col>
          <Col lg={6} className='pt-3'>
            <div className='px-5 py-4 border-bottom'>
              <img className='float-start me-3' width={50} src={iconWedo} alt="what-we-do"></img>
              <h4 className='py-2'>What we do</h4>
              <p className='py-1'>
                We combine distribution of hospitality equipment with flexible
                funding and service cover
              </p>
              <button className='learn-btn'>Learn More</button>
            </div>
            <div  className='px-5 py-4 border-bottom'>
              <img className='float-start me-3' width={50} src={iconGuarantee} alt="what-we-do"></img>
              <h4 className='py-2'>Our Guarantee</h4>
              <p  className='py-1'>
              If you are dissatisfied with anything, let us know so we can make it right.
              </p>
              <button className='learn-btn'>Learn More</button>
            </div>
            <div  className='px-5 py-4'>
              <img className='float-start me-3' width={50} src={iconEquipService} alt="what-we-do"></img>
              <h4 className='py-2'>Equipment Service</h4>
              <p  className='py-1'>
              We are the only equipment financier with warranty on all rental equipment.
              </p>
              <button className='learn-btn'>Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
