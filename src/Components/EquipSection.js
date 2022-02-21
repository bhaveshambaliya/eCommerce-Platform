import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components'
import serviceEquip from "../images/Services/service-equipment.jpg";
import equipRefrig from "../images/Services/equipRefrig.png";
import equipDisplay from "../images/Services/equipDisplay.png";
import equipAppliances from "../images/Services/equipAppliances.png";
import equipCooking from "../images/Services/equipCooking.png";
import equipWarewash from "../images/Services/equipWarewash.png";
import equipCoffee from "../images/Services/equipCoffee.png";

const EquipDiv = styled.div`
  background-image: url(${serviceEquip});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  button{
    background-color: #f8f4ec80;
    color:rgba(65,66,66,0.9);
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 20px 80px;
  }

 button:hover{
    background-color: #f26449;
  }
`;

const equipmentRange = [
    {
      id: 1,
      image: equipRefrig,
      text: "Refrigeration",
    },
    {
      id: 2,
      image: equipDisplay,
      text: "Display",
    },
    {
      id: 3,
      image: equipAppliances,
      text: "Appliances",
    },
    {
      id: 4,
      image: equipCooking,
      text: "Cooking",
    },
    {
      id: 5,
      image: equipWarewash,
      text: "Warewashing",
    },
    {
      id: 6,
      image: equipCoffee,
      text: "Coffee",
    },
  ];

function EquipSection() {
    return (
        <EquipDiv className="row m-0">
        <div className="col-md-6 order-1"></div>
        <div
          className="col-md-6 p-5 order-2"
          style={{ backgroundColor: "rgba(65,66,66,0.9)" }}
        >
          <Row className="text-white text-center pt-5">
            {equipmentRange.map((equip) => {
              return (
                <Col className="pb-5" xs={4} key={equip.id}>
                  <img width={75} src={equip.image}></img>
                  <p className="pt-4">{equip.text}</p>
                </Col>
              );
            })}
            <Col className="mx-auto">
              <button>View our equipment range</button>
            </Col>
          </Row>
        </div>
      </EquipDiv>
    )
}

export default EquipSection
