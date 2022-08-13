import React from 'react'
import "./team.css"

import pic from '../assets/pfp.svg';
import {ReactComponent as Linked} from '../assets/linkedin.svg';
import {ReactComponent as Mail} from '../assets/mail.svg';
import {ReactComponent as Git} from '../assets/github.svg';

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
        <a href="">
          <Linked className='logo'/>
          </a>
          <a href="">
          <Mail className='logo'/>
          </a>
          <a href="">
          <Git className='logo'/>
          </a>
        </div>
      </div>
      // </Fade>
  );
}


export default team;