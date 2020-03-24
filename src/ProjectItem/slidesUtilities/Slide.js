import React from 'react'


const Slide = (img) => {
  console.log(img.img)
  const styles = {
    backgroundImage: `url(${img.img})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    minHeight: '100%',
    minWidth: '100%',
    flexDirection: 'row',
  }
  return <div className="slide" style={styles}></div>
}

export default Slide