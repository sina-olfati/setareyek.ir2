import React, { useState } from 'react'
import './Footer.css'

// utils
import BButton from '../borderButton/BButton'

// images
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import enamad from '../../assets/images/enamad.aspx'

const Footer = () => {

    const [number, setNumber] = useState('')
    console.log(number)

  return (
    <footer className='footer-container'>
      
        <div className='f-etemad'>
            <img src='' alt='logo samandehi' />
            <img src={enamad} alt='anamad logo' />
        </div>

        <div className='f-recieve'>
            <h2></h2>
            <div className='f-num'>
                <button></button>
                <input placeholder='' value={number} onChange={(i) => setNumber(i.target.value)} />
            </div>
        </div>

        <div className='f-buttons'>
            <BButton image={instagram} imageDark={instagram} text="اینستاگرام ستاره یک" />
            <BButton image={telegram} imageDark={telegram} text="تلگرام ستاره یک" />
        </div>

    </footer>
  )
}

export default Footer
