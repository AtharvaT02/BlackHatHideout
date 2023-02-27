import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './views/landing';
import Lottie from 'lottie-react';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Router>
        <LandingPage />
      </Router>
    </>
  );
}

export default App;
