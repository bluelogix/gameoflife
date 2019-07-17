import React from 'react';
import Box from './box';
import './display.css';


class Grid extends React.Component {

   
    render() {
        const width = this.props.cols * 16;
        const rowsArr = [];
        // const boxClass = "";
        for(let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;
                let boxClass = this.props.gridFull[i][j] ? "box alive" : "box dead";
                rowsArr.push(
                    <Box 
                    
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    rows={i}
                    cols={j}
                    selectBox={this.props.selectBox} />
                );
            }
        }
        return (
            <div className="grid" style={{width: width}}>
            {rowsArr}
            </div>
        )
    }    
}

export default Grid;