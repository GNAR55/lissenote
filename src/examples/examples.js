import React from 'react'

import ExampleText from './exampleSide.js'
import "./examples.css"
import product from '../assets/temp.png';
import example1 from '../assets/notes-example-1.png';
import example2 from '../assets/notes-example-2.png';
import example3 from '../assets/notes-example-3.png';

import Fade from 'react-reveal/Fade';

function examples() {
  return (
    <div id='about' className='examples-div'>
    <div className='example-container'>
        <div className='head'> Examples </div>
        <Fade>
        <div className='completecompo1'>
          <img className='image' src={example1} alt="result-pic" />
          <div className='example-text example-text1'>
            <ExampleText text="High accuracy transcription fine-tuned for Indian English"/>
          </div>
        </div>
        </Fade>

        <Fade>
        <div className='completecompo2'>
          <img className='image' src={example2} alt="result-pic" />
          <div className='example-text example-text2'>
            <ExampleText text="Important keywords, " text2="highlighted" />
          </div>
        </div>
        </Fade>

        <Fade>
        <div className='completecompo3'>
          <img className='image' src={example3} alt="result-pic" />
          <div className='example-text example-text3'>
            <ExampleText text="Get related Wikipedia Links and Images"/>
          </div>
        </div>
        </Fade>
        
      </div>
    </div>
  )
}

export default examples