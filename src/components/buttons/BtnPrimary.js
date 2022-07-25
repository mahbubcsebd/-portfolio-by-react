import React from 'react';
import './btn.css';

const BtnPrimary = (props) => {
  const {btnText} = props;
  return (
    <>
      <a href="#" className='myBtn btn-1'>{btnText}</a>
    </>
  )
}

export default BtnPrimary;