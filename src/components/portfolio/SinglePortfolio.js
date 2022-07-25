import React from 'react';
import Col from 'react-bootstrap/Col';
import githubImg from './../../images/github.png';
import linkImg from './../../images/link.png';

const SinglePortfolio = (props) => {
    const {key, portfolioImg,portfolioTitle,portfolioText} = props;
  return (
    <>
        <Col md={4}>
            <div className="single-portfolio" key={key}>
                <img className='portfolio-img' src={portfolioImg} alt="" />
                <div className="sp-bottom">
                    <h3 className="single-portfolio-title"><a href="#">{portfolioTitle}</a></h3>
                    <p>{portfolioText}</p>
                    <div className="links">
                        <ul>
                        <li><a href="#"><img src={githubImg} alt="" /></a></li>
                        <li><a href="#"><img src={linkImg} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="tools">
                        <ul>
                        <li>gatsby</li>
                        <li>netlify</li>
                        <li>ga</li>
                        <li>forestry</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Col>
    </>
  )
}

export default SinglePortfolio;