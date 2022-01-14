import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenu } from '../../redux/store'

import { menu } from '../../api/menu/menu-web'

import '../../styles/header/Header.scss'

const Header = () => {
  const activeMenu = useSelector(state => state.activeMenu)
  const dispatch = useDispatch()

  const renderMenu = () => {
    return menu.map((item, index) => {
      const renderClass = () => {
        if (activeMenu === item.value) {
          return "item active"
        } else {
          return "item"
        }
      }

      return (
        <div
          className={renderClass()}
          key={index}
          onClick={() => dispatch(setActiveMenu(item.value))}
        >
          {item.name}
        </div>
      )
    })
  }

  return (
    <div className="header">
      <div className="logo">
        <div className="cup">
          <svg className="coffee" width="37" height="48" viewbox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z" stroke="#8590a5" strokeWidth="2"></path>
            <path d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34" stroke="#8590a5" strokeWidth="2"></path>
            <path id="steamLeft" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0bb197"></path>
            <path id="steamRight" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="#0bb197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <div className="text">
          coffeedzic
          <span>.</span>
        </div>
      </div>
      <div className="menu">
        {renderMenu()}
      </div>
      <div className="copyright">
        Created with <span>❤</span> by Edin Kahvedžić
      </div>
    </div>
  )
}

export default Header