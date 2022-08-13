import React from 'react'
import "./team.css"

import pic from '../assets/pfp.svg';
import linked from '../assets/linkedin.svg';
import git from '../assets/github.svg';
import mail from '../assets/mail.svg';
import { Fade } from 'react-reveal';

function team() {
  return (
    <div id='team' className='team-div'>
      <div className='team-compo'>
        <p className='head'>The Team</p>
        <div className='team'>
          <div className='team-wrapper'>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
            <Teamcard pfp={pic} name="Lorem Ipsum" linked="#"/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Teamcard(props) {
  return (
    // <Fade big>
      <div className='team-card'>
        <img className='pfp' src={props.pfp} alt="profile-pic" />
        <div className="team-name">{props.name}</div>
        <div className="logo-wrapper">
          <img className='linked' src={linked} alt="linkedin" />
          <img className='mail' src={mail} alt="mail" />
          <img className='git' src={git} alt="github" />
        </div>
      </div>
      // </Fade>
  );
}


export default team;