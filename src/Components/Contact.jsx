import React, { useState } from 'react'
import { MDBCol } from 'mdb-react-ui-kit';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <div id="contact">
        <h1>Contact</h1>
        <div id='otr'>
          <div className="inr inr1">
            <h1 >Contact Me</h1>

            <div >
              <MDBCol className='conoico'>
                <p>
                  <FaMapLocationDot className="me-3 ficon8" />
                  <a href='#!'>Bengaluru-India.</a>
                </p>
                <p>
                  <MdEmail className="me-3 ficon8 emil" />
                  <a href="mailto:swpanil.kulkarni0000@gmail.com" className='emil'>swapnil.kulkarni0000@gmail.com</a>
                </p>
                <p>
                  <FaPhoneVolume className="me-3 ficon8" />
                  <a href="tel:990-177-7943">+91 9901777943</a>
                </p>
              </MDBCol>
            </div>
          </div>

          <div className="inr inr2">
            <div style={{ flex: '100%', padding: '20px', boxSizing: 'border-box' }}>
              <form  onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <div className='ctcip' style={{ marginRight: '10px', width: '100%', boxSizing: 'border-box' }}>
                    <label htmlFor="firstName">Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>


                <div className='ctcip' style={{ marginBottom: '10px', width: '100%', boxSizing: 'border-box' }}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className='ctcip' style={{ marginBottom: '10px', width: '100%', boxSizing: 'border-box' }}>
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='ctcip' style={{ marginBottom: '10px', width: '100%', boxSizing: 'border-box' }}>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                <button id='sendbtn' type="submit">
                  
                  <RiSendPlaneFill className='servicon1 nms' />
                  Send
              </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact
