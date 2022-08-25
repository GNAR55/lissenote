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
            <Teamcard pfp={pic} name="Akshay Warrier" linked="#" github="https://github.com/AkshayWarrier" mail=""/>
            <Teamcard pfp={pic} name="Ganesh Nathan" linked="#" github="https://github.com/Welf06" mail=""/>
            <Teamcard pfp={pic} name="Niranjan Nagumalli" linked="#" github="https://github.com/niranjannagumalli" mail=""/>
            <Teamcard pfp={pic} name="Rohith Ninan" linked="#" github="https://github.com/GHrohith" mail=""/>
            <Teamcard pfp={pic} name="Sai Harvin" linked="#" github="https://github.com/saiharvin" mail=""/>
            <Teamcard pfp={pic} name="Samhita Bharthulwar" linked="#" github="https://github.com/samhitha-b" mail=""/>
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
        <a href="www.gooogle.co.in">
          <Linked className='logo'/>
          </a>
          <a href="www.gooogle.co.in">
          <Mail className='logo'/>
          </a>
          <a href="www.gooogle.co.in">
          <Git className='logo'/>
          </a>
        </div>
      </div>
      // </Fade>
  );
}


export default team;