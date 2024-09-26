import React, { useState } from 'react';
import LeftSide from "../page/LeftSide";
import RightSide from '../page/RightSide';
import './Home.css';

function Home() {
const [viewMode, setViewMode] = useState('grid'); 
console.log("viewMode" ,viewMode)
  return (
    <div className="home-container">
      <div className="left-side">
        <LeftSide setViewMode={setViewMode}/>
      </div>
      <div className="right-side">
        <RightSide viewMode={viewMode}/>
      </div>
    </div>
  );
}

export default Home;
