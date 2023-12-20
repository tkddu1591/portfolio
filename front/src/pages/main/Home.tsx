import Hero from '../../views/IndexSections/Hero';
import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

function Home() {
  return (
    <>
      <Hero />
      <AboutMe></AboutMe>
      <Skills></Skills>
      <section className="project" >
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-lg-2 ml-lg-auto" md="6">
              <div className="position-relative pl-md-5">
                <img alt="..." className="img-center img-fluid" src={require('assets/img/ill/ill-2.svg')} />
              </div>
            </Col>
            <Col className="order-lg-1" lg="6">
              <div className="d-flex px-3">
                <div>
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-building text-primary" />
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-white">Modern Interface</h4>
                  <p className="text-white">
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                    process will continue whatever.
                  </p>
                </div>
              </div>
              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-success">Awesome Support</h5>
                      <p>
                        The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                        process will continue whatever.
                      </p>
                      <a className="text-success" href="#pablo" onClick={e => e.preventDefault()}>
                        Learn more
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-active-40" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-warning">Modular Components</h5>
                      <p>
                        The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                        process will continue whatever.
                      </p>
                      <a className="text-warning" href="#pablo" onClick={e => e.preventDefault()}>
                        Learn more
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Home;
