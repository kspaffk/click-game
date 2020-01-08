import React from 'react';
import './styles.css'

function Images(props) {
  return (
    <div className='img-container'>
      <img style={props.image.isClicked ? {border: "1 solid red"} : {border: "none"}} src={`img/${props.image.imgURL}`} alt='vader' onClick={props.clicked} id={props.image.id}/>
    </div>
  )
}

export default Images;