import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenu } from '../../redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { menu } from '../../api/menu/menu-mobile'

import '../../helpers/icons/icons'
import '../../styles/mobile-header/MobileHeader.scss'

const MobileHeader = () => {
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
          <FontAwesomeIcon icon={item.icon} />
        </div>
      )
    })
  }

  return (
    <div className="mobile-header">
      <div className="logo">
        <div className="text">coffeedzic<span>.</span></div>
      </div>
      <div className="menu">
        {renderMenu()}
      </div>
    </div>
  )
}

export default MobileHeader