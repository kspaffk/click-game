import React from 'react';
import './styles.css'

function Images(props) {
  return (
    <div className='img-container'>
      <img 
        style={props.image.isClicked ? {width: "50px"} : {width: "150px"}} 
        src={`img/${props.image.imgURL}`} 
        alt='vader' 
        onClick={() => props.clicked(props.image.id)}>
      </img>
    </div>
  )
}

export default Images;