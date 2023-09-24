import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
import "./Assets/Styles/custom.css";

// Routes
import TaskRoutes from "./Routes/TaskRoutes.js";

// Production (Console Ban)
import { init } from 'console-ban';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const App = () => {

  if (process.env.REACT_APP_ENV === 'PRODUCTION') {
    init({
      write: "<h2 style='text-align: center'>Console is disable in production stage (Close the console and refresh the page)</h2>",
    })
    disableReactDevTools();
    console.log = () => {}
    console.info = () => {}
    console.error = () => {}
    console.debug = () => {}
    console.clear();
  }

  return (
      <div className="App">
        <Router>
          {TaskRoutes}
        </Router>
      </div>
  );
}

export default App;
