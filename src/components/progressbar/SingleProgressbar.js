import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressbar.css';


const SingleProgressbar = (props) => {
    const {progressTitle,progressPercent} = props;
    const now = progressPercent;
  return (
    <>
        <Col md={6}>
            <div className="single-progressbar">
                <div className="sp-top-wrapper">
                    <h3 className="single-progressbar-title">{progressTitle}</h3>
                    <p className="progressbar-percent">{now}%</p>
                </div>
                <div className="sp-bottom-wrapper">
                    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                </div>
            </div>
        </Col>
    </>
  )
}

export default SingleProgressbar;

