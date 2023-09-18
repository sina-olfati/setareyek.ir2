import React from 'react'
import "./Title.css"

const Title = ({title}) => {
  return (
    <div className='title-container'>
        <div className='title-content'>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Title
