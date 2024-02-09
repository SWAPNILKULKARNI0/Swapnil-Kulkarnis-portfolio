import React from 'react'
import '../assets/App.css'
import { FaLaptopCode } from "react-icons/fa";
import weatherapp from '../assets/images/Capture.png'
import portfolio from '../assets/images/portfolio.png'
import ongoing from '../assets/images/E-com.png'

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1>Projects</h1>
        <div id="prj">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-4 ">
                <div class="card cont1">
                  <img src={weatherapp} className='card-img-top' alt="pic" />
                  <div class="card-body">
                    <h5 class="card-title">Weather App(API)</h5>
                    <div className="padd">
                      <div class="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div class="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href="#!">View Code</a>
                    <a href="#!" class="btn btn1 btn-primary">Live Preview</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-4 ">
                <div class="card cont1">
                  <img src={portfolio} className='card-img-top' alt="pic" />
                  <div class="card-body">
                    <h5 class="card-title">Personal Portfolio</h5>
                    <div className="padd" >
                      <div class="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div class="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href="#!">View Code</a>
                    <a href="#!" class="btn btn1 btn-primary">Live Preview</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-4 ">
                <div class="card cont1">
                  <img src={ongoing} className='card-img-top' alt="pic" />
                  <div class="card-body">
                    <h5 class="card-title">E-Com Store(comming soon)</h5>
                    <div className="padd" >
                      <div class="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div class="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href="#!">View Code</a>
                    <a href="#!" class="btn btn1  btn-primary">Live Preview</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
