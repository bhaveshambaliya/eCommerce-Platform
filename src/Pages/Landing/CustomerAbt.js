import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../../Components/Carousel";
import skopeRef from "../../images/Skope-Refrigeration.jpg";
import comcater from '../../images/comcater-logo.png'
import hobart from "../../images/Hobart.jpg";
import winter from '../../images/Winterhalter.png'
import unox from '../../images/logo_unox.jpg'
import moffat from '../../images/moffat.png'
import stoddart from '../../images/Stoddart.png'
import arneg from '../../images/arneg.jpg'
import middleby from '../../images/Middleby.jpg'
import luus from '../../images/luus.png'

const brandsImg = [
  skopeRef,
  comcater,
  hobart,
  winter,
  unox,
  moffat,
  stoddart,
  arneg,
  middleby,
  luus
];

function CustomerAbt() {
  const [brandShow, setbrandShow] = useState(false);

  const showBrandlist = () => {
    setbrandShow(true);
  };

  const hideBrandlist = () => {
    setbrandShow(false);
  };

  return (
    <div className='pb-5'>
      <Container className="py-5">
        <h4 className="py-4">What Our Customers Love About Us</h4>
        <Carousel></Carousel>
      </Container>
      <div className="p-5 ">
        <h4 className="py-4">Our Trusted Brands</h4>
        <Row className="position-relative">
          <Col xs={12} sm={10}>
            <Row className="text-center gap-lg-2 p-3 border-end align-items-center">
              {brandsImg.map((image) => {
                return (
                  <Col xs={6} sm={4} lg={2} className="ms-lg-4 py-4">
                    <img className="w-100" src={image} alt=""></img>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm={2} className="my-auto py-4 all-brands text-center">
            <button onClick={hideBrandlist} onMouseEnter={showBrandlist}>
              See All Brands
            </button>
            {brandShow ? (
              <div className="brands-list text-start">
                <ul className="list-unstyled p-4">
                  <li>
                    <a href="/adande">Adande</a>
                  </li>
                  <li>
                    <a href="/aht">AHT</a>
                  </li>
                  <li>
                    <a href="/anvil">Anvil</a>
                  </li>
                  <li>
                    <a href="/airex">Airex</a>
                  </li>
                  <li>
                    <a href="/arneg">Arneg</a>
                  </li>
                  <li>
                    <a href="/austune">Austune</a>
                  </li>
                  <li>
                    <a href="/bromic">Bromic</a>
                  </li>
                  <li>
                    <a href="/bonnet-neve">Bonnet Neve</a>
                  </li>

                  <li>
                    <a href="/crem">Crem</a>
                  </li>
                  <li>
                    <a href="/cobra">Cobra</a>
                  </li>
                  <li>
                    <a href="/culinaire">Culinaire</a>
                  </li>

                  <li>
                    <a href="/everlasting">Everlasting</a>
                  </li>
                  <li>
                    <a href="/exquisite">Exquisite</a>
                  </li>
                  <li>
                    <a href="/fiorenzato">Fiorenzato</a>
                  </li>
                </ul>
                <ul className="list-unstyled p-4 border-start">
                  <li>
                    <a href="/frymaster">Frymaster</a>
                  </li>
                  <li>
                    <a href="/hobart-food-equipment">Hobart</a>
                  </li>
                  <li>
                    <a href="/hoshizaki">Hoshizaki</a>
                  </li>
                  <li>
                    <a href="/garland">Garland</a>
                  </li>
                  <li>
                    <a href="/glacian">Glacian</a>
                  </li>
                  <li>
                    <a href="/goldstein">Goldstein</a>
                  </li>
                  <li>
                    <a href="/iarp">IARP</a>
                  </li>
                  <li>
                    <a href="/inomak">Inomak</a>
                  </li>
                  <li>
                    <a href="/koldtech">Koldtech</a>
                  </li>
                  <li>
                    <a href="/longoni">Longoni</a>
                  </li>
                  <li>
                    <a href="/mahlkonig">Mahlkonig</a>
                  </li>
                  <li>
                    <a href="/mazzer">Mazzer</a>
                  </li>
                  <li>
                    <a href="/musso">Musso</a>
                  </li>
                  <li>
                    <a href="/mavam">Mavam</a>
                  </li>
                </ul>
                <ul className="list-unstyled p-4 border-start">
                  <li>
                    <a href="/cobra">Moffat</a>
                  </li>
                  <li>
                    <a href="/puqpress">PUQPRESS</a>
                  </li>
                  <li>
                    <a href="/saltas">Saltas</a>
                  </li>
                  <li>
                    <a href="/sayl">Sayl</a>
                  </li>
                  <li>
                    <a href="/skope">Skope</a>
                  </li>
                  <li>
                    <a href="/woodson">Stoddarts</a>
                  </li>
                  <li>
                    <a href="/tecfrigo">Tecfrigo</a>
                  </li>
                  <li>
                    <a href="/technocrio">Technocrio</a>
                  </li>
                  <li>
                    <a href="/rational">Rational</a>
                  </li>
                  <li>
                    <a href="/rocket">Rocket</a>
                  </li>
                  <li>
                    <a href="/unox">UNOX</a>
                  </li>
                  <li>
                    <a href="/waldorf">Waldorf</a>
                  </li>
                  <li>
                    <a href="/winterhalter">Winterhalter</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CustomerAbt;
