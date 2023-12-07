import React from 'react'
import Slide from 'react-reveal/Slide';
import "../css/Projects.css"
import fashion_flare from "../images/fashion_flare.png"
import HealthKart from "../images/HealthKart.png"
import Wonderkidedu from "../images/Wonderkidedu.png"
import WorldTravel from "../images/mini_icons/WorldTravel.png"
import Becharity from "../images/becharity.png"
import htmlimg from "../images/mini_icons/icons8-html.svg"
import express from "../images/mini_icons/icon8-express-js.svg"
import Cssimg from "../images/mini_icons/icons8-css.svg"
import Javascriptimg from "../images/mini_icons/icons8-javascript.svg"
import mongodb from "../images/mini_icons/icons8-mongodb.png"
import reactimg from "../images/mini_icons/icons8-react-native.svg"
import reduximg from "../images/mini_icons/icons8-redux.svg"
import chakraui from "../images/mini_icons/icons8-chakra-ui.svg"
import { Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";

// {------------------------------- SECOND IMPLEMENTATION --------------------------------------------}
const Projects = () => {
   const Wonderkidedulink = () => {
      window.open("https://incandescent-douhua-33325d.netlify.app/");
   }
   const Wonderkidedugithublink = () => {
      window.open("https://github.com/kblessmi2001/venomous-sense-8377/tree/main/rainbow_realm");
   }

   const fashion_flarelink = () => {
      window.open("https://fashion-flare.netlify.app/")
   }
   const fashion_flaregithublink = () => {
      window.open("https://github.com/Sujalogy/humble-offer-6148")
   }
   const HealthKartlink = () => {
      window.open("https://rainbow-flan-b91d67.netlify.app/")
   }
   const HealthKartgithublink = () => {
      window.open("https://github.com/kblessmi2001/tested-bulb-6829")
   }
   const WorldTravellink = () => {
      window.open("https://world-travel-e2h1zlek5-blessmis-projects.vercel.app/")
   }
   const WorldTravelgithublink = () => {
      window.open("https://github.com/harsh7739/gas-scarecrow-3264/")
   }
   const Becharitylink = () => {
      window.open("https://becharity.vercel.app/")
   }
   const Becharitygithublink = () => {
      window.open("https://github.com/JayachandranRamu/Be-Charity")
   }



   return (
      <div className='Projects-maindiv' id='projects'>
         <div className='heading project-title-div'>
            <button className='heading-textbtn'>
               <h1 className='mainheading'><span style={{ color: "#0e4166" }}>My </span>
                  <span style={{ color: "#0e4166" }}> Projects</span></h1>
            </button>
         </div>


         <div className='Projectcards-div'>

            <Slide right duration={1500}>
               <div className="card project-card">
                  <div>
                     <img className='projectimage' src={Becharity} alt="Becharity" />
                     <div className='btnhover'>


                        <button className="Btn project-deployed-link" onClick={Becharitylink}>
                           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                           <div className="text">Live</div>
                        </button>


                        <button className="Btn project-github-link" onClick={Becharitygithublink}>
                           <div className="gitnubicon">
                              <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                           </div>
                           <div className="text">Github</div>
                        </button>

                     </div>

                     <div className='Tabscreenbtns'>
                        <button onClick={Becharitylink}>
                           <div>
                              <VscLiveShare />
                              <p>Live</p>
                           </div>
                        </button>
                        <button onClick={Becharitygithublink}>
                           <div className='mobilegitbtn'>
                              <AiFillGithub />
                              <p>Github</p>
                           </div>
                        </button>
                     </div>


                  </div>
                  <div className="content">
                     <p className="heading project-title">Becharity
                     </p><p className="para project-description">
                    
A charity website aims to raise funds for disadvantaged children in Africa.  This collaborative project utilizes Built on ReactJS React-Redux Redux for the frontend and the backend is implemented using Express MongoDB Nodejs.  
                     </p>
                     <div className='project-tech-stack techstacks'>
                     <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reactimg} alt="react" />
                        </div>
                     </Tooltip>

                     <Tooltip label="Redux" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reduximg} alt="redux" />
                        </div>
                     </Tooltip>

                     <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={chakraui} alt="chakraui" />
                        </div>
                     </Tooltip>
                    
                     <Tooltip label="Express" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-backgroundforexpress'>
                           <img className='iconimg' src={express} alt="express" />
                        </div>
                     </Tooltip>
                     
                     <Tooltip label="MongoDB" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={mongodb} alt="mongodb" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
                  </div>
                  <div className='smallscreenbtns' onClick={Becharitylink}>
                     <button>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={Becharitygithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>

               </div>
            </Slide>



            {/*WorldTravel*/}

            <Slide left duration={1500}>
               <div className="card project-card">
                  <div>
                     <img className='projectimage' src={WorldTravel} alt="WorldTravel" />
                     <div className='btnhover'>


                        <button className="Btn project-deployed-link" onClick={WorldTravellink}>
                           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                           <div className="text">Live</div>
                        </button>


                        <button className="Btn project-github-link" onClick={WorldTravelgithublink}>
                           <div className="gitnubicon">
                              <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                           </div>
                           <div className="text">Github</div>
                        </button>

                     </div>

                     <div className='Tabscreenbtns'>
                        <button onClick={WorldTravellink}>
                           <div>
                              <VscLiveShare />
                              <p>Live</p>
                           </div>
                        </button>
                        <button onClick={WorldTravelgithublink}>
                           <div className='mobilegitbtn'>
                              <AiFillGithub />
                              <p>Github</p>
                           </div>
                        </button>
                     </div>


                  </div>
                  <div className="content">
                     <p className="heading project-title">WorldTravel
                     </p><p className="para project-description">
                        A travel website offers a one-stop destination for travelers to explore, plan, and book their journeys, destinations and accommodations. This collaborative project utilizes Built on ReactJS React-Redux Redux for the frontend and the backend is implemented using a JSON server.
                     </p>
                     <div className='project-tech-stack techstacks'>
                        <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={reactimg} alt="react" />
                           </div>
                        </Tooltip>
                        <Tooltip label="Redux" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={reduximg} alt="redux" />
                           </div>
                        </Tooltip>
                        <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={chakraui} alt="chakraui" />
                           </div>
                        </Tooltip>
                        <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={htmlimg} alt="html" />
                           </div>
                        </Tooltip>
                        <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Cssimg} alt="css" />
                           </div>
                        </Tooltip>
                        <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Javascriptimg} alt="javascript" />
                           </div>
                        </Tooltip>
                     </div>
                  </div>
                  <div className='smallscreenbtns' onClick={WorldTravellink}>
                     <button>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={WorldTravelgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>

               </div>
            </Slide>

            {/* Wonderkidedu project */}
            <Slide right duration={1500}>
               <div className="card project-card">
                  <div>
                     <img className='projectimage' src={Wonderkidedu} alt="Wonderkidedu" />
                     <div className='btnhover'>


                        <button className="Btn project-deployed-link" onClick={Wonderkidedulink}>
                           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                           <div className="text">Live</div>
                        </button>


                        <button className="Btn project-github-link" onClick={Wonderkidedugithublink}>
                           <div className="gitnubicon">
                              <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                           </div>
                           <div className="text">Github</div>
                        </button>
                     </div>

                     <div className='Tabscreenbtns'>
                        <button onClick={Wonderkidedulink}>
                           <div>
                              <VscLiveShare />
                              <p>Live</p>
                           </div>
                        </button>
                        <button onClick={Wonderkidedugithublink}>
                           <div className='mobilegitbtn'>
                              <AiFillGithub />
                              <p>Github</p>
                           </div>
                        </button>
                     </div>


                  </div>
                  <div className="content">
                     <p className="heading project-title">Wonderkidedu</p>
                     <p className="para project-description">
                        A School Website for under the age of 5 that allows users to learn subjects.This individual project Built on ReactJS for the frontend and the backend is implemented using a JSON server.
                     </p>
                     <div className='project-tech-stack techstacks'>
                        <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={reactimg} alt="react" />
                           </div>
                        </Tooltip>

                        <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={chakraui} alt="chakraui" />
                           </div>
                        </Tooltip>
                        <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={htmlimg} alt="html" />
                           </div>
                        </Tooltip>
                        <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Cssimg} alt="css" />
                           </div>
                        </Tooltip>
                        <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Javascriptimg} alt="javascript" />
                           </div>
                        </Tooltip>

                     </div>
                  </div>
                  <div className='smallscreenbtns'>
                     <button onClick={Wonderkidedulink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={Wonderkidedugithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>

               </div>
            </Slide>

            {/*fashion_flare  Project */}
            <Slide left duration={1500}>
               <div className="card project-card">
                  <div>
                     <img className='projectimage' src={fashion_flare} alt="fashion_flare" />
                     <div className='btnhover'>


                        <button className="Btn project-deployed-link" onClick={fashion_flarelink}>
                           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                           <div className="text">Live</div>
                        </button>


                        <button className="Btn project-github-link" onClick={fashion_flaregithublink}>
                           <div className="gitnubicon">
                              <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                           </div>
                           <div className="text">Github</div>
                        </button>

                     </div>

                     <div className='Tabscreenbtns'>
                        <button onClick={fashion_flarelink}>
                           <div>
                              <VscLiveShare />
                              <p>Live</p>
                           </div>
                        </button>
                        <button onClick={fashion_flaregithublink}>
                           <div className='mobilegitbtn'>
                              <AiFillGithub />
                              <p>Github</p>
                           </div>
                        </button>
                     </div>


                  </div>
                  <div className="content">
                     <p className="heading project-title">Fashion Flare
                     </p><p className="para project-description">
                        An e-commerce website that sells fashion products for men and women. This collaborative project utilizes HTML, CSS, and JavaScript for the frontend development, while the backend is supported by a JSON server.
                     </p>
                     <div className='project-tech-stack techstacks-fashion'>

                        <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={htmlimg} alt="html" />
                           </div>
                        </Tooltip>
                        <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Cssimg} alt="css" />
                           </div>
                        </Tooltip>
                        <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Javascriptimg} alt="javascript" />
                           </div>
                        </Tooltip>

                     </div>
                  </div>
                  <div className='smallscreenbtns'>
                     <button onClick={fashion_flarelink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={fashion_flaregithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>

               </div>
            </Slide>

            {/* HealthKart */}
            <Slide right duration={1500}>
               <div className="card project-card">
                  <div>
                     <img className='projectimage' src={HealthKart} alt="HealthKart" />
                     <div className='btnhover'>


                        <button className="Btn project-deployed-link" onClick={HealthKartlink}>
                           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                           <div className="text">Live</div>
                        </button>


                        <button className="Btn project-github-link" onClick={HealthKartgithublink}>
                           <div className="gitnubicon">
                              <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                           </div>
                           <div className="text">Github</div>
                        </button>

                     </div>

                     <div className='Tabscreenbtns'>
                        <button onClick={HealthKartlink}>
                           <div>
                              <VscLiveShare />
                              <p>Live</p>
                           </div>
                        </button>
                        <button onClick={HealthKartgithublink}>
                           <div className='mobilegitbtn'>
                              <AiFillGithub />
                              <p>Github</p>
                           </div>
                        </button>
                     </div>


                  </div>
                  <div className="content">
                     <p className="heading project-title">HealthKart
                     </p><p className="para project-description">
                        An e-commerce website that sells various health care products.This individual project utilizes HTML, CSS, and JavaScript for the frontend development,while the backend is supported by a fakestore api.
                     </p>
                     <div className='project-tech-stack techstacks-fashion'>

                        <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={htmlimg} alt="html" />
                           </div>
                        </Tooltip>
                        <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Cssimg} alt="css" />
                           </div>
                        </Tooltip>
                        <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                           <div className='icon-background'>
                              <img className='iconimg' src={Javascriptimg} alt="javascript" />
                           </div>
                        </Tooltip>

                     </div>
                  </div>
                  <div className='smallscreenbtns' onClick={HealthKartlink}>
                     <button>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={HealthKartgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>

               </div>
            </Slide>

         </div>
      </div>


   )
}
export default Projects
