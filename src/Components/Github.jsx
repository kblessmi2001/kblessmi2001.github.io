import React from 'react'
import Fade from 'react-reveal/Fade'
import "../css/Github.css"
import ReactGithubCalendar from "react-github-calendar";

const Github = () => {

  return (
    <div className="stats" id="statistics" style={{paddingTop:"60px"}}>
      <div className='heading-div'>
        <button className='heading-textbtn'>
          <h1 className='mainheading'><span style={{ color: "#0e4166",paddingBottom:"30px",paddingBottom:"100px" }}>Git </span><span style={{ color: "#0e4166" }}>Stat's</span></h1>
        </button>
      </div>
      <Fade bottom cascade duration={1500}>
      <div className="github-calender-div">
        <div className="calendar-container calendar react-activity-calendar">
          <ReactGithubCalendar
            username={"kblessmi2001"}
            style={{ margin: "auto" }}
            classForValue={(value) => `contribution-level-${value.count}`}

          />
        </div>
        </div>
        </Fade>
      <Fade bottom cascade duration={1500}>
        <div className="github-charts">
          <img src="https://github-readme-streak-stats.herokuapp.com?user=kblessmi2001&theme=prussian&type=png" alt="github-streaks" id="github-streak-stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kblessmi2001&theme=prussian&layout=compact" alt="languages-chart" height="195px" width="400px" id="github-top-langs" />
          <img src="https://github-readme-stats.vercel.app/api?username=kblessmi2001&theme=prussian" alt="readme-stats" id="github-stats-card" />
        </div>
      </Fade>
    </div>
  )
}

export default Github