import React, { Component, useState } from 'react';
import Board from './Board';
import Header from './Header';
import Keyboard from './Keyboard';

// const getWord = () => {
//   fetch("https://random-word-api.herokuapp.com/all").then(res => res.js)
// }

function Game() {
  return <div>
      <Header></Header>
      <br/>
      
      <Keyboard></Keyboard>

      </div>;
}

export default Game;


