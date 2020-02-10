import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.back} >
      <i className="fa fa-arrow-left fa-2x" ></i>
    </div>
  );
}

export default LeftArrow;