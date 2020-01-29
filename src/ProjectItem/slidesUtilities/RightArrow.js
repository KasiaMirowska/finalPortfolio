import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.forward}>
      <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;