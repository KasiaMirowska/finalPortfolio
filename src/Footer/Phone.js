import React from 'react';


export default function Phone(props) {
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h1>Mobile</h1>
        <h1>781 307 6258</h1>
        <button onClick={props.closePopup}>close me</button>
      </div>
    </div>

  )

};