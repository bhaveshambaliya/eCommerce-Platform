import React, { useContext, useState } from "react";
import { navtabs } from "./Navtabs";
import { Accordion } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import Layer from "../StyledComponents/Layer";
import { MenuContext } from "./Header";


const NavMenu = styled.nav`
  background: white;
  width: 90%;
  height: 100%;
  overflow: auto;
  transition: 1s;
  position: fixed;
  top: 0px;
  z-index: 1010;
  left: ${(props) => props.theme.left};
`;

NavMenu.defaultProps = {
  theme: {
    left: "-90%",
  },
};

const showMenu = {
  left: "0",
};

const TopButton = styled.button`
  width: 50%;
  padding: 20px 0px;
  font-size: 16px;
  border: none;
  background-color: ${(props) => props.btnTheme.bgColor};
`;
TopButton.defaultProps = {
  btnTheme: {
    bgColor: "default",
  },
};

const activeBtn = {
  bgColor: "white",
};

function Menu() {
  const { menuShow, setmenuShow } = useContext(MenuContext);

  const [active, setactive] = useState(false);

  const closeMenu = ()=>{
    setmenuShow(false)
  }
 
  const btnClick = () => {
    if (!active) {
      setactive(true);
    } else {
      setactive(false);
    }
  };
  return (
    <>
      <Layer show={menuShow} close={closeMenu}></Layer>
      <NavMenu theme={menuShow ? showMenu : ""}>
        <div>
          <TopButton
            btnTheme={active ? "" : activeBtn}
            onClick={active ? btnClick : ""}
          >
            MENU
          </TopButton>
          <TopButton
            btnTheme={active ? activeBtn : ""}
            onClick={active ? "" : btnClick}
          >
            ACCOUNT
          </TopButton>
        </div>
        <div className="bg-white" id="menu-box">
          {active ? (
            <ul className="list-unstyled">
              <li className="m-0 p-3 border">MY ACCOUNT</li>
              <li className="m-0 p-3 border">SIGN IN</li>
              <li className="m-0 p-3 border">CREATE AN ACCOUNT</li>
            </ul>
          ) : (
            <Accordion>
              <Accordion.Item eventKey={2} className="text-center order-2 ">
                <Accordion.Header>Products</Accordion.Header>
                <Accordion.Body className=''>
                  {navtabs
                    .find((alltab) => alltab.tab === "Products")
                    .subtabs.map((product, index) => {
                      return (
                        <Link to={product.path}>
                        <DropdownButton
                          className=""
                          id="dropdown-button-drop-end"
                          title={product.tabName}
                          drop="end"
                          key={index}
                          onClick={closeMenu}
                        >
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another</Dropdown.Item>
                          <Dropdown.Item>Something</Dropdown.Item>
                        </DropdownButton>
                        </Link>
                      );
                    })}
                </Accordion.Body>
              </Accordion.Item>
              {navtabs
                .filter((alltab) => alltab.tab !== "Products")
                .map((item) => {
                  return (
                    <Accordion.Item
                      className={"order-"+`${item.id}`}
                      eventKey={item.id}
                    >
                      <Accordion.Header>{item.tab}</Accordion.Header>
                      
                      {item.subtabs.map((thing) => {
                        return <Link className='text-decoration-none text-dark' to={thing.path}>
                          <Accordion.Body className='text-center' onClick={closeMenu}>{thing.tabName}</Accordion.Body></Link>;
                      })}   
                    </Accordion.Item>
                  );
                })}              
            </Accordion>
          )}
        </div>
      </NavMenu>
    </>
  );
}


export default (Menu);
