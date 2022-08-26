import React from "react";

import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import {  useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom"


import "../landing page/landing.css";
import "./convert.css";

var blobUrl;
// https://www.youtube.com/watch?v=gnlx5ueT2AU

function downloadPDF(fileName) {
  const file = blobUrl;
  let fileN = `notes.pdf`;
  if (fileName){
    fileN = `${fileName.split(".")[0]}_notes.pdf`;
  }
  saveAs(file, fileN);
}

function NavigateToHome() {
  useNavigate('/lissenote');
}

function GetPDF(props) {
  // const [pdfUrl, setpdfUrl] = useState('');
  const ytlink = props.link;
  const file = props.file;
  const fileName = props.fileName;
  const toPDF = props.toPDF;
  const fromRecording = props.fromRecording;

  console.log({ytlink, file, fileName, toPDF, fromRecording})
  console.log(ytlink);
  console.log(file);
  console.log(fileName);
  console.log(toPDF);
  console.log(fromRecording)
  if (!toPDF){
    document.querySelector("#download-button").innerHTML = "<span>Download DOCX</span>";
  }
  const fetchRequest = (url , options) => {
    console.log(`sending request to ${url}`);
    fetch(url, options)
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .then((url) => {
      console.log("received response")
      // setpdfUrl(url);
      window.open(url);
      blobUrl = url;
      const loadingScreen = document.querySelector('.loading-screen');
      loadingScreen.style.display = 'none';
      const convertDiv = document.querySelector(".pdf-frame-container");
      const pdfFrame = document.createElement("iframe");
      pdfFrame.src = url;
      pdfFrame.className = "pdf-frame";
      convertDiv.appendChild(pdfFrame);
    })
    .catch((er) => console.log(er))
  }
  // make a fetch post request 
  if (fromRecording){
    const url = "http://localhost:5000/audiotopdf"
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('fileName', 'recording');
    const options = {
      method: 'POST',
      body: formData
    }
    fetchRequest(url, options);
  }

  else if (ytlink && toPDF ){
  const url = 'http://localhost:5000/yttopdf';
  const formData = new FormData();
  formData.append('url', ytlink);
  formData.append('responseType', 'arraybuffer')
  const options = {
    method: 'POST',
    body: formData
  }
  fetchRequest(url, options)
  }
  else if (ytlink && !toPDF ){
    const url = 'http://localhost:5000/yttodocx';
    const formData = new FormData();
    formData.append('url', ytlink);
    formData.append('responseType', 'arraybuffer')
    const options = {
      method: 'POST',
      body: formData
    }
    fetchRequest(url, options)
    }

  else if (file && toPDF){
    const url = 'http://localhost:5000/audiotopdf';
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('fileName', fileName);
    formData.append('responseType', 'arraybuffer')
    const options = {
      method: 'POST',
      body: formData
    }
    fetchRequest(url, options)
  }

  else if (file && !toPDF){
    const url = 'http://localhost:5000/audiotodocx';
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('fileName', fileName);
    formData.append('responseType', 'arraybuffer')
    const options = {
      method: 'POST',
      body: formData
    }
    fetchRequest(url, options)
  }
}

function Convert() {
  const location = useLocation();
  const ytlink = location.state.link;
  const file = location.state.file;
  const fileName = location.state.fileName;
  const toPDF = location.state.toPDF;
  const fromRecording = location.state.fromRecording;

  useEffect(() => {
    GetPDF({ link: ytlink, file: file, fileName: fileName, toPDF: toPDF, fromRecording: fromRecording });
  }, [ytlink, file, fileName, toPDF, fromRecording]);

  return (
    <div className="convert-div">
      <div className="btn-wrapper">
        <div className="button-holder">
        <Link to='/'>
          <button type="submit" onClick={NavigateToHome} class="custom-btn btn-3 convert-btn">
            <span>Convert More</span>
            <div className="inside-container"> </div>
          </button>
          </Link>
        </div>
        <div className="button-holder">
          <button type="submit" id="download-button" onClick={() => { downloadPDF(fileName)}} class="custom-btn btn-3 convert-btn">
            <span>Download PDF</span>
            <div className="inside-container"> </div>
          </button>
        </div>
      </div>
      {/* <Preview pdfUrl={blobUrl}/> */}
      <div className="pdf-frame-container">
        <div className="loading-screen">
          <div id="beiwe-loading-div">
            <div class="spinner beiwe-loading-image">
              Loading
              <div class="spinner-sector spinner-sector-red"></div>
              <div class="spinner-sector spinner-sector-blue"></div>
              <div class="spinner-sector spinner-sector-green"></div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;
