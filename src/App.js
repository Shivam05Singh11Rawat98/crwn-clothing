import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './pages/hompage/homepage.components';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
