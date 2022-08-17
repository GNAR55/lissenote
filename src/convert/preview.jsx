// MyApp.js
import React, { Component } from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
import './preview.css'
import File from '../assets/test.pdf'
const file = '../assets/test.pdf'
const type = 'pdf'

const ErrorComponent = () => (
  <React.Fragment>
    <div>
    {/* <img src={ErrorIcon} /> */}
    </div>
  </React.Fragment>
);

const onError =(e) => console.log(e);

const LoaderComponent = () => <img src={`../assets/github.png`} alt ="laoding" className="loading" />;

export default class MyComponent extends Component{
   render() {
      return (
      <FileViewer
        fileType={type}
        filePath={File}
        errorComponent={<ErrorComponent/>}
        onError={e => onError(e)}
        loaderComponent={<LoaderComponent/>} />
    );
   }
}
