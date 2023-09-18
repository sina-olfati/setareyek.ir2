import React, { useEffect, useState } from 'react'
import './Services.css'

// components
import Title from '../../utils/title/Title'

// images
import services1 from '../../assets/images/services1.svg'
import services1Dark from '../../assets/images/services1Dark.svg'
import services2 from '../../assets/images/services2.svg'
import services2Dark from '../../assets/images/services2Dark.svg'
import services3 from '../../assets/images/services3.svg'
import services3Dark from '../../assets/images/services3Dark.svg'
import services4 from '../../assets/images/services4.svg'
import services4Dark from '../../assets/images/services4Dark.svg'
import num from '../../assets/images/num.svg'
import numDark from '../../assets/images/numDark.svg'


const Services = () => {

    // theming
    const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // console.log("Theme", mode)

    const check = localStorage.getItem("theme");

    useEffect(() => {
        setMode(localStorage.getItem("theme"));
    }, [check]);

    const items = [
        {text: "جایزه", image: mode === "light" ? services4 : services4Dark},
        {text: "کارت به کارت", image: mode === "light" ? services3 : services3Dark},
        {text: "پرداخت قبوض", image: mode === "light" ? services2 : services2Dark},
        {text: "شارژ اضطراری", image: mode === "light" ? services1 : services1Dark},
    ]


  return (
    <div className='Services-container'>
      <Title title="خدمات" />

      <div className='s-scroller'>

        <ul>
            {items.map((i) => (
                <li className='s-item'>
                    <img className={`s-image ${mode === "light" ? "shadow" : "noShadow"}`} src={i.image} alt='logo of item' />
                    <p>{i.text}</p>
                </li>
            ))}
        </ul>

      </div>

      <div className={`s-banner ${mode === "light" ? "shadow" : "noShadow"}`}>
        <img src={mode === "light" ? num : numDark} alt='getting the app by a code'/>
      </div>
    </div>
  )
}

export default Services
