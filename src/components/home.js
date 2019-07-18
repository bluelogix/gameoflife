import React from 'react';
import './display.css';

function Home() {
    return (
      <div >
          
          <span>Conway's Game Of Life</span>
          <div className="home">
         <div className="abt">
             <h1>About</h1>
                     <p>The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties.</p>
         </div>
               
            <div className="about">
            <ul>
            <h1>Rules</h1>
                <li>Any live cell with fewer than two live neighbors dies</li>
                <li>Any live cell with more than three live neighbors dies</li>
                <li>Any dead cell with three live neighbors becomes a live cell</li> 
                <li>Any live cell with two or three live neighbors lives on to the next generation</li>        
                </ul>
                </div>

          </div>
         
      </div>
    );
  }
  
  export default Home;