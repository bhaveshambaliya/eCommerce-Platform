import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AboutAcord from '../../Components/AboutAcord';
import fleetHerobg from '../../images/Services/fleet_hero.jpg'
import iconAsset from '../../images/Services/icon-asset.png'
import iconSelect from '../../images/About/icon-select.png'
import iconWarranty from '../../images/icon-equipmentservice.png'
import iconExposure from '../../images/Services/icon-exposure.png'
import iconPromotion from '../../images/Services/icon-promotion.png'
import iconCost from '../../images/Services/icon-cost.png'
import fleetmanageSectionImg from '../../images/Services/fleet-manage-section.jpg'
import decaledSvg from '../../images/Services/decaled-joy.svg'
import OurCustomers from '../../Components/OurCustomers';
import BenefitCardBox from '../../Components/BenefitCardBox';

const FleetManageBg = styled.div`
  background-image: url(${fleetHerobg});
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

const fleetManageAccord = [
    {
        id: 1,
        question: "Does Flexikitch Fleet service Australia nationally?",
        answers: [
          "Our fleet capability extends across Australia (and even to New Zealand).",
        ],
      },
    {
        id: 2,
        question: "What equipment is provided?",
        answers: [
          "Our fleet management system can manage a variety of equipment, from refrigeration to catering kitchens. If you are a multi-site venue and you need assistance to manage equipment, that’s where we can help.",
        ],
      },
    {
        id: 3,
        question: "What is your service guarantee?",
        answers: [
          "Like all Flexikitch Rentals, our Fleet product provides service cover for the lifetime of rental. It is vital to us that you have a seamless experience and that is why we have decided to extend service cover past the manufacturer’s warranty for the lifetime of rental.",
        ],
      },
    {
        id: 4,
        question: "How do I get started?",
        answers: [
          "Fill up the form, let us know the sort of business you run, and how we can assist you. Our Business Development team will be in touch with suggestions on how Flexikitch can assist you in bringing the business to the next level.",
        ],
      },
]

const fleetManageBenefits = [
    {
        id:1,
        icon: iconAsset,
        benefit:'Multi-site Asset Management',
        descrip:'Our FlexiApp allows you to view equipment located across multiple locations, to help you manage and identify assets and track your service history.'
    },
    {
        id:2,
        icon: iconSelect,
        benefit:'One-stop-shop',
        descrip:'We pride ourselves in offering you the right tools to help you expand your business across Australia.'
    },
    {
        id:3,
        icon: iconWarranty,
        benefit:'Breakdown warranty',
        descrip:'We offer service cover for lifetime of rental – past the manufacturer’s warranty.'
    },
    {
        id:4,
        icon: iconSelect,
        benefit:'Access industry leading brands',
        descrip:'We can tailor a comprehensive range of finance and hospitality equipment solutions to suit your business needs – helping you reduce risk while maximising return and efficiency.'
    },
    {
        id:5,
        icon: iconExposure,
        benefit:'Increase in brand exposure',
        descrip:'Our Fleet service includes brand decals across a variety of equipment, intended to maximise brand exposure and awareness.'
    },
]

const fleetManageBrandCards = [
    {
        id:1,
        image: iconExposure,
        title:'Increased exposure',
        para: 'A great way to push your brand visibility and get noticed'
    },
    {
        id:2,
        image: iconCost,
        title:'Cost effective',
        para: 'Decals offer a cost-effective method of promotion'
    },
    {
        id:3,
        image: iconAsset,
        title:'Asset Management',
        para: 'Track products, service history and site locations with our FlexiApp'
    },
    {
        id:4,
        image: iconPromotion,
        title:'Brand promotion',
        para: 'A highly visible design will drive brand recognition'
    }
]
function FleetManagement() {
    return (
        <div>
            <FleetManageBg></FleetManageBg>
            <Container style={{paddingTop:'200px'}}>
            <div className='p-5 col-md-8 col-lg-7 text-white'>
                <h2>Flexikitch</h2>
                <hr style={{width:'70%',height:'3px',opacity:'1'}}></hr>
                <h1 className='display-4 fw-bold'>Fleet Management</h1>
                <p className='py-5 fs-4'>We pride ourselves on offering you the right tools needed to help you expand your business across Australia.</p>
            </div>
            </Container>
            <div className='px-lg-5'>
                <Row className='mx-0'>
                    <Col md={6} className='p-5 mb-5 mb-md-0' style={{backgroundColor:'#ffffffe6'}}>
                        <div className='py-4 col-lg-9 mx-auto'>
                        <p>To suit your commercial needs, we can help your business to reduce risk, maximise returns and improve efficiency, so you can scale to the next level.</p>
                        <hr style={{width:'85%',height:'3px',color:'#f26449',opacity:'1'}}></hr>
                        <p>Our sophisticated and flexible management tools assists with warehousing and movement of equipment nationally.</p>
                        <p className='mb-5 pb-3'>We are also the only company nationwide to provide ongoing warranty breakdown service on all fleet equipment for the duration of your rental.</p>
                        <AboutAcord accordData={fleetManageAccord}/>
                        </div>
                    </Col>
                    <Col md={6} className='p-5 mt-5 mt-md-0' style={{backgroundColor:'#f8f4ece6'}}>
                        <div className='py-4 col-lg-9 mx-auto'>
                            <h5 className='mb-5' style={{color:'#f26449'}}>Benefits of Flexikitch Fleet Management</h5>
                            <BenefitCardBox benefitsArray={fleetManageBenefits}/>
                        </div>
                    </Col>
                </Row>
                <Row className='mx-0'>
                    <Col md={6} className='bg-white p-5'>
                        <div className='py-4 col-lg-9 mx-auto d-flex gap-5 align-items-center'>
                            <img height={75} src={iconWarranty} alt='warranty-icon'></img>
                            <div>
                                <h6 style={{color:'#f26449'}}>Service for the life of the rental</h6>
                                <p className='m-0 py-2'>Ongoing service of your rental equipment is our highest priority. We are the only equipment financier offering a comprehensive warranty on all rental equipment across the industry, nationwide.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='p-0'>
                        <img className='w-100' src={fleetmanageSectionImg} alt='fleet-management-section'></img>
                    </Col>
                </Row>
            <div className='bg-white p-5'>
                <div className='p-5 mx-3 d-flex gap-5'>
                    <img className='mt-3' height={75} src={iconPromotion} alt='icon-promotion'></img>
                    <span>
                    <h6 style={{color:'#f26449'}}>Looking after your brand</h6>
                    <p className='pt-4'>Flexikitch Fleet management allows you to scale your business, while managing your budget. Our services include freight nationally across Australia and decaling services for increased brand exposure. There’s also convenient asset management with our FlexiApp so you can move and track equipment nationally across multiple locations.</p></span>
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-5'>
                    <div className='col-md-6 pb-5 d-flex flex-wrap'>
                            {
                                fleetManageBrandCards.map((item)=>{
                                    return (
                                        <Card key={item.id} className='w-50 text-center p-4'>
                                            <img className='mx-auto' width={50} src={item.image} alt={item.title}></img>
                                           <h6 className='pt-2'>{item.title}</h6>
                                            <hr className='my-1 mx-auto' style={{color:'#f26449',height:'2px',width:'7vw',opacity:'1'}}/>
                                            <p className='m-0'>{item.para}</p>
                                            </Card>
                                    )
                                })
                            }
                        </div>
                        <div className='col-md-6 pb-5' style={{width:'230px'}}>
                        <img className='w-100' src={decaledSvg} alt='decaled-joy'></img>
                        </div>
                </div>
            </div>
            <div className='p-5 mb-5 text-center' style={{backgroundColor:'rgba(248, 244, 236, 0.9)'}}>
                <h2>Some of our Customers</h2>
                <hr className='mx-auto' style={{color:"#f26449",width:'10vw',height:'3px',opacity:'1'}}/>
                <OurCustomers/>
                <button className='bigButton mt-5'>Corporate enquiry</button>
            </div>
            </div>
        </div>
    )
}

export default FleetManagement
