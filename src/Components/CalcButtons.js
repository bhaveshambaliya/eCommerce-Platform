import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const CalcButton = styled.button`
  border: 1px solid gainsboro;
  background:transparent;
  border-bottom: ${(props) => props.theme.bottom};
  background-color: ${(props) => props.theme.bgColor}
`;

const CalcBtnClick = {
  bgColor: "#f8f4ec",
  bottom: "1px solid transparent",
};

function CalcButtons({ activeCalcBtn, calcButtonHandler }) {
  return (
    <>
      <CalcButton
        onClick={activeCalcBtn ? "" : calcButtonHandler}
        theme={activeCalcBtn ? CalcBtnClick : " "}
      >
        Calculate by Capital Cost
      </CalcButton>
      <CalcButton
        onClick={activeCalcBtn ? calcButtonHandler : ""}
        theme={activeCalcBtn ? " " : CalcBtnClick}
      >
        Calculate by Weekly Rental
      </CalcButton>
    </>
  );
}

const mapStatetoProps = (state) => {
  return { activeCalcBtn: state.activeCalculateBtn };
};
const mapDispatchtoProps = (dispatch) => {
  return { calcButtonHandler: () => dispatch({ type: "setActive" }) };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CalcButtons);
