import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImg from './../images/mahbub.jpg';
import BtnPrimary from './buttons/BtnPrimary';
import BtnSecondary from './buttons/BtnSecondary';
import './aboutMe.css';

const AboutMe = () => {
  return (
    <>
      <section className="about-me">
        <div className="about-me-area">
          <Container>
            <Row className="about-me-content">
              <Col md={6}>
                <div className="about-text">
                  <p>
                  Hello! I'm Mahbubur Rahman, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>
                  <div className="btn-box">
                    <BtnPrimary btnText="get resume" />
                    <BtnSecondary btnText="my skills" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="about-image">
                <img className="my-image" src={myImg} alt=""/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default AboutMe;