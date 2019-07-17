import React from 'react';
import Grid from './grid'
import Buttons from './buttons';
import './display.css';


class Display extends React.Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 30;

        this.state = {
            generation: 0,
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
    //Algo
    startGrid = () => {
        let g = this.state.gridFull;
        let g2 = arrClone(this.state.gridFull);

        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++) {
            let count = 0;
            if(i > 0) if(g[i - 1][j]) count++;
            if(i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
            if(i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
            if(j < this.cols - 1) if (g[i][j + 1]) count++;
            if(j > 0) if (g[i][j - 1]) count++;
            if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        });
    }
    startButton= () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.startGrid, this.speed);
    }
    stopButton = () => {
        clearInterval(this.intervalId);
    }
    randomButton = () => {
        let gridCopy = arrClone(this.state.gridFull);
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                if(Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        })
    }
    slowSpeed = () => {
        this.speed = 1000;
        this.startButton();
    }
    fastSpeed = () => {
        this.speed = 100;
        this.startButton();
    }
    componentDidMount() {
        this.randomButton();
        this.startButton();
    }

    gridSize= (size) => {
        switch (size) {
            case "1":
                this.cols = 15;
                this.rows = 15;
            break;
            case "2":
                this.cols = 45;
                this.rows = 45;
            break;
            default:
                this.cols = 30;
                this.rows = 30;
        }
        this.clearBox();
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
                <Buttons
                 startButton={this.startButton}
                 stopButton={this.stopButton} 
                 gridSize={this.gridSize} 
                 clearBox={this.clearBox}
                 randomButton={this.randomButton}
                 slowSpeed={this.slowSpeed}
                 fastSpeed={this.fastSpeed}
                 />
                <Grid 
                gridFull={this.state.gridFull} 
                rows={this.rows} cols={this.cols} 
                selectBox={this.selectBox}
                />
                <h2>Generation: {this.state.generation} </h2>
            </div>
        )
    }    
}

function arrClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}
export default Display;