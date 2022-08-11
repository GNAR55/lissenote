import React from "react";

import "./why.css";

import Fade from 'react-reveal/Fade';


function why() {
  return (
    <div className="why-div">
      <div className="why-lis">
        <p className="head">Why lissenote?</p>
        <div className="wrappup">
          <Fade bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Convert anything and everything</p>
              <div className="content">
                Lectures to Documentaries, Podcasts to Meetings
              </div>
            </div>
          </div>
          </Fade>
          <Fade bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Missed something?</p>
              <div className="content">
                Quickly go through the notes to catch up anything you missed
              </div>
            </div>
          </div>
          </Fade>
          <Fade bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Lorem Ipsum</p>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='why-compo1'>
            <div className='usecase-box-wrapper'>
              <div className='usecase-box'>
                
              </div>
            </div>
          </div>
          <div className='why-compo2'>
            <div className='usecase-box-wrapper'>
              <div className='usecase-box'>
                <p className='title'>Missed something?</p>
                <div className='list'>
                  Quickly go through the notes to catch up anything you missed
                </div>
              </div>
            </div>
          </div>
          <div className='why-compo3'>
            <div className='usecase-box-wrapper'>
              <div className='usecase-box'>
                
              </div>
            </div>
          </div> */
}
export default why;
