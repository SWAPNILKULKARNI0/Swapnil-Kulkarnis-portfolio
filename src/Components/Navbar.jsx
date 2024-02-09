import React from 'react'
import '../assets/App.css'

const Navbar = () => {
  return (
    <>
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#HOme">Swapnil Kulkarni</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#HOme">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#abt">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
