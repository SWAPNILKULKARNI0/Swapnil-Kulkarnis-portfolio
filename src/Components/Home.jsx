import React from 'react';
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineDownloading } from "react-icons/md";
import { MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import profilepic from '../assets/images/profile.png'
import { Cursor } from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
    const cv = "https://drive.google.com/file/d/1WrB_2uJBZzfd9zb3fS16KqeET_6h8MWc/view?usp=drive_link"
    const twitter = "https://x.com/Swapnil75926312?t=likFg7MBgl9nrDtd8G68jA&s=08"
    const github = "https://github.com/SWAPNILKULKARNI0"
    const linkedin = "https://www.linkedin.com/in/swapnil-kulkarni-a01b68243/"
    const instagram = "https://www.instagram.com/swapnil_kulkarni0/?hl=en"
    const facebook = "https://www.facebook.com/swapnil.kulkarni.52493?mibextid=JRoKGi"


    return (
        <>
            <div id="HOme" class="parent">
                <div class="child child1">
                    <div className='cont'>
                        <p id='name'>SWAPNIL KULKARNI</p>
                        <div id='line'></div>
                        <p id='poff'><i id='typw'><span><Cursor cursorColor='#13FF00' className="baba" cursorStyle="< "></Cursor></span></i> <span></span>Web <i>
                            Developer <i> </i>
                        </i><span><Cursor cursorColor='#13FF00' cursorStyle="/>" className="baba"></Cursor></span></p>

                        <p id='intro'>
                            I am a Web-App developer focused on creating Web applications.
                            <Typewriter
                                words= {[' I really like different projects that solve real problems.']}
                                loop={0}
                                cursor
                                cursorStyle=" |"
                                cursorColor='#13FF00'
                                cursorBlinking={true}
                                typeSpeed={70}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </p>
                        <div id='hbtn'>
                            <a href={cv} target="_blank" rel="noreferrer">
                                <MdOutlineCloudDownload /><p>Download CV</p>
                            </a>
                            <a href="#!" target="_blank" rel="noreferrer">
                                <div id='dowl'>
                                    <MdOutlineDownloading /><p>Portfolio</p>
                                </div>
                            </a>
                        </div>
                        <div className='slink'>
                            <a href={facebook} target="_blank" rel="noreferrer"  className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                                <FaFacebook />
                            </a>
                            <a href={twitter} target="_blank" rel="noreferrer" className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                                <FaXTwitter />
                            </a>
                           
                            <a href= {instagram} target="_blank" rel="noreferrer" className='me-4 text-reset'>
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
                    </div>
                </div>
                <div class="child child2">
                    <div class="circular-border">
                        <img src={profilepic} alt="profile" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
