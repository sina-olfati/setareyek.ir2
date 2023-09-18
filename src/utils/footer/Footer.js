import React, { useState } from 'react'
import './Footer.css'

// utils
import BButton from '../borderButton/BButton'

// images
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
// import enamad from '../../assets/images/en'

const Footer = () => {

    const [number, setNumber] = useState('')
    console.log(number)

  return (
    <footer className='footer-container'>
      
        <div className='f-enamad'>
            <div className='f-images'>
                <img src='' alt='logo samandehi' />
                <img src='' alt='anamad logo' />
            </div>
        </div>

        <div className='f-recieve'>
            <h2>برای دریافت لینک دانلود اپلیکیشن شماره خود را وارد کنید</h2>
            <div className='f-num'>
                <button>دریافت اپلیکیشن</button>
                <input placeholder='شماره تماس مانند 09123456789' value={number} onChange={(i) => setNumber(i.target.value)} />
            </div>
        </div>

        <div className='f-buttons'>
            <BButton image={instagram} imageDark={instagram} text="اینستاگرام ستاره یک" />
            <BButton image={telegram} imageDark={telegram} text="تلگرام ستاره یک" />
        </div>

        <div className='f-rights'>
            <p>© 2021 All rights reserved Setareaval</p>
        </div>

    </footer>
  )
}

export default Footer
