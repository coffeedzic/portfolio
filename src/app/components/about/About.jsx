import React from 'react'

import cv from '../../assets/files/cv.pdf'
import '../../styles/about/About.scss'

const About = () => {
  return (
    <div className="about tilt-in-right-2">
      <div className="title">
        Web developer!
      </div>
      <div className="section-two">
        <div className="description">
          Passionate, 24 years old, lover of
          IT and programming. Love for IT
          dates back to youth times. In recent
          years he worked abroad. Besides
          this loves to play video games,
          watch movies & TV shows and
          loves to walk & travel.
        </div>
        <div className="info">
          <ul className="heading">
            <li>Birthday:</li>
            <li>Address:</li>
            <li>Country:</li>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Job status:</li>
          </ul>
          <ul className="text">
            <li>09/11/1996</li>
            <li>Stuparići 19, 71300 Visoko</li>
            <li>Bosnia and Herzegovina</li>
            <li>edin@coffeedzic.com</li>
            <li>+38761572137</li>
            <li>Employed ( Teneo & Bloola )</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <a href={cv} target="_blank">
          <div className="btn">
            Download CV
          </div>
        </a>
      </div>
      <div className="title light">
        Experiences
      </div>
      <div className="timeline">
        <div className="item">
          <div className="heading">
            <div className="main">
              bloola GmbH & Co. KG <span className="date">2022 - today</span>
            </div>
            <div className="target">
              Frontend developer <span className="type">PART TIME</span>
            </div>
          </div>
          <div className="description">
            Developing interactive software applications for needs of this company.
          </div>
          <div className="link">
            <a href="https://bloola.com" target="_blank">https://bloola.com</a>
          </div>
        </div>
        <div className="item">
          <div className="heading">
            <div className="main">
              Teneo <span className="date">2021 - today</span>
            </div>
            <div className="target">
              Software developer
            </div>
          </div>
          <div className="description">
            Maintaining HR software applications for Raiffeisen Bank, Sberbank BH, Apoteke Sarajevo.<br />
            Developing software applications for Direction for European Integration and Sarajevogas.
          </div>
          <div className="link">
            <a href="https://teneo.ba" target="_blank">https://teneo.ba</a>
          </div>
        </div>
        <div className="item">
          <div className="heading">
            <div className="main">
              Lab387 <span className="date">2020 - 2021</span>
            </div>
            <div className="target">
              Internship
            </div>
          </div>
          <div className="description">
            Internship under the supervision of Amar Bešlija. Learned a lot about PHP, Javascript & SQL.<br />
            Created several projects during the internship.
          </div>
          <div className="link">
            <a href="https://lab387.com" target="_blank">https://lab387.com</a>
          </div>
        </div>
      </div>
      <div className="title light">
        Educations
      </div>
      <div className="timeline">
        <div className="item">
          <div className="heading">
            <div className="main">
              IT Academy <span className="date">2020 - 2021</span>
            </div>
            <div className="target">
              PHP Web Development
            </div>
          </div>
          <div className="description">
            I got a professional education in field of web developemnt technologies. I learned HTML, CSS, Javascript, PHP, XML & MySql. Also I learned technologies like AJAX, jQuery, AngularJS, ReactJS, Apache server Administration, Internet marketing & Wordpress development.
          </div>
          <div className="link">
            <a href="https://it-akademija.com" target="_blank">https://it-akademija.com</a>
          </div>
        </div>
        <div className="item">
          <div className="heading">
            <div className="main">
              Gymnasium Visoko <span className="date">2011 - 2015</span>
            </div>
            <div className="target">
              Social course
            </div>
          </div>
          <div className="description">
            I have learned many things during my highschool days, for instance I learned a lot about IT, C++ & Pascal. I was part of many sections cause I love to learn new things and love to work in groups.
          </div>
          <div className="link">
            <a href="https://gimvis.com/" target="_blank">https://gimvis.com/</a>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="skills">
          <div className="heading">
            Personal skills
          </div>
          <div className="list">
            <div className="item">Team work</div>
            <div className="item">Communication</div>
            <div className="item">Problem-solving</div>
            <div className="item">Responsibility on projects</div>
            <div className="item">Fast decision making</div>
          </div>
        </div>
        <div className="skills">
          <div className="heading">
            Professional skills
          </div>
          <div className="list">
            <div className="item">HTML</div>
            <div className="item">CSS</div>
            <div className="item">SCSS</div>
            <div className="item">Javascript</div>
            <div className="item">jQuery</div>
            <div className="item">ReactJS</div>
            <div className="item">PHP</div>
            <div className="item">Laravel</div>
            <div className="item">SQL</div>
            <div className="item">Wordpress</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About