import React from 'react';
import '../assets/App.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {

  const twitter = "https://x.com/Swapnil75926312?t=likFg7MBgl9nrDtd8G68jA&s=08"
  const github = "https://github.com/SWAPNILKULKARNI0"
  const linkedin = "https://www.linkedin.com/in/swapnil-kulkarni-a01b68243/"
  const instagram = "https://www.instagram.com/swapnil_kulkarni0/?hl=en"
  const facebook = "https://www.facebook.com/swapnil.kulkarni.52493?mibextid=JRoKGi"


  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section id='f0' className='d-flex justify-content-center justify-content-lg-between p-4 '>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href={facebook} target="_blank" rel="noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
            <FaFacebook />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
            <FaXTwitter />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
            <GrInstagram />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" rel="noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
            <FaGithub />
          </a>
        </div>
      </section>

      <section id='f1' className=''>
        <MDBContainer className='text-center text-md-start '>
          <MDBRow className=''>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SWAPNIL's PORTFOLIO
              </h6>
              <p>
               If you have any questions, collaborations, or job opportunities, don't hesitate to reach out. Let's connect and create something amazing together!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java Script
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  HTML
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SQL
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#HOme' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#abt' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#services' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#eduexp' className='text-reset'>
                  Experience & Education
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#projects' className='text-reset'>
                  Projects
                </a>
              </p>
              <p>
                <a href='#skills' className='text-reset'>
                  Skill
                </a>
              </p>
              <p>
                <a href='#certifications' className='text-reset'>
                  Certification
                </a>
              </p>
              <p>
                <a href='#contact' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaMapLocationDot className="me-3 ficon" />
                <a href='#!'>Bengaluru, Karnataka, India.</a>
              </p>
              <p>
                <MdEmail className="me-3 ficon emil" />
                <a href="mailto:swpanil.kulkarni0000@gmail.com" className='emil'>swapnil.kulkarni0000@gmail.com</a>
              </p>
              <p>
                <FaPhoneVolume className="me-3 ficon" />
                <a href="tel:990-177-7943">+91 9901777943</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div id='f2' className='text-center p-4' >
        © 2023 Swapnil Kulkarni All rights reserved.
      </div>
    </MDBFooter>
  )
}

export default Footer
