import React from 'react';
import Grid from './grid'
import Buttons from './buttons';



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


    render() {
        return (
            <div>
                <h1>Conway's Game Of Life</h1>
                <Buttons clearBox={this.clearBox} />
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