import React from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./landing.css"
import {ReactComponent as Heading} from './landing-tagline.svg'

function DragAndDrop() {
   const fileTypes = ["JPEG", "PNG", "GIF"];
   const [file, setFile] = useState(null);
      const handleChange = (file) => {
         setFile(file);
   };
   return (
         <div className="file-box">
               <div className="file-button">
                  Browse Files
               </div>
               <div className="file-or">
                  or
               </div>
               <div className="file-window">
               <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  classes = "file-button file-window"
                  />
               </div>
            </div>
   )
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
            <form action="" method="post">
               <DragAndDrop/>
               <div className="title">
                  Youtube Link
               </div>
               <div className="subtitle">
                  Enter a youtube link to a lecture, podcast, documentary or anything else
               </div>
               <input type="url" name="url" id="url" className='youtube-link'/>
               <div className="button-holder">
                  <input type="submit" value="Convert" className='submit-button'/>
               </div>
            </form>
      </div>
    </div>
  )
}
