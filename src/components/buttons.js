import React from 'react';
import './display.css';


class Buttons extends React.Component {

    render() {
        return (
            <div >
                <button>Start</button>
                <button>Stop</button>
                <button>Pause</button>
                <button onClick={this.props.clearBox}>Clear</button>
                <select>
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


    