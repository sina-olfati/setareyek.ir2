import React, { useEffect, useState } from 'react'
import './BButton.css'

const BButton = ({image, imageDark, text}) => {

    // theming
    const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // console.log("Theme", mode)

    const check = localStorage.getItem("theme");

    useEffect(() => {
        setMode(localStorage.getItem("theme"));
    }, [check]);


  return (
    <div className='bButton-container'>
            <button><img src={mode === "light" ? image : imageDark} /> <p>{text}</p></button>
    </div>
  )
}

export default BButton
