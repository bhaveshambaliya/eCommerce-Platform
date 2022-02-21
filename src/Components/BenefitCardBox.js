import React from "react";
import { Card } from "react-bootstrap";

function BenefitCardBox({benefitsArray}) {
  return (
    <>
      {benefitsArray.map((benefitObj) => {
        return (
          <Card
            key={benefitObj.id}
            className="bg-transparent flex-row align-items-center gap-3 my-2 border-0"
          >
            <img height={75} src={benefitObj.icon} alt=""></img>
            <Card.Body>
              <h6>{benefitObj.benefit}</h6>
              <hr
                style={{
                  color: "#f26449",
                  height: "2px",
                  width: "80%",
                  opacity: "1",
                }}
              />
              <Card.Text>{benefitObj.descrip}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default BenefitCardBox;
