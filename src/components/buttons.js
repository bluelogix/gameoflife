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
                <button onClick={this.props.clearBox}>Clear</button>
                <button onClick={this.props.randomButton}>Randomize</button>
                <button onClick={this.props.fastSpeed}>Fast</button>
                <button onClick={this.props.slowSpeed}>Slow</button>
                
               {/* <select onSelect={this.handleSelect}>
                    <option>Grid Size</option>
                    <option e="1">15x15</option>
                    <option e="2">30x30</option>
                    <option e="3">45x45</option>
                </select>  */}
                {/* <form onSelect={this.handleSelect}>
                    <input className="1" value="sonething" />
                </form> */}
            </div>
        )
    }    
}

export default Buttons;


    