import React from 'react'
import "./team.css"

import pic from '../assets/user.png';
import linked from '../assets/linkedin.png';
import git from '../assets/github.png';
import mail from '../assets/mail.png';

function Teamcard(props) {
    return (
        <div className='team-card'>
            <img className='pfp' src={props.pfp} alt="Team-members"/>
            <p className='name'>{props.name}</p>
            <div className='links'>
                <a className='linked' href={props.linked}>
                    <img className='linkedin' src={linked} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='mail' src={mail} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='git' src={git} alt="linkedin"/>
                </a>
            </div>
        </div>
    );
}


function team() {
  return (
    <div id='team' className='team-div'>
      <div className='team-compo'>
        <p className='head'>The Team</p>
        <div className='team'>
          <div className='temp'>
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

export default team;