import React from 'react'
import '../assets/App.css'
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { IoIosGitBranch } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";


const Services = () => {
  return (
    <>
      <div id="services">
        <h1>My Services</h1>
        <div class="grid-container-element">
          <div class="grid-child-element purple">
            <div >
              <div class="bufw"><FaLaptopCode className='servicon'/></div>
              <div class="bufw"><p>Web Development</p></div>
            </div>
            <div >
              <div class="bufw"><SiShopify className='servicon'/></div>
              <div class="bufw"><p>E-commerce Solutions</p></div>
            </div>
            <div >
              <div class="bufw"><PiChalkboardTeacherDuotone className='servicon'/></div>
              <div class="bufw"><p>Training and Workshop</p></div>
            </div>
          </div>
          <div class="grid-child-element green">
            <div>
              <div class="bufw"><AiOutlineDatabase className='servicon'/></div>
              <div class="bufw"><p>Database Management</p></div>
            </div>
            <div>
              <div class="bufw"><IoIosGitBranch className='servicon'/></div>
              <div class="bufw"><p>Version Control</p></div>
            </div>
            <div >
              <div class="bufw"><FaHandsHelping className='servicon'/></div>
              <div class="bufw"><p>Consultation</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
