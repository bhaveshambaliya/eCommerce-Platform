import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import heroImg from "../../images/About/hero.jpg";
import heroOurText from '../../images/About/hero-our-text.png'
import GuaranteeComp from "../../Components/GuaranteeComp";

const BgImg = styled.div`
  background-image: url(${heroImg});
  width: 100%;
  height: 100%;
  position:fixed;
  top:108px;
  z-index: -1;
background-size: cover;
  background-position:center top;
  background-repeat: no-repeat;
`;
// const TransLayer = styled.div`
//   background-color: rgba(252, 249, 243, 1);
//   width: 100%;
//   height:100%;
//   position:fixed;
//   bottom: 0px ;
//   left:0px;
//   right: 0px;
//   filter: blur(20px);
//   z-index: -1;
//   background-size: cover;
//   background-position:center top;
//   background-repeat: no-repeat;
// `;

function OurGuarantee() {
  return (
    <div style={{paddingTop:'108px'}}>
      <BgImg>
      </BgImg>
        {/* <TransLayer className='container'>
        </TransLayer> */}
          <Container style={{padding:'500px 50px 00px'}}>
              <img id='ourText-img' src={heroOurText} alt='hero-our-text'></img>
            <h1 className='display-2 fw-bold text-white'>Flexikitch <br/> Guarantee</h1>
            <hr style={{color:'#f26449',height:'3px',width:'25%',opacity:'1'}}></hr>
          </Container>
          <Container id='our-guarantee' className='p-5 mb-5'>
              <GuaranteeComp showIcon={true}/>
          </Container>
    </div>
  );
}

export default OurGuarantee;
