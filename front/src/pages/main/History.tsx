import React, {useState} from "react";
import {Card, Col, Container, Row} from "reactstrap";

function History() {
    const [historyList, setHistoryList] = useState([{
        title:'경성대학교',
        start:'2017.03',
        end:'2024.02',
        content:'경성대학교(메카트로닉스공학과) 졸업예정'
    },{
        title:'그린컴퓨터 아카데미',
        start:'2023.06',
        end:'2023.12',
        content:'(롯데)기업맞춤형 프로젝트 기반 백엔드 자바, 스프링 웹 SW개발자 양성과정 수료'
    },{
        title:'(주)오스템 임플란트',
        start:'2022.07',
        end:'2023.03',
        content:'자동화기술팀 근무'
    },]);
    return (
        <main className="profile-page ">
            <section className="section">
                <Container className={'history'}>
                    <h1 style={{ color: 'black', marginBottom: '60px' }}>History</h1>
                    <Card className="card-profile mt-n1">
                        <div className="px-4">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    <div className="card-profile-image">
                                        <img
                                            alt="..."
                                            className="rounded-circle"
                                            style={{ zIndex: 100 }}
                                            src={process.env.PUBLIC_URL + '/img/main/history/profile.jpg'}
                                        />
                                    </div>
                                </Col>
                                <Col className="order-lg-3 text-lg-right align-self-lg-center icons" lg="4">
                                    <div className="card-profile-actions mt-lg-0 " style={{ cursor: 'default' }}>
                                        <i
                                            className="fa fa-facebook-square mr-4"
                                            onClick={() => {
                                                window.open('https://www.facebook.com/kimsangyup', '_blank');
                                            }}
                                        />
                                        <i
                                            className="fa fa-github float-right mt-2"
                                            onClick={() => {
                                                window.open('https://github.com/tkddu1591', '_blank');
                                            }}
                                        />
                                    </div>
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
                            {historyList.map((item, index) => (
                                <div className="mt-4 py-4 border-top text-center content" key={item.title}>
                                    <Row className="justify-content-center contentBox">
                                        <div>
                                            <span>{item.title}</span>
                                            <p>
                                                <strong>시작 :</strong> {item.start}
                                            </p>
                                            <p>
                                                <strong>종료 :</strong> {item.end}
                                            </p>
                                        </div>
                                        <div>
                                            <p>{item.content}</p>
                                        </div>
                                    </Row>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Container>
            </section>
        </main>
    );
}

export default History