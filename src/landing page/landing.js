import React from 'react'
import Slide from 'react-reveal/Slide';

import "./landing.css"
import Form from './form.js'
import Audio from './audioRecorder.jsx'

import {ReactComponent as Heading} from './landing-tagline.svg'
import {ReactComponent as HeadingSmall} from './landing-tagline-small.svg'

function LandingSVG(){
  if (window.innerWidth > 768) {
    return <Heading className='landing-headline'/>
  } else {
    return <HeadingSmall className='landing-tagline-small'/>
  }
}

export default function landing() {
  return (
    <div id='landing' className='landing-div'>
      <LandingSVG/>
      <div className="landing-main-div">
            <div className="title">
               Audio / Video File
            </div>
            <div className="subtitle">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id dapibus elit,  facilisis faucibus purus.
            </div>
            <Form/>
            <hr />
            <Audio/>
      </div>
    </div>
  )
}


