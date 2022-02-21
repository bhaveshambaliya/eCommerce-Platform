import React from "react";
import { Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import footerLogo from "../../images/flexi-logo.png";
import { navtabs } from "../Header/Navtabs";
import footerRefrg from "../../images/refrig-footer.png";
import footerCook from "../../images/cook-footer.png";
import footerWarewash from "../../images/warewash-footer.png";
import footerAppl from "../../images/appliances-footer.png";
import footerDisplay from "../../images/display-footer.png";
import footerCoffee from "../../images/coffee-footer.png";
import footerOther from "../../images/other-footer.png";
import footerClearance from "../../images/clearance-footer.png";
import footerPromo from "../../images/promo-footer.png";
import footerSearch from "../../images/search-footer.png";
import facebook from '../../images/facebook.jpg'
import insta from '../../images/instagram.jpg'
import linkedin from '../../images/linkedin.jpg'
import visa from '../../images/visa.jpg'
import mastercard from '../../images/mastercard.jpg'
import amex from '../../images/amex.jpg'
import paypal from '../../images/paypal.jpg'
import eway from '../../images/eway.jpg'
import afr from '../../images/afr.jpg'
import {GiSmartphone} from 'react-icons/gi'
import {AiOutlineMail} from 'react-icons/ai'

const footerProducts = [
  {
    id: 1,
    icon: footerRefrg,
    name: "Refrigeration",
  },
  {
    id: 2,
    icon: footerCook,
    name: "Cooking",
  },
  {
    id: 3,
    icon: footerWarewash,
    name: "Warewashing",
  },
  {
    id: 4,
    icon: footerAppl,
    name: "Appliances",
  },
  {
    id: 5,
    icon: footerDisplay,
    name: "Display",
  },
  {
    id: 6,
    icon: footerCoffee,
    name: "Coffee",
  },
  {
    id: 7,
    icon: footerOther,
    name: "Other",
  },
  {
    id: 8,
    icon: footerClearance,
    name: "Clearance",
  },
  {
    id: 9,
    icon: footerPromo,
    name: "Promotions",
  },
  {
    id: 10,
    icon: footerSearch,
    name: "Search",
  },
];

function Footer() {
  return (
    <div style={{zIndex:'500'}}>
      <div
        className="text-center border-top border-bottom p-5"
        style={{ backgroundColor: "#fbf8f2" }}
      >
        <img
          className="col-10 col-sm-8 col-lg-4"
          src={footerLogo}
          alt="footer-logo"
        ></img>
      </div>
      <div className="footer-middle border-top border-bottom p-5">
        <Row>
          <Col lg={7}>
            <Row>
              {navtabs
                .filter((item) => item.tab !== "Products")
                .map((itm) => {
                  return (
                    <Col lg={3} xs={6} className="text-center text-lg-start py-3">
                      <h6 className="pb-3">{itm.tab}</h6>
                      {itm.subtabs.map((subItem) => {
                        return ( 
                          <p>
                            <Link className='text-dark text-decoration-none' to={subItem.path}>
                            {subItem.tabName}
                          </Link>
                            </p>
                        )
                      })}
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col lg={5} className='py-3'>
            <h6>Products</h6>
            <div className="row p-4 text-center gap-2">
              {footerProducts.map((item) => {
                return (
                  <div className="p-2 ms-1 col-2" key={item.id}>
                    <img width={30} src={item.icon} alt={item.name}></img>
                    <p className="py-1">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      <hr></hr>
      <div>
        <Row>
          <Col md={7} className='d-flex flex-wrap justify-content-between align-items-center border-end py-3'>
            <div>
              <p className='float-start pe-3 mt-1 fw-bold'>Connect with us</p>
                <img className='me-1' width={30} src={facebook} alt='facebok'></img>
                <img className='me-1' width={30} src={insta} alt='instagram'></img>
                <img className='me-1' width={30} src={linkedin} alt='linkedins'></img>
            </div>
            <div>
              <p className='float-start pe-3 mt-2 fw-bold'>Shop securely with</p>
              <img className='mb-2 me-1' width={45} src={visa} alt='visa'></img>
              <img className='mb-2 me-1' width={45} src={mastercard} alt='mastercard'></img>
              <img className='mb-2 me-1' width={45} src={amex} alt='amex'></img>
              <img className='mb-2 me-1' width={45} src={paypal} alt='paypal'></img>
              <img className='mb-2 me-1' width={45} src={eway} alt='eway'></img>
            </div>
          </Col>
          <Col md={5} className='d-flex flex-wrap justify-content-around align-items-center py-3'>
            <div>
              <p className='m-0 text-nowrap fw-bold'>
              <GiSmartphone className='fs-4 me-2'></GiSmartphone>
                1300 769 161</p>
            </div>
            <div>
              <p className='m-0 text-nowrap fw-bold'>
              <AiOutlineMail className='fs-4 me-2'></AiOutlineMail>
                info@flexikitch.com.au</p>
            </div>
          </Col>
        </Row>
      </div>
      </div>
      <div style={{fontSize:'13px'}} className='px-5 bg-white'>
        <Row className='align-items-end text-center'>
          <Col md={4} className='py-3'>
            <img className='w-100' src={afr} alt='afr'></img>
          </Col>
          <Col md={4} className='py-3'>
            <p className='m-0'>Copyright © 2021 Flexikitch. All Rights Reserved.</p>
          </Col>
          <Col md={4} className='py-3'>
              <a className='border-end pe-2 text-dark'>Terms and Conditions</a>
              <a className='border-end px-2 text-dark'>Privacy Policy</a>
              <a href="#" className='ps-2 text-dark'>Refund and Exchange Policy</a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
