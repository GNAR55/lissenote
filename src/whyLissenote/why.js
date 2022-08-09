import React from 'react'
import UseCase from '../whyLissenote/usecase.js'

import './why.css'
import "../examples/examples.css"

function why() {
  return (
    <div className='why-div'>
      <div className='why-lis'>
        <p className='head-text'>Why lissenote?</p>
        <div className='wrappup'>
          <div className='why-compo1'>
            <UseCase content="Lectures to Documentaries, Podcasts to Meetings" title="Convert anything and everything"/>
          </div>
          <div className='why-compo2'>
            <UseCase content="Quickly go through the notes to catch up anything you missed" title="Missed something?"/>
          </div>
          <div className='why-compo3'>
            <UseCase content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Lorem Ipsum"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default why