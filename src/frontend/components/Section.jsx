import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./Section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Once you’ve set up your wallet, connect it to Goldendrop by clicking the wallet icon in the top right corner.",
    
  },

  {
    title: "Buy your favourite NFTs",
    desc: "Explore the marketplace, chose one or more non-fungible tokens that you admire need ",
    
  },

  {
    title: "Add your NFTs",
    desc: "Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content. ",
    
  },

  {
    title: "List them for sale",
    desc: "create your NFTs and list them for sell, so that we expose them and recommand them to the community ",
    
  },
];

const Section = () => {
  return (
    <section  >
      <Container >
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section;