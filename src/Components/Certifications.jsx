import React from 'react'
import Nego from '../assets/images/ng.jpg'
import Python from '../assets/images/pp.jpg'
import Cpp from '../assets/images/c++.jpg'
import C from '../assets/images/cp.jpg'

const Certifications = () => {
  const neg = "https://drive.google.com/file/d/10w-hmWqQrtQWfgxZMQXnJc7QGRB2zesc/view?usp=drive_link"
  const pyp = "https://drive.google.com/file/d/1g0V9k3kDe8siSuYIp3K_nrSccX1ThkL6/view?usp=drive_link"
  const cpp = "https://drive.google.com/file/d/1itLYVd3v92kdWChHbULITo-plALKNeYm/view?usp=drive_link"
  const c   = "https://drive.google.com/file/d/1PtfxZt4XRWjEakc5RKdEg-3qIGxUVtzC/view?usp=drive_link"
  return (
    <>
      <div id="certifications">
        <h1>Certifications</h1>
        <div id="certificate-container">
          <div className="c--container">
            <div className="c--card">
              <div className="c--sisd">
                <div className="c--slide c--slide1">
                  <div className="c--content">
                    <div className="c--icon">
                      <img src={Nego} alt="certificate" />
                    </div>
                  </div>
                </div>
                <div className="c--slide c--slide2">
                  <div className="c--content">
                    <p className="aqa"> Successful Negotiation</p>
                    <p className="bqa">Coursera.</p>
                    <a target="_blank" className='cqa'
                      href={neg} rel="noreferrer"> View</a>
                  </div>
                </div>
              </div>
              <div className="c--sisd">
                <div className="c--slide c--slide1">
                  <div className="c--content">
                    <div className="c--icon">
                      <img src={Python} alt="certificate" />
                    </div>
                  </div>
                </div>
                <div className="c--slide c--slide2">
                  <div className="c--content">
                    <p className="aqa">Python Programming </p>
                    <p className="bqa">Udemy</p>
                    <a className="cqa"target="_blank" href={pyp} rel="noreferrer"> View</a>
                  </div>
                </div>
              </div>
              <div className="c--sisd">
                <div className="c--slide c--slide1">
                  <div className="c--content">
                    <div className="c--icon">
                      <img src={Cpp} alt="certificate" />
                    </div>
                  </div>
                </div>
                <div className="c--slide c--slide2">
                  <div className="c--content">
                    <p className="aqa">Programming in C++ </p>
                    <p className="bqa">Edusera.</p>
                    <a className="cqa" target="_blank"
                      href={cpp} rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
              <div className="c--sisd">
                <div className="c--slide c--slide1">
                  <div className="c--content">
                    <div className="c--icon">
                      <img src={C} alt="certificate" />
                    </div>
                  </div>
                </div>

                <div className="c--slide c--slide2">
                  <div className="c--content">
                    <p className="aqa">C-Programming</p>
                    <p className="bqa">Udemy.</p>
                    <a className="cqa" target="_blank"
                      href={c} rel="noreferrer"> view </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Certifications
