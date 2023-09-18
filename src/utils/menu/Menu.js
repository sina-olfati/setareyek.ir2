import React, {useEffect, useLayoutEffect, useState} from 'react'
import "./Menu.css"

// costum hook
import useHeightCheck from '../../hooks/UseHeightCheck';


// icons
// import LanguageIcon from '@mui/icons-material/Language';
// import HomeIcon from '@mui/icons-material/Home';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import BedtimeIcon from '@mui/icons-material/Bedtime';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

// images
import logo from '../../assets/images/logo.svg'
import logoDark from '../../assets/images/logoDark.svg'
import light from '../../assets/images/light.svg'
import dark from '../../assets/images/dark.svg'

// mui
// import { IconButton } from '@mui/material';
// import { light } from '@mui/material/styles/createPalette';




const Menu = ({theme}) => {

  // checking scrool amount of page
  const isHeightHigher = useHeightCheck()
  

  // theming
  const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  
  const changeTheme = () => {
    theme.toggleColorMode();
    localStorage.setItem("theme", mode === "light" ? "dark" : "light")
    setMode(localStorage.getItem("theme"))
  }
  
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      theme.toggleColorMode();
    }
  }, [])


  const items = [
    {name: "درباره ما", link: ""},
    {name: "تماس با ما", link: ""},
    {name: "خدمات", link: ""},
    {name: "راهمنا و قوانین", link: ""},
    {name: "جوایز و برندگان", link: ""},
    // {name: "home", icon: <HomeIcon />},
    // {name: "resume", icon: <DescriptionIcon />},
    // {name: "portfolio", icon: <DashboardIcon />},
    // {name: "contact", icon: <PhoneEnabledIcon />},
  ]


  return (
    <div className='menu'>
      <header className='active-menu'>
        <div className={`top-bar ${isHeightHigher ? "scrolled" : ''}`}>

            <div className='rightPart'>

              <span className='onlineApp'>نسخه آنلاین اپلیکیشن</span>

              <div className='options'>
                  <ul>

                    {items.map((item) => (
                      <li key={item.name}>
                        <a href={`#${item.name}`} className='link'>
                          <span>{item.name}</span>
                          {/* {item.icon} */}
                        </a>
                      </li>
                    ))}

                  </ul>
              </div>

              <img src={mode === "light" ? logo : logoDark} className='logo' alt='logo'/>

            </div>


            <div className='buttons'>
                {/* <IconButton onClick={() => changeTheme()} className='theming'>
                  {mode == "light" ? 111 : 222}
                </IconButton> */}

                <label className="switch">
                  <input type="checkbox" checked={mode === 'light' ? false : true} onClick={() => changeTheme()}/>
                  <span className="slider">
                    <img src={mode === "light" ? light : dark} alt='them' />
                  </span>
                </label>
            </div>

        </div>
      </header>
    </div>
  )
}

export default Menu
