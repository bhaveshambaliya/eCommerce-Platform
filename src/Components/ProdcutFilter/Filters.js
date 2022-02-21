import React from "react";
import { Accordion } from "react-bootstrap";
import DimensionSlider from "./DimensionSlider";


const filterOptions = [
  {
    id: 1,
    filterBy: "Categories",
    option: [
      "Cooking Equipment",
      "Refrigeration",
      "Food and Beverages Appliances",
      "Food Display",
      "Warewashing",
      "Coffee Equipment",
      "Promotions",
      "Liquidation Stock",
    ],
  },
  {
    id: 2,
    filterBy: "Category",
    option: [
      "Cooking Equipment",
      "Refrigeration",
      "Food and Beverages Appliances",
      "Food Display",
      "Warewashing",
      "Coffee Equipment",
      "Promotions",
      "Liquidation Stock",
    ],
  },
  {
      id:3,
      filterBy:'Price',
      option:['$0.00 - $9,999.99','$10,000.00 - $19,999.99','$20,000.00 and above']
  },
  {
      id:4,
      filterBy:'Power source',
      option:['Electric','Gas']
  },
  {
      id:5,
      filterBy:'Power requirement',
      option:['Single Phase','3 Phase']
  },
  {
      id:6,
      filterBy:'doors',
      option:['1 door','2 doors','3 doors','1','2','3','4']
  },
  {
      id:7,
      filterBy:'Brand',
      option:[
        'Skope',
        'Arneg',
        'Frymaster',
        'Criocabin',
        'Koxka',
        'Unox',
        'Bonnet Neve',
        'AHT',
        'Robot Coupe',
        'IARP',
        'Trueheat',
        'Mazzer',
        'Williams',
        'Garland',
        'Exquisite',
        'FPG',
        'Festive',
        'Birko',
        'Expobar',
        'F.E.D',
        'Bromic',
        'Icematic',
        'Artisan',
        'Woodson',
        'Austheat',
        'Wega',
        'Mecnosud',
        'Sanden',
        'Ice-O-Matic',
        'Baron',
        'Luus',
        'Cobra',
        'Tecfrigo',
        'Carpigiani',
        'Waldorf',
        'Austune',
        'Apuro',
        'Franke Coffee Systems',
        'Airex',
        'Cofrimell',
        'Blueseal',
      ]
  },
  {
      id:8,
      filterBy:'manufactured in',
      option:[
        'Australia',
        'New Zealand',
        'China',
        'Thailand',
        'Asia',
        'France',
        'Italy',
        'Germany',
        'Europe',
        'Spain',
        'America',
        'Korea',
        'Switzerland',
        'Austria',
        'Holland',
        'USA'
      ]
  },
  {
      id:9,
      filterBy:'dimensions-height(mm)',
      max:2200,
      min:725,
      show:true
  },
  {
      id:10,
      filterBy:'dimensions-depth(mm)',
      max:2820,
      min:750,
      show:true
  },
  {
      id:11,
      filterBy:'dimensions-width(mm)',
      max:1130,
      min:600,
      show:true
  },
  {
      id:12,
      filterBy:'Litres(storage)',
      max:1497,
      min:335,
      show:true
  }
];
function Filters() {
  return (
    <>
      <Accordion id="filter-accord" defaultActiveKey={1}>
        {filterOptions.filter(itm => itm.id < 9).map((item) => {
          return (
            <Accordion.Item eventKey={item.id}>
              <Accordion.Header>{item.filterBy}</Accordion.Header>
              {
                  item.option.map((opt)=>{
                      return (
                          <Accordion.Body className='py-2'>{opt}</Accordion.Body>
                      )
                  })
              }
            </Accordion.Item>
          );
        })}
        {filterOptions.filter(itm => itm.id >= 9).map((item) => {
          return (
            <>
              {
                item.show ? 
            <Accordion.Item eventKey={item.id}>
              <Accordion.Header>{item.filterBy}</Accordion.Header>
                <Accordion.Body><DimensionSlider max={item.max} min={item.min}/></Accordion.Body>
                </Accordion.Item> : null
              }
              </>
          );
        })}
      </Accordion>
    </>
  );
}

export default Filters;
