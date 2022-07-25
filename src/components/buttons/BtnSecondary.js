import React from 'react';
import './btn.css';

const BtnSecondary = (props) => {
  const {btnText} = props;
  return (
    <>
      <a href="#" className='myBtn btn-2'>{btnText}</a>
    </>
  )
}

export default BtnSecondary;