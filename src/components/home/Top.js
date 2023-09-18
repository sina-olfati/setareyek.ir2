import React, { useEffect, useState } from 'react'
import './Top.css'

// utils
import BButton from '../../utils/borderButton/BButton'

// images
import circle from "../../assets/images/circle.svg"
import circleDark from "../../assets/images/circleDark.svg"
import mobile1 from "../../assets/images/mobile1.jpg"
import mobile2 from "../../assets/images/mobile2.jpg"
import mobile3 from "../../assets/images/mobile3.jpg"
import mobile1Dark from "../../assets/images/mobile1Dark.jpg"
import mobile2Dark from "../../assets/images/mobile2Dark.jpg"
import mobile3Dark from "../../assets/images/mobile3Dark.jpg"
import arrow from "../../assets/images/arrow.svg"
import apple from "../../assets/images/apple.svg"
import appleDark from "../../assets/images/appleDark.svg"
import android from "../../assets/images/android.svg"
import androidDark from "../../assets/images/androidDark.svg"



const Top = () => {

    // theming
    const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // console.log("Theme", mode)

    const check = localStorage.getItem("theme");

    useEffect(() => {
        setMode(localStorage.getItem("theme"));
    }, [check]);

    
    const images = [
        {id: 1, image: mode === "light" ? mobile1 : mobile1Dark},
        {id: 2, image: mode === "light" ? mobile2 : mobile2Dark},
        {id: 3, image: mode === "light" ? mobile3 : mobile3Dark},
        {id: 4, image: mode === "light" ? mobile1 : mobile1Dark},
        {id: 5, image: mode === "light" ? mobile2 : mobile2Dark},
    ]

    const [counter, setCounter] = useState(1)

    const arrowHandler = (action) => {
        // action === "increment" ? counter++ : counter--;
        // counter === 1 ? counter = 4 : null;
        // counter === 5 ? counter = 2 : null;
        console.log(action)
        if (action === "increment") {
            if (counter === 3) {
                setCounter(1)
            } else {
                setCounter(counter + 1)
            }
        } else {
            if (counter === 1) {
                setCounter(3)
            } else {
                setCounter(counter - 1)
            }
        }
    }
    // console.log("counter", counter)
    
  return (
    <div className='top-container'>
      
      <div className='t-preview'>
        <img className='t-circleBG' src={mode === "light" ? circle : circleDark} alt='circle background' />

        <div className='t-slider'>

            <span className='t-arrow'>
                <img src={arrow} onClick={() => arrowHandler("decrement")} alt='left arrow' />
            </span>

            <div className='t-mobile'>
                <div className={`t-slides t-${counter}`}>
                    {images.map((i) => (
                        <img key={i.id} src={i.image} alt='the mobile' />
                    ))}
                </div>
            </div>

            <span className='t-arrow'>
                <img src={arrow} onClick={() => arrowHandler("increment")} alt='right arrow' />
            </span>

        </div>
      </div>


      <div className='t-data'>
        <div className='t-texts'>
            <h1>اپلیکیشن ستاره یک</h1>
            <p>اپلیکیشن ستاره یک، برنامه ای کاربردی و چند منظوره است که با نصب آن بر روی گوشی خود می توانید بسیاری از کارهای روزمره‌ی خودتان را به سادگی از طریق آن انجام بدهید. در ضمن هر فعالیتی در اپلیکیشن ستاره یک امتیاز ویژه‌ی خود را برای شما به همراه دارد. شما به راحتی میتوانید امتیازهایتان را جمع کنید و در قرعه کشی های متنوع، جایزه هایی مثل خودروی سواری، سکه و … ببرید.
                <br />
                مهمترین امکانات:
                <br />
                • خرید شارژ و بسته های اینترنت همه‌ی اپراتورها
                <br />
                • کارت به کارت به همه‌ی بانک ها
                <br />
                • پرداخت اتوماتیک قبض‌های برق، گاز، آب و …
                <br />
                امکان نصب اپلیکیشن ستاره یک، بر روی سیستم های عامل اندروید و ios وجود دارد.
            </p>
        </div>
        <div className='t-download'>
            {/* <button><img src={mode === "light" ? apple : appleDark} /> <p>دانلود نسخه ios</p></button>
            <button><img src={mode === "light" ? android : androidDark} /> <p>دانلود نسخه اندروید</p></button> */}
            <BButton image={apple} imageDark={appleDark} text="دانلود نسخه ios" />
            <BButton image={android} imageDark={androidDark} text="دانلود نسخه اندروید" />
        </div>
      </div>

    </div>
  )
}

export default Top
