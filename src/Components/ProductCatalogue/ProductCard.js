import React from "react";
import { Card } from "react-bootstrap";
import { MdCompareArrows } from "react-icons/md";
import {Link} from 'react-router-dom'

function ProductCard({ item }) {
  return (
    <Card id="product-card" className="text-center h-100">
      <Link to={`/${item.path}`}><img className='mx-auto my-2' style={{maxWidth:'260px',maxHeight:'260px'}} src={item.pic[0]}></img></Link>
      <Card.Body>
        <Link to={`/${item.path}`}><Card.Title as="h6" className='text-capitalize'>{item.name}</Card.Title></Link>
      </Card.Body>
      <Card.Text className="d-flex m-0">
        <div className="w-50 py-4 p-1 border">
          <p>
            <h4 className="d-inline">${Math.floor(item.buy[0])}<sup>{item.buy[1]}</sup></h4>+GST
          </p>
          <span>Buy Outright</span>
        </div>
        <div className="w-50 py-4 p-1 border">
          <p>
            <h4 className="d-inline">${Math.floor(item.weeklyRent[0])}<sup>{item.weeklyRent[1]}</sup></h4>+GST
          </p>
          <span>Weekly Rental</span>
        </div>
      </Card.Text>
      <div className="compare">
        <MdCompareArrows className="fs-4 me-2" />
        Add To Compare
      </div>
    </Card>
  );
}

export default ProductCard;
