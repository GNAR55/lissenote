import React, { Component } from 'react'

import MicRecorder from 'mic-recorder-to-mp3';
import {useNavigate} from 'react-router-dom';

import "./landing.css";
import "./audioRecorder.css";

import {ReactComponent as Mic} from '../assets/mic.svg';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function WithNavigate(props) {
  let navigate = useNavigate();
  return <AudioRecorder {...props} navigate={navigate} />
}

export default WithNavigate

class AudioRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blob: '',
      blobURL: '',
      file : '',
      isBlocked: false,
    };
}
  event = () => {
    console.log(this.state.isRecording)
    if (this.state.isRecording) {
      document.querySelector('.audio-div .button-wrapper').className = 'button-wrapper';
      this.stop();
    } else {
      document.querySelector('.audio-div .button-wrapper').className = 'button-wrapper mic-animation';
      this.start();
    }
    }
  start = () => {
    
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };
  
  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
        this.setState({ blob });
        const file = new File([blob], 'audio.mp3', { type: 'audio/mp3' }); 
        this.setState({ file });
        console.log(blobURL);
      }).catch((e) => console.log(e));
  };

  audioPerms = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.setState({ isBlocked: false });
        }).catch(err => {
          this.setState({ isBlocked: true });
        }
        );
    } else {
      this.setState({ isBlocked: true });
    }
  }
  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }
  
  // componentDidMount(){

  // }

  convert = (url) => {
    this.props.navigate('/convert', {state: {file : this.state.file , fromRecording: true}});
  }

  render() {
    return (
      <div id='audio' className='audio-div'>
        <div className="title">
        Record Audio
        </div> 
        <div className="button-holder">
      <button onClick={() => (
        this.event()
        )} className="button-wrapper">
        <Mic className="mic" />
      </button>
      </div>
        <div className="audio-holder">
        <audio src={this.state.blobURL} controls="controls" className='audio-player'/>
        </div>
        <button onClick={() => (
          this.convert(this.state.blobURL))
          } className="custom-btn btn-3">
        Convert
      </button>
      </div>
    )
  }
}