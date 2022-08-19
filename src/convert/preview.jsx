// MyApp.js
import React, { Component } from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
import './preview.css'
// import File from '../assets/test.pdf'
const file = 'blob:http://localhost:3000/6597a529-3317-4ce5-a1ac-d296f747eba6'
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
        filePath={this.props.pdfUrl}
        errorComponent={<ErrorComponent/>}
        onError={e => onError(e)}
        loaderComponent={<LoaderComponent/>} />
    );
   }
}

// function Preview(props){
//   const file = props.pdfURL
//   console.log(file);
//   return (
//     <FileViewer
//       fileType={type}
//       // filePath={file}
//       filePath={`blob:http://localhost:3000/ea95e097-f84e-4bf8-b9aa-bcd7ace9cffe`}
//       errorComponent={<ErrorComponent/>}
//       onError={e => onError(e)}
//       loaderComponent={<LoaderComponent/>} />
//   );
// }
// export default Preview;
