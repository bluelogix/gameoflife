import React from 'react';
import Grid from './grid'
import Buttons from './buttons';
import './display.css';


class Display extends React.Component {
    constructor() {
        super();
        this.rows = 30;
        this.cols = 30;

        this.state = {
            generation: 0,
            //creating a arrays for rows and columns
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }
    //Methods
    selectBox = (rows, cols) => {
        let gridCopy = arrClone(this.state.gridFull);
        gridCopy[rows][cols] = !gridCopy[rows][cols];
        this.setState({
            gridFull: gridCopy
        })
    }
    clearBox = () => {
        const clearGrid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: clearGrid,
            generation: 0
        })
    }

    startGrid = () => {

    }
    startButton= () => {
        
    }
    stopButton= () => {
        
    }
    gridSize= () => {
        
    }


    render() {
        return (
            <div>
                <h1>Conway's Game Of Life</h1>
                <ul>
                <h2>Rules:</h2>
                <li>Any live cell with fewer than two live neighbors dies.</li>
                <li>Any live cell with two or three live neighbors lives on to the next generation</li>
                <li>Any live cell with more than three live neighbors dies</li>
                <li>Any dead cell with three live neighbors becomes a live cell</li>                
                </ul>
                <Buttons startButton={this.startButton} stopButton={this.stopButton} gridSize={this.gridSize} clearBox={this.clearBox} />
                <Grid gridFull={this.state.gridFull} rows={this.rows} cols={this.cols} selectBox={this.selectBox}/>
                <h2>Generation: {this.state.generation} </h2>
            </div>
        )
    }    
}

function arrClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}
export default Display;