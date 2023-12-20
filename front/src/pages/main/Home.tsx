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
      <Project></Project>
    </>
  );
}

function Project() {
  return (
    <section className="project">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="12">
            <h1 style={{ color: 'white' }}>project</h1>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <Row>
                  <Col lg={7} className={'img'}>
                    <img src={process.env.PUBLIC_URL + '/img/main/project/HelloWorld.png'} alt={'helloWorld'} />
                  </Col>
                  <Col lg={5} className={'content'}>
                    <p>Hello World</p>
                    <div>
                      <span>2023.10 - 2021.11</span>
                    </div>
                    <div>
                      <span><strong>Hello World는 개발자 커뮤니티입니다.</strong><br/> 개발자의 필요 강의들의 수강 및 관련 대화를 나눌 수 있는 페이지입니다.</span>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>github</td>
                          <td>https://github.com/tkddu1591/HelloWorld</td>
                        </tr>
                        <tr>
                          <td>useSkills</td>
                          <td>dd</td>
                        </tr>
                        <tr>
                          <td>dd</td>
                          <td>dd</td>
                        </tr>
                      </tbody>
                    </table>
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
  );
}

export default Home;
