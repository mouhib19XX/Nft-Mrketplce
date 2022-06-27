import React from "react";
import { NavLink } from "react-router-dom";
import {Button} from 'react-bootstrap';
function Common({  imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                  
                    <strong className="brand-name" style={{ color: 'white' }}>Welcome to the world of GoldeภdroƤ. </strong>
                  </h1>

                  <h2 className="my-3" style={{ color: 'white' }}>
                    I'm a talented developer that can help u get in the NFT industry easly and safely !
                  </h2>

                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                    <Button variant="outline-primary">
                        {btname} 
                        </Button>
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;