import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "react-bootstrap";
import Filters from "../../Components/ProdcutFilter/Filters";
import Catalogue from "../../Components/ProductCatalogue/Catalogue";
import li4050401 from './li405040-1.jpg';
import li4050402 from './li405040-2.jpg';
import li4050403 from './li405040-3.jpg';
import cr350944781 from './35094478-1.jpg';
import cr350944782 from './35094478-2.jpg';
import cr350944783 from './35094478-3.jpg';
import bonnetNeve from './bonnet-neve.jpg';
import criocabin from './CRIOCABIN.jpg'
import specSheet from './Spec-Sheet.pdf'

const pro1 = {
  id: 1,
  logo:bonnetNeve,
  pic: [li4050401,li4050402,li4050403],
  name: "bonnet neve onwave 2500 open display chiller",
  buy: [6500.00,'.00'],
  weeklyRent: [78.00,'.81'],
  path:'bonnet-neve-onwave-2500-open-display-chiller-class-3h-li405040',
  rrp: '17,990.00',
  dimension:'2560 x 885 x 2000',
  weight:'460.000000',
  manufacturedIn:'France',
  pdf: specSheet,
};

const pro2 = {
  id: 2,
  logo:criocabin,
  pic: [cr350944781,cr350944782,cr350944783],
  name: "criocabin ethos 730d semi vertical open display chiller",
  buy: [7500.00,'.00'],
  weeklyRent: [90.93,'.93'],
  path:'criocabin-ethos-730d-semi-vertical-open-display-chiller-35094478',
  rrp: '12,990.00',
  dimension:'1875 x 700 x 1350',
  weight:'170.000000',
  manufacturedIn:'Italy',
  pdf: specSheet,
};

export const exRentalProducts = [
  pro1,
  pro2,
  pro1,
  pro2,
  pro1,
];

function ExRentClea() {

  useEffect(() => {
   window.scrollTo(0,0)
  }, [])

  return (
    <div style={{ padding: "109px 0px 0px" }}>
      <div className="px-5">
        <Breadcrumb
          className="py-4"
          style={{ fontSize: "14px", color: "#f26449" }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem active>Ex-Rental & Clearance</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Row>
            <Col md={3} className="d-none d-md-block">
              <Filters />
            </Col>
            <Col md={9} className="ps-md-5 pb-5">
              <Catalogue data={exRentalProducts} />
            </Col>
          </Row>
        </div>
        <div className='py-5'>
          <h4 className='mb-4'>Ex-Rental & Clearance</h4>
          <p>
            Flexikitch ex-rental and clearance equipment is a great place to
            source quality catering equipment at marked down prices. Most of our
            ex rental equipment is less than 2 years old and are always in
            excellent condition after our comprehensive re-sale preparation
            process.
          </p>
          <p>
            Our rentals include additional warranty so you know your buying
            equipment that has been serviced throughout its life. We pride
            ourselves on distributing the leading brands including Skope
            Refrigeration, Frymaster, Garland, Rational, Hobart, Winterhalter,
            Convotherm, Blue Seal, Williams refrigeration and many more.
          </p>
          <p>
            Our ex rental stock is coming and going every day so please get in
            touch so we can help you save on your next purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExRentClea;
