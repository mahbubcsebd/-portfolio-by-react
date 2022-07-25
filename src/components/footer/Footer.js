import React from 'react';
import BtnPrimary from '../buttons/BtnPrimary';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Data from '../../SingleContact';
import './footer.css';

const Footer = () => {
    const [title, text] = Data;
  return (
    <>
        <footer className="footer">
            <div className="footer-area">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="footer-left">
                                <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                                <BtnPrimary btnText="contact me" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="footer-right">
                                {Data.map((item) => (
                                    <div className="contact-information-wrapper">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    </>
  )
}

export default Footer;