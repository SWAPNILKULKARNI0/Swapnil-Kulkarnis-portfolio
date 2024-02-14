import React from 'react'
import '../assets/App.css'
import { FaLaptopCode } from "react-icons/fa";
import weatherapp from '../assets/images/Capture.png'
import portfolio from '../assets/images/portfolio.png'
import ongoing from '../assets/images/E-com.png'

const Projects = () => {
  const weatherapp_project_live_link = "https://swapnilkulkarni0.github.io/Weather-WebApplication/";
  const weatherapp_project_sourcecode_link = "https://github.com/SWAPNILKULKARNI0/Weather-WebApplication.git"

  return (
    <>
      <div id="projects">
        <h1>Projects</h1>
        <div id="prj">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 ">
                <div className="card cont1">
                  <img src={weatherapp} className='card-img-top' alt="pic" />
                  <div className="card-body">
                    <h5 className="card-title">Weather App(API)</h5>
                    <div className="padd">
                      <div className="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div className="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href={weatherapp_project_sourcecode_link}>View Code</a>
                    <a href={weatherapp_project_live_link } className="btn btn1 btn-primary">Live Preview</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 ">
                <div className="card cont1">
                  <img src={portfolio} className='card-img-top' alt="pic" />
                  <div className="card-body">
                    <h5 className="card-title">Personal Portfolio</h5>
                    <div className="padd" >
                      <div className="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div className="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href="#!">View Code</a>
                    <a href="#!" className="btn btn1 btn-primary">Live Preview</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 ">
                <div className="card cont1">
                  <img src={ongoing} className='card-img-top' alt="pic" />
                  <div className="card-body">
                    <h5 className="card-title">E-Com Store(comming soon)</h5>
                    <div className="padd" >
                      <div className="bufw1"><FaLaptopCode className='servicon1' /></div>
                      <div className="bufw1"><p>Web Development</p></div>
                    </div>
                    <a className='a1' href="#!">View Code</a>
                    <a href="#!" className="btn btn1  btn-primary">Live Preview</a>

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
