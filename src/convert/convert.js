import React from "react";

import Preview from "./preview.jsx";
import axios from 'axios';
import {useLocation} from 'react-router-dom';

import "../landing page/landing.css";
import "./convert.css";
function downloadPDF(){

}

function GetPDF(props){
  const link = props.link;
  const file = props.file;
  const fileName = props.fileName;
  console.log(link);
  console.log(file);
  console.log(fileName);
  const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:3000/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
    uploadFile();
}
function Convert() {
  const location = useLocation();
  const link = location.state.link;
  const file = location.state.file;
  const fileName = location.state.fileName;
  GetPDF({link: link, file: file, fileName: fileName});
  return (
    <div className="convert-div">
      {/* <Preview /> */}
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
    </div>
  );
}

export default Convert;
