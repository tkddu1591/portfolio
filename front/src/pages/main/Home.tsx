import Hero from '../../views/IndexSections/Hero';
import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { Button, Card, CardBody, Col, Container, Modal, Row } from 'reactstrap';

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
  const [modal, setModal] = useState('');
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
                    <span>2023.10 - 2023.11</span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<span>\n' +
                            '<strong>Hello World는 개발자 커뮤니티입니다.</strong>\n' +
                            '<br /> 개발자의 필요 강의들의 수강 및 관련 대화를 나눌 수 있는 페이지입니다.\n' +
                            '<br />\n' +
                            '<br /> QueryDSL을 이용한 여러 조건 검색 기능과 typescript를 활용한 프론트 기능 구현을 중심으로\n' +
                            '작업하였습니다.\n' +
                            '</span>\n',
                      }}
                    />
                    <table>
                      <tbody>
                        <tr>
                          <td>Back</td>
                          <td>Spring boot, JPA, QueryDsl</td>
                        </tr>
                        <tr>
                          <td>Front</td>
                          <td>React, typescript</td>
                        </tr>
                        <tr>
                          <td>담당파트</td>
                          <td>강의, DM</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={'icon'}>
                      <i className="bi bi-youtube youtube" onClick={() => setModal('HelloWorld')}></i>
                      <ProjectModal title={'HelloWorld'} modal={modal} setModal={setModal}></ProjectModal>
                      <i
                        className="bi bi-github github"
                        onClick={() => {
                          window.open('https://github.com/tkddu1591/HelloWorld');
                        }}>
                        {' '}
                      </i>
                    </div>
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

function ProjectModal({ title, modal, setModal }) {
  return (
    <Modal className="modal-xl modal-dialog-centered" isOpen={modal === title} toggle={() => setModal('')}>
      <div className="modal-header">
        <h4 className="modal-title" id="modal-title-default">
          Hello World 영상
        </h4>
        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setModal(false)}>
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>프로젝트 시연영상</h5>
        <div className={'youtube-div'}>
          <iframe
            className={'youtube-player'}
            width="640"
            height="360"
            src="https://www.youtube.com/embed/Q8xfKjQxjg8?si=rbMl-G4fS4jtIM-n"
            allowFullScreen={true}></iframe>
        </div>

        <h5>프로젝트 발표영상</h5>
        <div className={'youtube-div'}>
          <iframe
            className={'youtube-player'}
            width="640"
            height="360"
            src="https://www.youtube.com/embed/Q8xfKjQxjg8?si=rbMl-G4fS4jtIM-n"
            allowFullScreen={true}></iframe>
        </div>
      </div>
    </Modal>
  );
}

export default Home;
