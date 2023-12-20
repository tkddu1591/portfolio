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
      <section className="project">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-lg-1" lg="12">
              <h1 style={{ color: 'white' }}>project</h1>
              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <Row>
                    <Col lg={3}>Hello World</Col>
                    <Col lg={9}>
                      <a className="text-primary" href="#pablo" onClick={e => e.preventDefault()}>
                        Learn more
                      </a>
                    </Col>
                  </Row>
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
      </section>
    </>
  );
}

export default Home;
