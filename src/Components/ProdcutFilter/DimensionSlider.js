import React, { useEffect, useRef, useState } from "react";

function DimensionSlider({min,max}) {
  const [values, setvalues] = useState({
    minValue: min,
    maxValue: max,
  });

  const valueHandle = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };
  return (
    <div id="dms-slider">
      <div>
        <span style={{width:'45%'}} className="minValue py-2 text-center border float-start">
          {values.minValue}
        </span>
        <span  style={{width:'45%'}} className="maxValue text-center py-2 border float-end">
          {values.maxValue}
        </span>
      </div>
      <input
        type="range"
        value={values.minValue}
        onChange={valueHandle}
        name="minValue"
        max={max}
        min={min}
      ></input>
      <input
        type="range"
        value={values.maxValue}
        onChange={valueHandle}
        name="maxValue"
        max={max}
        min={min}
      ></input>
    </div>
  );
}

export default DimensionSlider;
