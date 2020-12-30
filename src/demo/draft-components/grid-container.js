import React from 'react';

const GridContainer = (props) => {
    return (
        <div>

        </div>
    )
}

export const GridItem = (props) => {
    const { startCol=null, endCol=null, startRow=null, endRow=null, children, className="", style={}, ...restProps } = props;

    let itemStyle = {}
    if (startCol != null && endCol !=null && startRow != null && endRow != null) {
        itemStyle = {
            gridArea: `${startRow} / ${startCol} / ${endRow+1} / ${endCol+1}`
        }
    }
    return (
        <div className={`bsw-grid-item ${className}`} style={{...itemStyle, ...style}} {...restProps}>
            {children}
        </div>
    )
}

export default GridContainer;