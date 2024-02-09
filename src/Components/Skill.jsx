import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { RiCameraLensFill } from "react-icons/ri";

const Skill = () => {
  return (
    <>
      <div id="skills">
        <h1>Skills</h1>
        <div class="flex-container fc1">
          <div class="box box1">
            <FaReact className='sicon' />
            <p>React Js</p>
          </div>
          <div class="box box2">
            <RiJavascriptFill className='sicon' />
            <p>JavaScript</p>
          </div>
          <div class="box box3">
            <BiLogoPostgresql className='sicon' />
            <p>MySQL</p>
          </div>
        </div>


        <div class="flex-container fc1">
          <div class="box box1">
            <FaWordpress className='sicon' />
            <p>WordPress</p>
          </div>
          <div class="box box2">
            <FaHtml5 className='sicon' />
            <p>HTML</p>
          </div>
          <div class="box box3">
            <FaCss3Alt className='sicon' />
            <p>CSS</p>
          </div>
        </div>
        <div class="flex-container fc1">
          <div class="box box1">
            <FaBootstrap className='sicon' />
            <p>BootStrap</p>
          </div>
          <div class="box box2">
            <FaGitlab className='sicon' />
            <p>Git & GitHub</p>
          </div>
          <div class="box box3">
            <RiCameraLensFill className='sicon' />
            <p>Responsive Design</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill
