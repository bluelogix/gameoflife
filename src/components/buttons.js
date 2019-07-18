import React from 'react';
import './display.css';
import {DropdownButton, Dropdown } from 'react-bootstrap';

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
                <DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
                    <Dropdown.Item eventKey="1">15x15</Dropdown.Item>
                    <Dropdown.Item eventKey="3">30x30</Dropdown.Item>
                    <Dropdown.Item eventKey="2">45x45</Dropdown.Item>
					</DropdownButton>
            </div>
        )
    }    
}

export default Buttons;


    