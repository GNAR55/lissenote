import React from "react";

import Preview from "./preview.jsx";
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { Document } from 'react-pdf'
import { useState, useEffect } from 'react';


import "../landing page/landing.css";
import "./convert.css";
import { render } from "@testing-library/react";

var blobUrl;
// https://www.youtube.com/watch?v=gnlx5ueT2AU
function downloadPDF(props) {
  const file = blobUrl;
  const fileName = "lissenote.pdf";
  saveAs(file, fileName);
}

function GetPDF(props) {
  // const [pdfUrl, setpdfUrl] = useState('');
  const ytlink = props.link;
  const file = props.file;
  const fileName = props.fileName;
  console.log(ytlink);
  console.log(file);
  console.log(fileName);
  // make a fetch post request 
  const url = 'http://localhost:5000/yt';
  const formData = new FormData();
  formData.append('url', ytlink);
  formData.append('responseType', 'arraybuffer')
  const options = {
    method: 'POST',
    body: formData
  }
  fetch(url, options)
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .then((url) => {
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

function Convert() {
  const location = useLocation();
  const ytlink = location.state.link;
  const file = location.state.file;
  const fileName = location.state.fileName;
  useEffect(() => {
    GetPDF({ link: ytlink, file: file, fileName: fileName });
  }, []);

  return (
    <div className="convert-div">
      <div className="btn-wrapper">
        <div className="button-holder">
          <button type="submit" class="custom-btn btn-3 convert-btn">
            <span>Convert More</span>
            <div className="inside-container"> </div>
          </button>
        </div>
        <div className="button-holder">
          <button type="submit" onClick={downloadPDF} class="custom-btn btn-3 convert-btn">
            <span>Download PDF</span>
            <div className="inside-container"> </div>
          </button>
        </div>
      </div>
      {/* <Preview pdfUrl={blobUrl}/> */}
      <div className="pdf-frame-container">
        <div className="loading-screen">
          <div className="loading-text">
            Loading....
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;
