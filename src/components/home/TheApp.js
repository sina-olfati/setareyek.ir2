import React, { useEffect, useState } from 'react'
import './TheApp.css'

// components
import Title from '../../utils/title/Title'

// images
import card from '../../assets/images/card.svg'
import cardDark from '../../assets/images/cardDark.svg'

const TheApp = () => {

    // theming
    const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // console.log("Theme", mode)

    const check = localStorage.getItem("theme");

    useEffect(() => {
        setMode(localStorage.getItem("theme"));
    }, [check]);


  return (
    <div className='app-container'>
      <Title title="اپلیکیشن ستاره یک" />

      <div className={`app-card ${mode === "light" ? "shadow" : "noShadow"}`}>
        <img src={mode === "light" ? card : cardDark} alt='card picture' />
        <p>اپلیکیشن ستاره یک با کمک دانش بومی نخبگان ایرانی، تمرکز زیادی بر امنیت ۱۰۰ درصدی تراکنش ها و فعالیت های کاربران خود دارد. در کنار عهده داری این امنیت که حق مسلم هر کاربر است به منظور ارج نهادن به اعتماد کاربران، جشنواره ای دائمی با جوایزی متنوع و نفیس از طریق اپلیکشن برگزار می شود که شما با انجام کامل هر عملیات خرید یا پرداخت قبض در اپلیکیشن ستاره یک امتیازی متناسب با آن دریافت خواهید کرد که شانس شما را برای برنده شدن جوایزی از جمله خودروی سواری و سکه های طلا افزایش خواهد داد.</p>
      </div>
    </div>
  )
}

export default TheApp
