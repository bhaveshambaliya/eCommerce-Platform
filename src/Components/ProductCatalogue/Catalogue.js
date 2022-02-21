import React, { useEffect, useState } from "react";
import fkgify from "../../images/fk-gif.gif";
import ProductCard from "./ProductCard";
import { Col, Pagination, Row } from "react-bootstrap";

function Catalogue({data}) {
  const [itemsperPage, setitemsperPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const handlePageSelect = (e) => {
    const pageSelectValue = e.target.value;
    setitemsperPage(pageSelectValue);
    setcurrentPage(1)
  };
  const pageChangeHandle = (e)=>{
    const newPage = e.target.innerText
    setcurrentPage(newPage)
  }

  const noOfPages = data.length / itemsperPage;
  const startInd = (currentPage * itemsperPage) - itemsperPage
  const endInd = currentPage * itemsperPage
  const pagination = [];
  for (let i = 1; i <= Math.ceil(noOfPages); i++) {
    pagination.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemsperPage,currentPage]);

  return (
    <>
      <div className="d-flex justify-content-center justify-content-md-between align-items-center">
        <h2>Ex-Rental & Clearance</h2>
        <img
          width={100}
          className="d-none d-md-block"
          src={fkgify}
          alt="fk-gif"
        ></img>
      </div>
      <hr></hr>
      <div className="d-flex flex-wrap justify-content-around justify-content-md-between align-items-center">
        <p className="m-0 d-none d-md-block">{data.length} Items</p>
        <button className="d-block d-md-none filterBtn">Filter By</button>
        <span>
          Sort by {""}
          <select className="sortBy">
            <option value="1">Position</option>
            <option value="2">Product Name</option>
            <option value="3">Price</option>
          </select>
        </span>
        <p className="m-0 w-100 mt-3 text-center d-block d-md-none">
          {data.length} Items
        </p>
      </div>
      <Row className="py-4">
        {data.slice(startInd,endInd)
          .map((product, index) => {
            return (
              <Col xl={4} md={6} key={index} className="pb-4">
                <ProductCard item={product} />
              </Col>
            );
          })}
      </Row>
      <div className="d-flex justify-content-center justify-content-md-between align-items-center">
        <Pagination className='m-0 border border-0'>
          <Pagination.Prev onClick={()=>setcurrentPage((currentPage - 1))}></Pagination.Prev>
          {pagination.map((num) => {
            return <Pagination.Item onClick={pageChangeHandle} active={num == currentPage}>{num}</Pagination.Item>;
          })}
          <Pagination.Next onClick={()=>setcurrentPage((currentPage + 1))}></Pagination.Next>
        </Pagination>
        <span className='d-none d-md-block'>
          Show
          <select onChange={handlePageSelect} className="pageSelect">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
          per page
        </span>
      </div>
    </>
  );
}

export default Catalogue;
