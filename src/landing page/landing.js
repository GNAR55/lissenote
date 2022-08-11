import React from 'react'

import "./landing.css"
import Form from './form.js'
import {ReactComponent as Heading} from './landing-tagline.svg'

export default function landing() {
  return (
    <div id='landing' className='landing-div'>
      <Heading className="landing-headline"/>
      <div className="landing-main-div">
            <div className="title">
               Audio File
            </div>
            <div className="subtitle">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id dapibus elit,  facilisis faucibus purus.
            </div>
            <Form/>
      </div>
    </div>
  )
}


