import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BtnPrimary from './buttons/BtnPrimary';
import BtnSecondary from './buttons/BtnSecondary';
import './hero.css';

const Hero = () => {
  return (
    <>
      <section id="hero" className='hero'>
        <div className="hero-area">
          <Container>
            <Row>
              <Col md={8}>
                <div className="hero-content">
                <span>Hello! I am</span>
                  <h1 className="hero-title">Mahbubur Rahman</h1>
                  <h3>Full Stack Developer</h3>
                  <ul>
                    <li>Web Developer</li>
                    <li>Programmer</li>
                    <li>Software Engineer</li>
                  </ul>
                  <div className="btn-box">
                    <BtnPrimary btnText="get resume" />
                    <BtnSecondary btnText="about me" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Hero;