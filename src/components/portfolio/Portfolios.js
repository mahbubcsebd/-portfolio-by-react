import React, {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SinglePortfolio from './SinglePortfolio';
import Data from './../../portfolio-data.json';
import './portfolios.css';
import BtnSecondary from '../buttons/BtnSecondary';

const Portfolios = () => {
  const [btnValue, setmyFunction] = useState ("more");

  const myFunction = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setmyFunction("show more");
    }, 1000);
    
  }

  const myFunction2 = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setmyFunction("more");
    }, 1000);
  }
  return (
    <>
      <section className="portfolios">
        <div className="portfolios-area">
          <Container>
            <div className="portfolios-content-wrapper">
              <Row>
              {Data.map((item) => (
                  <SinglePortfolio key={item.key} portfolioImg={item.img} portfolioTitle={item.title} portfolioText={item.text} />
                ))
              }
              </Row>
            </div>
            <div className="more-btn-box">
              <button onMouseOver={myFunction} onMouseLeave={myFunction2} ><BtnSecondary btnText={btnValue}/></button>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Portfolios;