import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import passport_photo from "../images/Bless-Image.jpg"
import "../css/About.css"

const About = () => {
    const handleDownload = async () => {

        const response = await fetch("https://drive.google.com/file/d/13TcukNaSjF6CM6lqreCK2J9n1j-_BKsj/view");
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);


        const link = document.createElement('a');
        link.id = 'resume-link-2'
        link.href = blobUrl;
        link.target = '_blank';
        link.setAttribute('download', 'Blessmi-Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.open(blobUrl, '_blank');
    };
    return (
        <div id="about" className="about section">
            {/* <button className='heading-textbtn'> */}
            <h1 className='mainheading' style={{ color: "#0e4166", paddingTop: "50px" }}>
                About</h1>
            <div className="intro-section">
                <Fade left duration={2000}>
                    <div className="illustration">
                        <img src={passport_photo} alt="illustartion" className="home-img" style={{ borderRadius: "15px" }} />
                    </div>
                </Fade>
                <Fade right duration={2000}>
                    <div id="user-detail-intro" className="about-me">
                        <Flip bottom duration={3000}>
                            <h1 style={{ color: "#3c547d" }}>Hello 👋🏻</h1>
                        </Flip>
                        <p>I'm <span className="name-text" id="user-detail-name">Blessmi</span>, an Aspiring Full Stack Web Developer proficient in React, HTML and CSS, and an Enthusiastic Learner. I have always found it fascinating to turn my problem-solving skills and creative ideas into real-world applications.</p>

                        <div className="button">

                            <button
                                className="resume-button" id="resume-button-2"
                                onClick={handleDownload}
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About



