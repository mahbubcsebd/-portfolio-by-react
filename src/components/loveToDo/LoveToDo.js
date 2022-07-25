import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleLove from './SingleLove';
import Data from '../../love-data.json';
import './loveToDo.css';

const LoveToDo = () => {
  return (
    <>
      <section className="love-to-do">
        <div className="love-to-do-area">
          <Container>
              <div className="love-to-do-content-wrapper">
                <Row>
                    {Data.map((item) => (
                      <SingleLove key={item.key} loveImg={item.img} slitle={item.title} />
                    ))}
                </Row>
              </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default LoveToDo;