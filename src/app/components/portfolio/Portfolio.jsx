import React from 'react'

import portfolio from '../../api/portfolio/portfolio'

import '../../styles/portfolio/Portfolio.scss'

const Portfolio = () => {

  const renderPortfolio = () => {
    return portfolio.map((item, index) => {
      return (
        <a className="item" href={item.link}>
          <div className="image">
            <img src={item.image} alt="something" />
          </div>
          <div className={"overlay " + item.class}></div>
          <div className="details">
            <div className="logo">
              {item.logo !== false ?
                <img src={item.logo} alt={item.title} />
                :
                <div className="text">{item.text}</div>
              }
            </div>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        </a>
      )
    })
  }

  return (
    <div className="portfolio tilt-in-top-1">
      <div className="search-bar">
        <div className="title">
          Portfolio
        </div>
        <div className="view-more">
          More on my <a href="https://github.com/coffeedzic/">github profile</a>
        </div>
      </div>
      <div className="portfolio-list">
        {renderPortfolio()}
      </div>
    </div>
  )
}

export default Portfolio