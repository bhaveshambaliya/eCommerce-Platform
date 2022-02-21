import React, { useContext } from 'react'
import styled from 'styled-components'
import { SummaryContext } from '../../Pages/Payment';
import Layer from './Layer';

const Box = styled.div`
background: white;
  width: 50%;
  height: 100%;
  overflow:auto;
  transition: 1s;
  position: fixed;
  top: 0px;
  right: ${props => props.theme.right};
  z-index: 1010;

  ::-webkit-scrollbar{
    width: 5px
  }

  ::-webkit-scrollbar-thumb{
    background-color:#41424284
  }
`
Box.defaultProps = {
    theme: {
      right: "-50%",
    },
  };
  
  const showBox = {
    right: "0px",
  };

function SummaryBox({boxShow,child}) {

  // const {summaryShow, setsummaryShow } = useContext(SummaryContext)

    return (
      <>
        <Box theme={boxShow ? showBox : ""} >{child}</Box>
        </>
    )
}

export default SummaryBox
