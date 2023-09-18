import React from 'react'
import './Home.css'

// components
import Top from '../components/home/Top'
import TheApp from '../components/home/TheApp'

const Home = () => {
  return (
    <div className='home-container'>
      <Top />
      <TheApp />
    </div>
  )
}

export default Home
