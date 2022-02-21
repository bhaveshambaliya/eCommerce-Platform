import React, { useEffect, useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import cottonbro from "../../images/News/cottonbro.jpg";
import pixabay from "../../images/News/pixabay.jpg";
import timDouglas from "../../images/News/tim-douglas.jpg";
import istockA from "../../images/News/istockA.jpg";
import istockB from "../../images/News/istockB.jpg";
import pizzaOvens from "../../images/News/pizza-ovens.jpg";
import coffeeShop from "../../images/News/open-coffeeShop.jpg";
import reasons from "../../images/News/5-reasons.jpg";
import unoxSpeed from "../../images/News/unox-speed.jpg";
import blastChillers from "../../images/News/blast-chillers.jpg";
import ArticleCard from "../../Components/ArticleCard";

const articlesData = [
  {
    id: 1,
    pic: cottonbro,
    title: "CHOOSING AN ICE MACHINE",
    date: "November 22, 2021",
    readTime: "3 mins",
    detail:
      "Choosing the right ice machine for your business can be a challenging task. There are several considerations that need to be looked at.",
  },
  {
    id: 2,
    pic: pixabay,
    title: "WATER QUALITY AND REVERSE OSMOSIS",
    date: "November 22, 2021",
    readTime: "2 mins",
    detail:
      "Whether you’ve just opened a new restaurant or manage an established venue, your building’s water quality is going to impact your operation in more ways than you’d imagine",
  },
  {
    id: 3,
    pic: timDouglas,
    title: "WHAT’S THE BIGGEST MISTAKE WHEN OPENING A NEW BUSINESS?",
    date: "October 19, 2021",
    readTime: "2 mins",
    detail:
      "Whether you’ve just opened a new restaurant or manage an established venue, your building’s water quality is going to impact your operation in more ways than you’d imagine",
  },
  {
    id: 4,
    pic: istockA,
    title:
      "WHAT TO CONSIDER WHEN PURCHASING OPEN OR GLASS DOOR DISPLAY FRIDGES",
    date: "October 19, 2021",
    readTime: "3 mins",
    detail:
      "When it comes to Commercial Refrigeration for food retail business, the visual appeal of display fridges are a contributing factor in maximising sales and as such are an important investment. The success of your business is not only dependent on the products you’re selling but also on how effective you are at capturing and retaining customers’ attention so as to encourage purchases.",
  },
  {
    id: 5,
    pic: istockB,
    title: "WHAT IS MAKE-UP AIR IN A COMMERCIAL KITCHEN EXHAUST CANOPY?",
    date: "October 19, 2021",
    readTime: "2 mins",
    detail:
      "Commercial exhaust canopies are common in commercial kitchens. Thousands of litres of contaminated air, odours, toxic gases, and moisture are extracted per minute and when these huge volumes of air are displaced, it is best practice to have fresh air reintroduced into the kitchen. Here are five reasons why make-up air is important.",
  },
  {
    id: 6,
    pic: pizzaOvens,
    title: "PIZZA OVENS THE PROS AND CONS - FLEXIKITCH",
    date: "October 13, 2021",
    readTime: "2 mins",
    detail:
      "The pizza oven you choose can make or break your business. It can create ambience or can simply be your workhorse. It’s also important that you make the right decision from the start as its not generally a piece of equipment you won’t change over due to the logistics of instal to start with.",
  },
  {
    id: 7,
    pic: coffeeShop,
    title:
      "OPENING A COFFEE SHOP? HERE IS THE EQUIPMENT LIST YOU NEED - FLEXIKITCH",
    date: "October 13, 2021",
    readTime: "3 mins",
    detail:
      "It can be overwhelming starting a new business, but a detailed coffee shop equipment list can help kickstart the process. 2020 & 2021 has thrown many curveballs but one thing that is certain is that coffee is still one of the most popular drinks in the world and plays a major part in our daily lives. Below you will find a short equipment list to start with which can then grow as you start to gain momentum.",
  },
  {
    id: 8,
    pic: reasons,
    title: "5 REASONS YOUR COMMERCIAL KITCHEN LAYOUT MATTERS - FLEXIKITCH",
    date: "October 13, 2021",
    readTime: "3 mins",
    detail:
      "Commercial kitchens are shrinking. This is an ongoing trend and will continue to be the norm for the years to come. Some venues are blessed with a sizeable kitchen and offers a great advantage. However, having a smaller kitchen can contribute to a lesser capital expense at inception along with a reduction in running costs over the years.",
  },
  {
    id: 9,
    pic: unoxSpeed,
    title: "UNOX SPEED.PRO",
    date: "June 9, 2021",
    readTime: "3 mins",
    detail:
      "There are always waves of customers ordering food at peak times during the day and with the increasing rental price per square meter, kitchen space is at a premium more than ever. However, the Unox Bakerlux.Speedpro is designed to solve both of these problems with the intention of making it a vital piece of equipment in the modern kitchen through a variety of functions available.",
  },
  {
    id: 10,
    pic: blastChillers,
    title: "BLAST CHILLERS FOR RESTAURANTS",
    date: "June 9, 2021",
    readTime: "3 mins",
    detail:
      "Blast chillers have quickly become an essential commercial kitchen item, and in some cases are mandatory by law. There can be some confusion about what a blast chiller is, and how it compares to refrigerators and freezers. Here we will explore what a blast chiller is, how it works, and the different options that are available for a range of different kitchen needs and sizes.",
  },
];

function Articles() {
  const articlesperPage = 6;
  const [activePage, setactivePage] = useState(1);

  const pageChangeHandler = (e)=>{
    setactivePage(e.target.innerText)
  }

  const noOfPages = articlesData.length / articlesperPage;
  const start = activePage * articlesperPage - articlesperPage;
  const end = activePage * articlesperPage;
  const pagesArray = [];
  for (let i = 1; i <= Math.ceil(noOfPages); i++) {
    pagesArray.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="pt-5 mt-5">
      <div className="p-5 mx-lg-4">
        <h2>ARTICLES</h2>
        <Row>
          <Col md={9}>
            {articlesData.slice(start,end).map((article) => {
              return (
                <ArticleCard key={article.id} item={article}></ArticleCard>
              );
            })}
            <Pagination bsPrefix='article-pagination'>
            {pagesArray.map((num) => {
            return <Pagination.Item onClick={pageChangeHandler} active={num == activePage}>{num}</Pagination.Item>;
          })}
          {/* <Pagination.Next onClick={()=>setactivePage((activePage + 1))}>>>></Pagination.Next> */}
            </Pagination>
          </Col>
          <Col md={3}>
            <div className=''>
              <h5>RECENT ARTICLES</h5>
              <span>
                <a href=''>Blast Chillers for Restaurants</a>
                <p>June 9, 2021</p>
              </span>
              <span>
                <a href=''>Flexikitch Solutions - Condenser Cleaning</a>...
                <p>June 9, 2021</p>
              </span>
              <span>
                <a href=''>UNOX SPEED.Pro</a>
                <p>June 9, 2021</p>
              </span>
              <span>
                <a href=''>Which commercial coffee machine is the best?</a>
                <p>June 9, 2021</p>
              </span>
              <span>
                <a href=''>Flexikitch Solutions - Blocked Drains in Open Displays</a>
                <p>June 9, 2021</p>
              </span>
            <hr></hr>
            </div>
            <div className=''>
              <h5>CATEGORIES</h5>
              <a href=''>portfolio</a>
              <a href=''>equipment</a>
              <a href=''>flexikitch solutions</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Articles;
