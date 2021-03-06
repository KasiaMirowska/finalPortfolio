import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.forward} >
      <i className="fa fa-arrow-right fa-2x" ></i>
    </div>
  );
}

export default RightArrow;