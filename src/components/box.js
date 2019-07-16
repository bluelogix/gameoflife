import React from 'react';
import './display.css';


class Box extends React.Component {

selectBox = () => {
    this.props.selectBox(this.props.rows, this.props.cols)
}

    render() {
        return (
            <div 
            className={this.props.boxClass} 
            id={this.props.id} 
            onClick={this.selectBox}
             
            />
        )
    }    
}

export default Box;