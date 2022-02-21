import React, { useState } from "react";

function FinanceCalc() {
  const [sliderValue, setsliderValue] = useState(76300);
  const sliderHandler = (e) => {
    setsliderValue(e.target.value);
  };

  return (
    <>
      
      <div className="py-5 px-4">
        <input
          className="value-slider"
          type="range"
          min={1000}
          max={250000}
          value={sliderValue}
          onChange={sliderHandler}
        ></input>
      </div>
      <div id='value-slider-table'>
      <div className="border-bottom p-4  pb-0 d-flex justify-content-between">
        <p className="text-nowrap mt-1 " style={{ fontSize: "14px" }}>
          EQUIPMENT VALUE
        </p>
        <span className="fs-5 text-dark position-relative">
          <p>$</p>
          <input
            type="text"
            value={sliderValue}
            onChange={sliderHandler}
            className="border-0 w-100 bg-transparent"
          ></input>
        </span>
      </div>
      <div className="p-4 pb-0 d-flex justify-content-between">
        <p className="text-nowrap mt-1" style={{ fontSize: "14px" }}>
          WEEKLY PAYMENT
        </p>
        <span className="fs-5 text-dark position-relative">
        <p>$</p>
          <input
            type="text"
            value={(sliderValue / 82.47).toFixed(2)}
            className="border-0 w-100 bg-transparent"
            ></input>
        </span>
      </div>
            </div>
    </>
  );
}

export default FinanceCalc;
