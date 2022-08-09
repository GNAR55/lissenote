import React from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./landing.css"
import {ReactComponent as Heading} from './landing-tagline.svg'

function DragAndDrop() {
   const fileTypes = ["JPEGs", "PNG", "GIF"];
   const [file, setFile] = useState(null);
      const handleChange = (file) => {
         setFile(file);
         console.log(file[0].name)
   };
   return (
            <div className="file-window">
               <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  label="Drag and Drop Files"
                  types={fileTypes}
                  classes = "file-button file-window"
                  />
               </div>
   )
}

class FileUpload extends React.Component {
   state = {
      selectedFile: null,
   }
   onFileChange = event => {
      this.setState({selectedFile : event.target.files[0]})
      console.log(event.target.files[0])
   }
   onFileUpload = () => {
   }
   fileData = () => {
    
    if (this.state.selectedFile) {
       
      return (
         <div className="file-button">
            <p>{this.state.selectedFile.name}</p>
            <p>{this.state.selectedFile.size}</p>
            <p>{this.state.selectedFile.type}</p>
         </div>
      )
    }
    else{
      return (
         <div className="file-button">
                  Browse Files
         </div>
      )
    }
   }
   render() {
      return (
         <label class="custom-file-upload">
         <input type="file" onChange={this.onFileChange} className="file-button"/>
         Browse Files
         </label>
      )
}
}
class Form extends React.Component {
      constructor(props) {
         super(props);
         this.state = {value: ''};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
               <div className="file-box">
                  <FileUpload />
                  <div className="file-or">
                     or
                  </div>
                  <DragAndDrop/>
            </div>
               <div className="title">
                  Youtube Link
               </div>
               <div className="subtitle">
                  Enter a youtube link to a lecture, podcast, documentary or anything else
               </div>
               <input value={this.state.value} onChange={this.handleChange} className='youtube-link'/>
               <div className="button-holder">
                  <input type="submit" value="Convert" className='submit-button'/>
               </div>
            </form>
         );
   }
}


export default function landing() {

  return (
    <div className='landing-div'>
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
