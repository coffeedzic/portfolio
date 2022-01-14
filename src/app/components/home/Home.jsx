import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../helpers/icons/icons'
import profileImage from '../../assets/images/profile.jpg'
import '../../styles/home/Home.scss'

const Home = () => {
  return (
    <div className="home tilt-in-fwd-tr">
      <div className="picture">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="content">
        <div className="name">
          Edin Kahvedžić
        </div>
        <div className="description">
          Web developer from Bosnia who seeks to build modern and responsive web pages
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/edincoffeedzic/" target="_blank">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a href="https://www.instagram.com/edincoffeedzic/" target="_blank">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a href="https://github.com/coffeedzic" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://www.linkedin.com/in/coffeedzic/" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home