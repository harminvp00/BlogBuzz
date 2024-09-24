import React, { useState, useEffect } from 'react';
import Light from '../assets/CSS/Light.css';
import Dark from '../assets/CSS/Dark.css';

const Temp = () => {
 


  return (
    <div id='box' style={Light}>
      <h1 id='heading'> Testing </h1>
      <p> {ThemeName}</p>
      <button name='btn' id='btn' > Change Theme </button>
    </div>
  )
}

export default Temp;

