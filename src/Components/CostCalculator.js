import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

function CostCalculator({ calculateButton, activeCalcBtn }) {
  const [calculatedCosts, setcalculatedCosts] = useState({
    capitalCost: "",
    weeklyCost: "",
  });

  const [inputcosts, setinputcosts] = useState({
    capitalCost: "",
    weeklyCost: "",
  });

  const CostHandler = (e) => {
    let { name, value } = e.target;
    setinputcosts({ ...inputcosts, [name]: value });
    if (!calculateButton) {
      setcalculatedCosts({ ...calculatedCosts, [name]: value });
    }
  };

  const costCalculateFnc = () => {
    setcalculatedCosts(inputcosts);
  };

  return (
    <>
      {activeCalcBtn ? (
        <>
          <p style={{ color: "#f26449" }} className="me-3">
            Capital Cost
          </p>
          <span>
            $
            <input
              value={inputcosts.capitalCost}
              onChange={CostHandler}
              type="text"
              name="capitalCost"
              placeholder="0.00"
            ></input>
          </span>
          {calculateButton ? (
            <button
              className="calculate-costBtn mt-2 ms-3"
              onClick={costCalculateFnc}
            >
              Calculate
            </button>
          ) : null}
          <div className="pt-5" id="cost-table">
            <div className="d-flex py-1">
              <p className="w-50 m-0 text-start">Weekly cost</p>
              <p className="w-50 m-0 text-end">
                ${((0.0525 * calculatedCosts.capitalCost) / 4.33).toFixed(2)}
              </p>
            </div>
            <div className="d-flex py-1">
              <p className="w-50 m-0 text-start">Deposit (10%)</p>
              <p className="w-50 m-0 text-end">
                ${((calculatedCosts.capitalCost * 10) / 100).toFixed(2)}
              </p>
            </div>
            <div className="d-flex py-1">
              <p className="w-50 m-0 text-start">Buy out (1st year)</p>
              <p className="w-50 m-0 text-end">
                ${((calculatedCosts.capitalCost * 60) / 100).toFixed(2)}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p style={{ color: "#f26449" }} className="me-3">
            Weekly Cost
          </p>
          <span>
            $
            <input
              value={inputcosts.weeklyCost}
              onChange={CostHandler}
              type="text"
              name="weeklyCost"
              placeholder="0.00"
              type="text"
            ></input>
          </span>
          {calculateButton ? (
            <button
              className="calculate-costBtn mt-2 ms-3"
              onClick={costCalculateFnc}
            >
              Calculate
            </button>
          ) : null}
          <div className="pt-5" id="cost-table">
            <div className="d-flex py-1">
              <p className="w-50 m-0 text-start">Capital Cost</p>
              <p className="w-50 m-0 text-end">
                ${((4.33 * calculatedCosts.weeklyCost) / 0.0525).toFixed(2)}
              </p>
            </div>
            <div className="d-flex py-1">
              <p className="w-50 m-0 text-start">Deposit</p>
              <p className="w-50 m-0 text-end">
                $
                {(
                  [4.33 * calculatedCosts.weeklyCost * 10] / [0.0525 * 100]
                ).toFixed(2)}
              </p>
            </div>
            <div className="d-flex  py-1">
              <p className="w-50 m-0 text-start">Buy out (1st year)</p>
              <p className="w-50 m-0 text-end">
                $
                {(
                  [4.33 * calculatedCosts.weeklyCost * 60] / [0.0525 * 100]
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const mapStatetoProps = (state) => {
  return { activeCalcBtn: state.activeCalculateBtn };
};
export default connect(mapStatetoProps)(CostCalculator);
