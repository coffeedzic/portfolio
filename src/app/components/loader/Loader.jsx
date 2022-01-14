import React from 'react'

import '../../styles/loader/Loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <div className="cup">
        <svg className="coffee" height="130" width="100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 27.082266 17 L 3.025039 17 C 1.910703 17 1.013164 17.905523 1.047852 19.020349 C 1.157695 22.517442 1.497344 29.736919 2.500391 34 C 4.071445 40.677326 7.186094 44.886628 8.447852 46.385174 C 8.790391 46.790698 9.297695 47 9.828125 47 L 20.021914 47 C 20.639063 47 21.218633 46.71657 21.565508 46.204942 C 22.676953 44.568314 25.23082 40.428779 27.499961 34 C 28.975625 29.818314 29.084023 22.40407 29.043555 18.915698 C 29.031992 17.843023 28.153242 17 27.082266 17 Z M 27.082266 17 " transform="matrix(2.702703,0,0,2.6875,0,0)" stroke="#1b2c3f" strokeWidth="2"></path>
          <path d="M 29.000195 23.5 C 29.000195 23.5 34.499609 20.5 35.499766 25.5 C 36.098125 28.492733 34.20332 31.537791 32.000664 32.87064 C 29.455469 34.411337 28.000039 34 28.000039 34 " transform="matrix(2.702703,0,0,2.6875,0,0)" stroke="#1b2c3f" strokeWidth="2"></path>
          <path id="steamLeft" d="M 16.999766 1 C 16.999766 1 16.999766 4.5 13.999297 6.5 C 11.000273 8.5 11.000273 12 11.000273 12" transform="matrix(2.702703,0,0,2.6875,0,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0bb197"></path>
          <path id="steamRight" d="M 21.000391 6 C 21.000391 6 21.000391 8.226744 19.000078 9.5 C 16.999766 10.773256 16.999766 13 16.999766 13 " transform="matrix(2.702703,0,0,2.6875,0,0)" stroke="#0bb197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <div className="heading">
        coffeedzic
        <span>.</span>
      </div>
    </div>
  )
}

export default Loader