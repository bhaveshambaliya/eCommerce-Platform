import React from 'react'
import term from "../images/icon-term.png";
import upgrade from "../images/icon-upgrade.png";
import breakdown from "../images/icon-equipmentservice.png";
import reduced from "../images/icon-reduced.png";
import purchase from "../images/icon-purchase.png";
import cashflow from "../images/icon-cashflow.png";

const benefits = [
    {
      id: 1,
      icon: term,
      head: "Short minimum term",
      text: " After the initial 12-month term, you can decide if you would like to continue to rent or return the equipment.",
    },
    {
      id: 2,
      icon: upgrade,
      head: "Upgrade or downgrade",
      text: " Don’t try to fit a square peg into a round hole, Flexikitch Finance allows you to swap out equipment for the right solution throughout the term of the agreement.",
    },
    {
      id: 3,
      icon: breakdown,
      head: "Breakdown warranty",
      text: "We provide all Flexikitch Rentals with ongoing service cover for the lifetime of contract. It’s vital to us that you have a seamless experience, and that’s why we have decided to extend service cover past the manufacturer’s warranty for the lifetime of rental.",
    },
    {
      id: 4,
      icon: reduced,
      head: "Reduced year 1 price",
      text: "After the initial 12 months, customers can purchase the equipment outright at a reduced priced.",
    },
    {
      id: 5,
      icon: purchase,
      head: "Purchase anytime",
      text: "We know how busy hospitality businesses are – if you want to purchase the equipment outright at any point after 12 months, we’ll get back to you with a payout figure before the day ends so you can focus on what you do best.",
    },
    {
      id: 6,
      icon: cashflow,
      head: "Preserve your cashflow",
      text: "We require a 10% deposit on the capital financed to begin a rental contract.",
    },
  ];
  
function BenefitBox() {
    return (
        <div className='benefit-box h-100'>
                {benefits.map((item) => {
                  return (
                    <>
                      <div key={item.id} className="p-4">
                        <img
                          width={50}
                          className="float-start me-3"
                          src={item.icon}
                          alt={item.head}
                        ></img>
                        <h5 className="py-2">{item.head}</h5>
                        <p className='py-2 d-none'>{item.text}</p>
                      </div>
                      <hr></hr>
                    </>
                  );
                })}
                </div>
    )
}

export default BenefitBox
