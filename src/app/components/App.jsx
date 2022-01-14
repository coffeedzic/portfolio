import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AnimatedCursor from "react-animated-cursor"
import Particles from "react-tsparticles";

import Loader from './loader/Loader'
import Header from './header/Header'
import MobileHeader from './mobile-header/MobileHeader'
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio';
import { particles } from '../helpers/particles/particles'

import '../styles/App.scss'


const App = () => {
  const [pageLoaded, setPageLoaded] = useState(false)
  const activeMenu = useSelector(state => state.activeMenu)

  const particlesInit = (main) => {
  };

  const particlesLoaded = (container) => {
  };

  useEffect(() => {
    if (!pageLoaded) {
      setTimeout(() => {
        setPageLoaded(true)
      }, 3000)
    }
  }, [])

  const renderPage = () => {
    if (pageLoaded) {
      switch (activeMenu) {
        case 'home':
          return <Home />
        case 'about':
          return <About />
        case 'portfolio':
          return <Portfolio />
        default:
          return <Home />
      }
    } else {
      return <Loader />
    }
  }

  return (
    <div className="app">
      <Particles id="tsparticles" options={particles} init={particlesInit} loaded={particlesLoaded} />
      <div className="header-100">
        <Header />
      </div>
      <div className="mobile-100">
        <MobileHeader />
      </div>
      <main>
        {renderPage()}
        <AnimatedCursor
          dotSize={8}
          outlineSize={40}
          color='11, 177, 151'
          outlineAlpha={0.3}
          innerScale={0.7}
          outlineScale={2}
        />
      </main>
    </div>
  )
}

export default App