import React from 'react';
import './display.css';


class Buttons extends React.Component {

    handleSelect = (e) => {
        this.props.gridSize(e);
    }

    render() {
        return (
            <div >
                <button onClick={this.props.startButton}>Start</button>
                <button onClick={this.props.stopButton}>Stop</button>
                {/* <button>Pause</button> */}
                <button onClick={this.props.clearBox}>Clear</button>

                <select onSelect={this.handleSelect}>
                    <option>Grid Size</option>
                    <option>15x15</option>
                    <option>30x30</option>
                    <option>45x45</option>
                </select>
            </div>
        )
    }    
}

export default Buttons;


    