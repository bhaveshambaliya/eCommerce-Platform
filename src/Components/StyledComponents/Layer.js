import React from 'react'
import styled from "styled-components";

const Cover = styled.div`
  background: black;
  opacity: 0.3;
  width: ${(props) => props.layerTheme.width};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index:1010;
`;

Cover.defaultProps = {
  layerTheme: {
    width: "0",
  },
};

const openCover = {
    width: "100vw",
  };
  

function Layer({show,close}) {

    return (
        <Cover layerTheme={show ? openCover : ""} onClick={()=>close()}></Cover>
    )
}


export default (Layer)
