import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

function AboutMe() {
  const md = 12;
  const lg = 6;
  const [itemList, setItemList] = useState([
    {
      iTag: 'bi bi-person-fill',
      title: '이름',
      content: '김상엽',
      isATag: false,
    },
    {
      iTag: 'bi bi-calendar2-event-fill',
      title: '생년월일',
      content: '1998.10.21',
      isATag: false,
    },
    {
      iTag: 'bi bi-geo-alt-fill',
      title: '주소지',
      content: '부산광역시 남구',
      isATag: false,
    },
    {
      iTag: 'bi bi-telephone-fill',
      title: '연락처',
      content: '010-3013-9397',
      isATag: true,
      aTagHref: 'tel:010-3013-9397',
    },
    {
      iTag: 'bi bi-envelope-fill',
      title: '이메일',
      content: 'tkddu1591@gmail.com',
      isATag: true,
      aTagHref: 'mailto:tkddu1591@gmail.com',
    },
    {
      iTag: 'bi bi-pencil-fill',
      title: '학력',
      content: '경성대학교(메카트로닉스공학부)',
      isATag: false,
    },
  ]);
  return (
    <section>
      <Container className={'aboutMe'}>
        <Row>
          <Col lg={12}>
            <h1>About Me</h1>
          </Col>
          <Col className={'table'} lg={4} md={6}>
            <div className={'my_profile'}>
              <img src={`${process.env.PUBLIC_URL}/img/main/my_profile.jpg`} alt={'my_profile'} />
            </div>
          </Col>
          <Col lg={8} md={6} className={'table'}>
            <Row className={'aboutBox'}>
              {itemList.map((item, index) => (
                <AboutMeItem key={item.title} item={item}></AboutMeItem>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function AboutMeItem({ item }) {
  const md = 12;
  const lg = 6;

  const [aColor, setAColor] = useState('dimgrey');
  return (
    <Col className={'item'} lg={lg} md={md}>
      <div className={'icon'}>
        <i className={item.iTag}></i>
      </div>
      <div className={'title'}>
        <p>{item.title}</p>
        {!item.isATag ? (
          <p>{item.content}</p>
        ) : (
          <a
            style={{ color: aColor, transition: '0.5s' }}
            onMouseLeave={() => {
              setAColor('dimgray');
            }}
            onMouseEnter={() => {
              setAColor('slateblue');
            }}
            href={item.aTagHref}>
            {item.content}
          </a>
        )}
      </div>
    </Col>
  );
}

export default AboutMe;
