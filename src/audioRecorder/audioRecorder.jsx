import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3';


function audioRecorder() {
   const Mp3Recorder = new MicRecorder({ bitRate: 128 });
   this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    }
    function componentDidMount(){
      
    }
  return (
      <div id='audio' className='audio-div'>
         
      </div>
  )
}

export default audioRecorder;