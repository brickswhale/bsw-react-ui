import React from 'react';

const GridContainer = (props) => {
    const { 

        column=3,
        row=3,
        className="",
        style={},
        children, 
        ...restProps 
    } = props;

    let containerStyle = {
        gridTemplateColumns: `repeat(${column}, auto)`,
        gridTemplateRows: `repeat(${row}, auto)`,
        gridColumnGap: 0,
        gridRowGap: 0
    }

    return (
        <div className={`bsw-grid-container ${className}`} style={{...containerStyle, ...style}} {...restProps}>
            {children}
        </div>
    )
}

export const GridItem = (props) => {
    const { 
        startColumn=1, 
        endColumn=1, 
        startRow=1, 
        endRow=1, 
        children, 
        className="", 
        style={}, 
        ...restProps 
    } = props;

    let itemStyle = {}
    if (startColumn != null && endColumn !=null && startRow != null && endRow != null) {
        itemStyle = {
            gridArea: `${startRow} / ${startColumn} / ${endRow+1} / ${endColumn+1}`
        }
    }
    return (
        <div className={`bsw-grid-item ${className}`} style={{...itemStyle, ...style}} {...restProps}>
            {children}
        </div>
    )
}

export default GridContainer;