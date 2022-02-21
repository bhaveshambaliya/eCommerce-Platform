import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { useParams } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exRentalProducts } from "../../Products/Ex-Rental & Clearance/ExRentClea";
import flexiFinanceLogo from "../../images/flexi-finance-logo.png";
import MediaQuery from "react-responsive";
import iconPDF from '../../images/icon-pdf.svg'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { addtoCart } from "../../App";

function ProductDetails({addToCart,cartItems,cartValue}) {
  const { path } = useParams();
  const product = exRentalProducts.find((product) => product.path === path);

  const [alertShow, setalertShow] = useState(false)
  const addCartHandler =(product)=>{
    addToCart(product)
    setalertShow(true)   
  }

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="h-100 w-100" src={product.pic[i]}></img>
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<MdArrowBackIos/>,
    nextArrow: <MdArrowForwardIos/>
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [path])

  return (
    <div className="py-5 mt-5">
      <Container fluid className="p-5">
      <Breadcrumb
        style={{ fontSize: "14px", color: "#f26449" }}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Ex-Rental & Clearance</BreadcrumbItem>
      </Breadcrumb>
      {
        alertShow ? 
        <Alert className='text-center' variant='success'>You added <span className='text-capitalize'>{product.name
      }</span> to your <Link to='/shopping-cart'>shopping cart</Link>.</Alert> : null
    }
      </Container>
      <Container fluid>
        <Row className="px-3">
          <Col
            md={5}
            style={{ overflowX: "clip" }}
            className="position-relative px-0 pb-5"
          >
        
            <div id="product-dinkus">Ex-Rental</div>
            <Slider {...settings} className="product-slider h-100">
              {product.pic.map((picture,index) => {
                return (
                  <div key={index} className="px-5 border w-100">
                    <img className="mx-auto w-100" src={picture}></img>
                  </div>
                );
              })}
            </Slider>
            
          </Col>
          <Col md={7} className="ps-md-4">
            <div className="fs-5 mb-2">
              <span className="me-3">In Stock</span>
              <span>Onwave HP250 SN:LI405040</span>
            </div>
            <div className="d-md-flex justify-content-between">
              <h2 className="text-capitalize mb-3 w-100 w-md-75">{product.name}</h2>
              <img width="25%" height='100%' className="mb-3" src={product.logo}></img>
            </div>
            <h4 className="mb-3">RRP${product.rrp}</h4>
            <div className="product-price-box d-md-flex align-items-center gap-3">
              <div className="w-100 pe-md-3 mb-3 pro-price-btn-box">
                <button className="wishlistBtn">Save to Wishlist</button>
                <button className="compareBtn">Compare</button>
                <h6 className="my-3">Buy Outright</h6>
                <h2 className="" style={{ color: "#f26449" }}>
                  <sup>$</sup>
                  {(product.buy[0]).toFixed(2)}
                  <sub className="fs-6 text-secondary">+GST</sub>
                </h2>
                <MediaQuery minWidth={768}>
                  <button onClick={()=>addCartHandler(product)} className="add-cart-btn mt-2">ADD TO CART</button>
                </MediaQuery>
              </div>
              <div className="w-100 p-3 mb-3 flexi-finance-box">
                <img className="w-100" src={flexiFinanceLogo}></img>
                <hr className="my-2"></hr>
                <h6>Rent</h6>
                <h2 className="mb-4" style={{ color: "#f26449" }}>
                  <sup>$</sup>
                  {product.weeklyRent[0].toFixed(2)}
                  <sub className="fs-6 text-white"> per week + GST</sub>
                </h2>
                <button className="">More Info.</button>
                <button className="">Calculator</button>
              </div>
            </div>
            <MediaQuery maxWidth={767}>
              <button onClick={()=>addCartHandler(product)} className="add-cart-btn mt-2">ADD TO CART</button>
            </MediaQuery>
            <div className="py-3">
              <table className='caption-top text-secondary table-stripe w-100'>
              <caption className='text-dark fs-5'>Specifications</caption>
              <tbody style={{fontSize:'15px'}} className='d-md-flex gap-5'>
                <tr className='w-50 border-top border-dark text-nowrap'>
                  <td className='m-0 d-md-inline-block py-2 col-4 col-md-5'>Dimension</td>
                  <td className='px-3 col-md-7 text-wrap d-md-inline-block border-start border-dark'>{product.dimension}</td>
                </tr>
                <tr className='w-50 border-top border-dark text-nowrap'>
                  <td className='m-0 d-md-inline-block py-2 col-4 col-md-5'>Weight</td>
                  <td className='px-3 col-md-7 d-md-inline-block border-start border-dark'>{product.weight}</td>
                </tr>
                </tbody>
                </table>
            </div>
              <div className='text-secondary'>
                <h5 className='py-2 text-dark'>Description</h5>
                <p className='m-0'><b>History:</b> ex rental 5 years</p>
                <p className='m-0'><b>Condition:</b> excellent condition</p>
                <p className='m-0'>Operating Temp (°C) 0/+2</p>
                <p className='m-0'>Display Surface (m2) 7.17</p>
                <p className='m-0'>Power Supply: 1Ph/15amp plug</p>
              </div>
              <div className='py-4 shipping-box'>
                <h5 className='py-2'>Shipping</h5>
                <input className='col-10 p-2' placeholder='Enter your postcode' type='text'></input>
                <button className='col-2 p-2'>Go</button>
              </div>
          </Col>
        </Row>
      </Container>
        <Container fluid className='px-4 bg-light'>
          <h2 className='py-4'>More Information</h2>
          <p className='pb-4 mb-4'>multi-deck chiller, climate class 3H<br/>White internal<br/>RAL 9002 grey white external<br/>RAL 9007 Base Panel<br/>High efficiency fan motors<br/>Stainless steel bumper to front of case<br/>5 levels height adjustable shelves<br/>+ base<br/>Shelf pricing holders<br/>LED Canopy lighting inc switch<br/>Electronic temperature control<br/>Castor wheels<br/>Shelf product fences (optional)<br/>Solid end walls</p>
        </Container>
        <Container fluid className='px-4 py-5 bg-light'>
          <Row>
            <Col md={6} className='pb-3 pe-md-4'>
              <table className='caption-top text-secondary table-stripe w-100'>
              <caption className='px-3 text-dark fs-3'>Specifications</caption>
              <tbody style={{fontSize:'15px'}} className='border-top border-dark'>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Dimension WxDxH (mm)</td>
                  <td className='px-3 border-start border-dark'>{product.dimension}</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Weight</td>
                  <td className='px-3 border-start border-dark'>{product.weight}</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Manufactured in</td>
                  <td className='px-3 border-start border-dark'>{
                  product.manufacturedIn}</td>
                </tr>
                </tbody>
                </table>
            </Col>
            <Col md={6} className='pb-3'>
            <table className='caption-top text-secondary table-stripe w-100'>
              <caption className='px-3 text-dark fs-3'>Warranty</caption>
              <tbody style={{fontSize:'15px'}} className='border-top border-dark text-md-nowrap'>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>After hours call out option</td>
                  <td className='px-3 border-start border-dark'>No</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Extended warranty available</td>
                  <td className='px-3 border-start border-dark'>No</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Manufactures warranty period</td>
                  <td className='px-3 border-start border-dark'>3 Months Flexikitch Warrenty</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Onsite or back to base warranty</td>
                  <td className='px-3 border-start border-dark'>Onsite</td>
                </tr>
                <tr>
                  <td className='m-0 px-3 py-2 col-4'>Warranty contact</td>
                  <td className='px-3 border-start border-dark'>Flexikitch 1300 769 161 email:info@flexikitch.com.au</td>
                </tr>
                </tbody>
                </table>
            </Col>
          </Row>
        </Container>
        <div className='p-5 pb-0'>
          <h2>Brochures</h2>
          <a onClick={()=>window.open(product.pdf)} target='_blank' className='py-3 text-dark text-center d-inline-block text-decoration-none'>
            <img width={35} className='' src={iconPDF} alt='pdf'></img>
            <span className='d-block py-2'>Spec Sheet</span>
          </a>
        </div>
    </div>
  );
}

const mapStatetoProps = (state)=>{
  return {cartItems: state.cartItems,
    cartValue: state.cartValue,
  }
}
const mapDispatchtoProps = (dispatch)=>{
  return {
    addToCart: (product)=>dispatch(addtoCart(product))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ProductDetails);
