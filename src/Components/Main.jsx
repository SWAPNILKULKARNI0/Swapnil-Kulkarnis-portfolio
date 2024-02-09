import React from 'react'
import Navbar from './Navbar'
import Home from './Home' 
import About from './About'
import Services from './Services'
import ExpEdu from './ExpEdu'
import Skill from './Skill'
import Projects from './Projects'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'


const Main = () => {
   

    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <ExpEdu/>
            <Projects/>
            <Skill/>
            <Certifications/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Main
