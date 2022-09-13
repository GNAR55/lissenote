import React from "react";

import "./why.css";

import Slide from 'react-reveal/Slide';


function why() {
  return (
    <div id="why" className="why-div">
      <div className="why-lis">
        <p className="head">Why lissenote?</p>
        <div className="wrappup">
          <Slide bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Convert anything and everything</p>
              <div className="content">
                Lectures to Documentaries, Podcasts to Meetings
              </div>
            </div>
          </div>
          </Slide>
          <Slide bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Missed something Important?</p>
              <div className="content">
                Quickly go through the notes to catch up anything you missed
              </div>
            </div>
          </div>
          </Slide>
          <Slide bottom>
          <div className="usecase-box-wrapper">
            <div className="usecase-box">
              <p className="title">Lorem Ipsum</p>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          </Slide>
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
