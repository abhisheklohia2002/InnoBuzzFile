import React from 'react'

const Display = (props) => {
    const {image,title,price} = props
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <p>{title} </p>
        <p> {price} </p>
      </div>
    </div>
  )
}

export default Display
