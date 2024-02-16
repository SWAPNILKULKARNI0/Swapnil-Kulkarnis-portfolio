import React from 'react'
import '../assets/App.css'

const ExpEdu = () => {
  return (
    <>
      <div id='eduexp' className="exp-edu">
        <div className="grid-container-element">
          <div className="grid-child-element purple">
            <h1>Experience</h1>
            <div >
              <h3 className='grn'>Web-App Developer[Intern]</h3>
              <h4 className='clg'>Tensile Tech</h4>
              <p className='dt'>Jul 2023 - Dec 2023 ~ 5 mos</p>
            </div>
            <div >
              <h3 className='grn'>Web-App Developer[Intern]</h3>
              <h4 className='clg'>Bharat Intern</h4>
              <p className='dt'>Aug 2023 - Oct 2023 ~ 2 mos</p>
            </div>
          </div>
          <div className="grid-child-element green">
            <h1>Education</h1>
            <div>
              <h3 className='grn'>BE: Computer Science & Engineering</h3>
              <h4 className='clg'>Acharya Institute of Technology, Bengaluru.</h4>
              <h5 className='score'>Score: 8.33 (CGPA)</h5>
              <p className='dt'>Dec 2020 - Present</p>
            </div>
            <div>
              <h3 className='grn'>12<sup>th</sup> (Pre-University Course/PUC)</h3>
              <h4 className='clg'>Sri Chaitanya PU College, Ballari.</h4>
              <h5 className='score'>Score: 88%</h5>
              <p className='dt'>Jun 2018 - Mar 2020</p>
            </div>
            <div >
              <h3 className='grn'>10<sup>th</sup> (SSLC)</h3>
              <h4 className='clg'>Vijaya Mary School, Siruguppa, Ballari.</h4>
              <h5 className='score'>Score: 82% </h5>
              <p className='dt'>Jun 2018 - Apr 2018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpEdu
