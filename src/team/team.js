import React from 'react'
import "./team.css"
import "../examples/examples.css"

import Teamcard from './teamComponent.js'
import pic from '../assets/user.png';

function team() {
  return (
    <div id='team' className='team-div'>
      <div className='team-compo'>
        <p className='head-text-team'>The Team</p>
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