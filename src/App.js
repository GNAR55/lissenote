import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from './navbar/navbar.js';
import Landing from './landing page/landing.js';
import Example from './examples/examples.js';
import WhyLissenote from './whyLissenote/why.js';
import Team from './team/team.js';
import Convert from './convert/convert.js';
import Audio from './audioRecorder/audioRecorder.jsx'

function App() {
  return (
    <Router>
    <>
    <Navbar />
      <Routes>
      <Route
            exact
            path="/"
            element={
              <div>
                  <Landing />
                  {/* <Audio /> */}
                  <Example />
                  <WhyLissenote />
                  <Team /> 
              </div>
            }
          />
           <Route
            exact
            path="/convert"
            element={
              <div>
                <Convert />
              </div>
            }
          />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
