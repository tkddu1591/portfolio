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
      <History></History>

    </>
  );
}
function History(){
  return( <main className="profile-page ">
    <section className="section">
      <Container className={'history'}>
        <h1 style={{ color: 'black' }}>History</h1>
        <Card className="card-profile mt-n1">
          <div className="px-4">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                        src={process.env.PUBLIC_URL + '/img/main/history/profile.jpg'}
                        alt={'profile'}
                        className={'profile'}
                        style={{ borderRadius: '30px' }}
                    />
                  </a>
                </div>
              </Col>
              <Col className="order-lg-3 text-lg-center align-self-lg-center icon" lg="4">
                <i className="fa fa-facebook-square" />
                <i className="fa fa-github" />
              </Col>
              <Col className="order-lg-1" lg="4">
                <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span className="heading">2023.06~</span>
                    <span className="description">started</span>
                  </div>
                  <div>
                    <span className="heading">3</span>
                    <span className="description">projects</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="text-center mt-6">
              <h3>
                김상엽 <span className="font-weight-light"></span>
              </h3>
            </div>
            <div className="mt-4 py-4 border-top text-center">
              <Row className="justify-content-center">
                <Col lg={"3"}>
                  <p>2017.03 ~</p>
                  <p>2024.02</p>
                </Col>
                <Col lg="9" className={'text-left'}>
                  <p>
                   내용
                  </p>
                </Col>
              </Row>
            </div>  <div className="mt-4 py-4 border-top text-center">
              <Row className="justify-content-center">
                <Col lg={"3"}>
                  <p>2017.03 ~</p>
                </Col>
                <Col lg="9" className={'text-left'}>
                  <p>
                   내용
                  </p>
                </Col>
              </Row>
            </div>  <div className="mt-4 py-4 border-top text-center">
              <Row className="justify-content-center">
                <Col lg={"3"}>
                  <p>2017.03 ~</p>
                </Col>
                <Col lg="9" className={'text-left'}>
                  <p>
                   내용
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  </main>)
}

function Project() {
  const [modal, setModal] = useState('');
  const [projectList, setProjectList] = useState([
    {
      imgLink: '/img/main/project/portfolio.png',
      title: 'Portfolio',
      date: '2023.12',
      content:
        '<span>\n' +
        '<strong>Sang`s Portfolio는 제 포트폴리오입니다.</strong>\n' +
        '<br />저의 첫 개인 작업물이자, 저의 보유 기술들 및 작업한 프로젝트 내용을 담은 페이지 입니다.\n' +
        '<br />\n' +
        '<br />Back과 Front는 기존에 사용하던 Spring boot, React를 사용하였고, CI CD를 중점으로 두고 작업하였습니다.\n' +
        '</span>\n',
      skillsTable: [
        { title: 'Back', content: 'Spring boot' },
        { title: 'Front', content: 'React, typescript' },
        { title: 'CI CD', content: 'github Action, netlify' },
      ],
      videos: [
        { title: '프로젝트 시연영상', link: 'https://www.youtube.com/embed/Q8xfKjQxjg8?si=rbMl-G4fS4jtIM-n' },
        { title: '프로젝트 발표영상', link: 'https://www.youtube.com/embed/nSfG5phb78w?si=5dYN_WK_B4Q2VhKU' },
      ],
      githubLink: 'https://github.com/tkddu1591/HelloWorld',
    },
    {
      imgLink: '/img/main/project/HelloWorld.png',
      title: 'Hello World',
      date: '2023.11',
      content:
        '<span>\n' +
        '<strong>Hello World는 개발자 커뮤니티입니다.</strong>\n' +
        '<br /> 개발자의 필요 강의들의 수강 및 관련 대화를 나눌 수 있는 페이지입니다.\n' +
        '<br />\n' +
        '<br /> QueryDSL을 이용한 여러 조건 검색 기능과 typescript를 활용한 프론트 기능 구현을 중심으로\n' +
        '작업하였습니다.\n' +
        '</span>\n',
      skillsTable: [
        { title: 'Back', content: 'Spring boot, JPA, QueryDsl' },
        { title: 'Front', content: 'React, typescript' },
        { title: '담당파트', content: '강의, DM' },
      ],
      videos: [
        { title: '프로젝트 시연영상', link: 'https://www.youtube.com/embed/Q8xfKjQxjg8?si=rbMl-G4fS4jtIM-n' },
        { title: '프로젝트 발표영상', link: 'https://www.youtube.com/embed/nSfG5phb78w?si=5dYN_WK_B4Q2VhKU' },
      ],
      githubLink: 'https://github.com/tkddu1591/HelloWorld',
    },
    {
      imgLink: '/img/main/project/LotteOn.png',
      title: 'Lotte On',
      date: '2023.10',
      content:
        '<span>\n' +
        '<strong>Lotte On은 쇼핑몰 입니다.</strong>\n' +
        '<br />시중에 나와있는 쇼핑몰들을 참고하여 최대한 반영해서 작업하였습니다.\n' +
        '<br />\n' +
        '<br /> Spring boot Security를 이용한 JWT 기능과, 전반적인 Spring boot 및 db(mysql) 이해의 목적으로 작업하였습니다.\n' +
        '</span>\n',
      skillsTable: [
        { title: 'Back', content: 'Spring boot, JWT, JPA' },
        { title: 'Front', content: 'React, javascript' },
        { title: '담당파트', content: '로그인, product, myPage' },
      ],
      videos: [{ title: '프로젝트 시연영상', link: 'https://www.youtube.com/embed/RQU2VGVtf_8?si=tpT_HGgCb_6yS-tz' }],
      githubLink: 'https://github.com/tkddu1591/LotteShop2',
    },
  ]);
  return (
    <section className="project">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="12">
            <h1 style={{ color: 'black' }}>project</h1>
            {projectList.map((project, index) => (
              <Card key={project.title} className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <Row>
                    <Col lg={7} className={'img'}>
                      <img src={process.env.PUBLIC_URL + project.imgLink} alt={project.title} />
                    </Col>
                    <Col lg={5} className={'content'}>
                      <p>{project.title}</p>
                      <span>개발기간 : {project.date}</span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.content,
                        }}
                      />
                      <table>
                        <tbody>
                          {project.skillsTable.map((skill, index) => (
                            <tr key={skill.title}>
                              <td>{skill.title}</td>
                              <td>{skill.content}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className={'icon'}>
                        <i className="bi bi-youtube youtube" onClick={() => setModal(project.title)}></i>
                        <ProjectModal
                          title={project.title}
                          modal={modal}
                          videos={project.videos}
                          setModal={setModal}></ProjectModal>
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
            ))}
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
    </section>
  );
}

function ProjectModal({ title, modal, setModal, videos }) {
  return (
    <Modal className="modal-xl modal-dialog-centered" isOpen={modal === title} toggle={() => setModal('')}>
      <div className="modal-header">
        <h4 className="modal-title" id="modal-title-default">
          {title}
        </h4>
        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setModal('')}>
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        {videos.map((video, index) => (
          <>
            <h5>{video.title}</h5>
            <div className={'youtube-div'}>
              <iframe
                className={'youtube-player'}
                width="640"
                height="360"
                src={video.link}
                allowFullScreen={true}></iframe>
            </div>
          </>
        ))}
      </div>
    </Modal>
  );
}

export default Home;
