import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./footer.css";
import pngwing from './pngwing.png'
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const MY__ACCOUNT = [
 
  {
    display: "Create Item",
    url: "./create",
  },
  {
    display: "Collection",
    url: "./my-listed-items",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "/About",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const socialLink = [
  <BsFacebook />,
  <BsTwitter />,
  <BsInstagram />,
  
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                <img src={pngwing} width="50" height="50" className="" alt="" />
                    <h3 style={{ display: 'flex', color: 'yellow'}} >GoldeภdroƤ</h3>
                    &nbsp; 
                    
               
              </h2>
              <h3><p style={{ color: 'white' }}>
              Discover, collect, and sell extraordinary NFTs</p></h3>
<p style={{ color: 'white' }}>Goldendrop is the first and largest NFT marketplace in tunisia</p>
            
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resources</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

         

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright"style={{ color: 'white' }}>
              {" "}
              Copyrights 2022, Developed by Mouhib Medini.
              All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;