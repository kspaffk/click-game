import React from 'react'
import './styles.css'

function Images(props) {
  return (
    <div className='img-container'>
      <img 
        src={`img/${props.image.imgURL}`} 
        alt='vader' 
        onClick={() => props.clicked(props.image.id)}>
      </img>
    </div>
  )
}

export default Images