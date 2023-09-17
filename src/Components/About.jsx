import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import passport_photo from "../images/Bless-Image.jpg"
import "../css/About.css"

const About = () => {
   
    return (
        <div id="about" className="about section">
            {/* <button className='heading-textbtn'> */}
                   <h1 className='mainheading'  style={{ color: "#0e4166",paddingTop:"50px"}}>
                   About</h1>
            <div className="intro-section">
                <Fade left duration={2000}>
                    <div className="illustration">
                        <img src={passport_photo} alt="illustartion" className="home-img" style={{borderRadius: "15px"}}/>
                    </div>
                </Fade>
                <Fade right duration={2000}>
                    <div id="user-detail-intro" className="about-me">
                        <Flip bottom duration={3000}>
                            <h1 style={{ color: "#3c547d"}}>Hello 👋🏻</h1>
                        </Flip>
                        <p>I'm <span className="name-text" id="user-detail-name">Blessmi</span>, an Aspiring Full Stack Web Developer proficient in React, HTML and CSS, and an Enthusiastic Learner. I have always found it fascinating to turn my problem-solving skills and creative ideas into real-world applications.</p>

                        <div className="button">
                            <a href="https://drive.google.com/u/0/uc?id=1p4NeWqr3CRt_2tv1-yOnTlQd3q4s7yEb&export=download" id="resume-link-2" rel="noreferrer" download>
                                <button className="resume-button" id="resume-button-2">Download Resume</button>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About