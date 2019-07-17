import React from 'react';
import './display.css';


class Buttons extends React.Component {

    handleSelect = (e) => {
        this.props.gridSize(e);
    }

    render() {
        return (
            <div className="buttons">
                <button onClick={this.props.startButton}>Start</button>
                <button onClick={this.props.stopButton}>Stop</button>
                {/* <button>Pause</button> */}
                <button onClick={this.props.clearBox}>Clear</button>

                <select onSelect={this.handleSelect}>
                    <option >Grid Size</option>
                    <option className="1">15x15</option>
                    <option className="2">30x30</option>
                    <option className="3">45x45</option>
                </select>
            </div>
        )
    }    
}

export default Buttons;


    