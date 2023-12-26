import Hero from '../../views/IndexSections/Hero';
import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { Button, Card, CardBody, Col, Container, Modal, Row } from 'reactstrap';
import Project from "./Project";
import History from "./History";

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




export default Home;
