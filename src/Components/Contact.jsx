import React from 'react'
import Fade from 'react-reveal/Fade'
import "../css/Contact.css"
import "font-awesome/css/font-awesome.min.css"
const Contact = () => {
  return (
    <div id="contact">
      <button className='heading-textbtn'>
          <h1 className='mainheading'><span style={{ color: "#0e4166",paddingBottom:"30px",paddingBottom:"100px" }}>Get in touch 💬 </span></h1>
        </button>
      <Fade duration={5000}>
        <p className="para" style={{paddingTop:"20px"}}>Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello! I'm always excited to connect with like-minded individuals, businesses, and organizations who are passionate about technology and innovation.</p>
      </Fade>
      <br/>
      <Fade left cascade duration={1500}>
        <div className="contact-links">
          <a href="https://github.com/kblessmi2001" className="contact-icons" id="contact-github">
          <i className="fa fa-github"></i>
            <p >github.com/Blessmi</p>
          </a>
          <a href="https://www.linkedin.com/in/blessmi-k-01088b224/" className="contact-icons" id="contact-linkedin">
          <i className="fa fa-linkedin"></i>
            <p>in/blessmi-k-01088b224</p>
          </a>
          <a href="mailto:kblessmi2001@gmail.com" className="contact-icons" id="contact-email">
          <i className="fa fa-envelope"></i>
            <p>kblessmi2001@gmail.com</p>
          </a>
          <a href="#contact" className="contact-icons" id="contact-phone">
          <i class="fa fa-phone"></i>
            <p>+91 6369984176</p>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default Contact


