import React from 'react'
import Col from 'react-bootstrap/Col';

const SingleLove = (props) => {
  const {key,loveImg,slitle} = props;
  return (
    <>
      <Col  md={3} key={key}>
      <div className="single-love">
      <img src={loveImg} alt="" />
        <h3 className="single-love-title">{slitle}</h3>
      </div>
      </Col>
    </>
  )
}

export default SingleLove;