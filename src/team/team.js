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
            <Teamcard pfp={pic} name="Akshay Warrier"       linked="https://www.linkedin.com/in/akshay-warrier-55b5b7229/"        github="https://github.com/AkshayWarrier"       mail="akshay21bec8@iiitkottayam.ac.in"/>
            <Teamcard pfp={pic} name="Ganesh Nathan"        linked="https://www.linkedin.com/in/ganesh-nathan/"                   github="https://github.com/Welf06"              mail="ganesh21bcs104@iiitkottayam.ac.in"/>
            <Teamcard pfp={pic} name="Niranjan Nagumalli"   linked="https://www.linkedin.com/in/niranjannagumalli/"               github="https://github.com/niranjannagumalli"   mail="niranjan21bcs17@iiitkottayam.ac.in"/>
            <Teamcard pfp={pic} name="Rohith Ninan"         linked="https://www.linkedin.com/in/rohith-ninan/"                    github="https://github.com/GHrohith"            mail="rohith21bec7@iiitkottayam.ac.in"/>
            <Teamcard pfp={pic} name="Sai Harvin"           linked="https://www.linkedin.com/in/sai-harvin-kusumaraju-668381229/" github="https://github.com/saiharvin"           mail="kusumaraju21bcs135@iiitkottayam.ac.in"/>
            <Teamcard pfp={pic} name="Samhita Bharthulwar"  linked="https://www.linkedin.com/in/samhitha-bharthulwar/"            github="https://github.com/samhitha-b"          mail="samhitha21bcy9@iiitkottayam.ac.in"/>
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
        <a href={props.linked} target='_blank' rel="noreferrer">
          <Linked className='logo'/>
          </a>
          <a href={props.mail} target='_blank' rel="noreferrer">
          <Mail className='logo'/>
          </a>
          <a href={props.github} target='_blank' rel="noreferrer">
          <Git className='logo'/>
          </a>
        </div>
      </div>
      // </Fade>
  );
}


export default team;