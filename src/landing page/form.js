import React from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {useNavigate} from 'react-router-dom';
// import axios from 'axios';

import "./landing.css"
import "./form.css"

function WithNavigate(props) {
   let navigate = useNavigate();
   return <Form {...props} navigate={navigate} />
}

export default WithNavigate

let file, fileName, link;
class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: '', pdf: true};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
 this.setState({value: event.target.value});
 document.querySelector(".youtube-link").style = "color: black";
 if (event.target.value.includes("youtube.com")) {
   link = event.target.value;
   document.querySelector(".youtube-link").style = "color: black";
 }
 else{
   document.querySelector(".youtube-link").style = "color: red";
 }
}

handleSubmit(event) {
   link = this.state.value;
   if (link !== "" && fileName !== "" && file !== null) {
       
   } 
   this.props.navigate('/convert', {state: {link: link, file: file, fileName: fileName, toPDF: this.state.pdf}});
   console.log("submitted");
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
               <button type="submit" class="custom-btn btn-3">
                  {/* add a pdf logo svg */}
                  
               <span>Convert to PDF</span>
               <div className='inside-container'> </div>
               </button>
               <button type="submit" class="custom-btn btn-3" onClick={() => (
                  this.setState({
                     pdf: false
                  }))}>
                     {/* add a docx logo svg */}
               <span>Convert to DOCX</span>
               <div className='inside-container'> </div>
               </button>
            </div>
         </form>
      );
}
}


function DragAndDrop() {
const fileTypes = ["MP3", "WAV", "MP4", "MKV"];
const [file, setFile] = useState(null);
   const handleChange = (file) => {
      // setFile(file);
      // console.log(file[0].name)
      file = file[0];
      setFile(file);
      console.log(file);
      fileName = file.name
      console.log(fileName);
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
   file = event.target.files[0];
   fileName = event.target.files[0].name
   document.querySelector('.file-window .file-button').innerHTML ='';
   document.querySelector('.file-window .file-button').innerHTML = `
   <div class='file-upload-svg-name'>
   <div> <img src=${require("../assets/file.png")} alt="file-upload" class="upload-file-img"/> </div>
   ${fileName}
   <div>`;
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
      <input type="file" onChange={this.onFileChange} className="file-button"
         accept="audio/*, video/*, .mkv" />
         Browse Files
      </label>
      
   )
}
}