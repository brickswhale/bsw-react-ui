import React from 'react';
import './section-container.css';

const SectionContainer = (props) => {
    const { bswCentered="", children, className="", style={}, ...restProps } = props;

    return (
        <div className={`bsw-section-container ${className}`} style={style} {...restProps}>
            <div className={`${bswCentered}`}>
                {children}
            </div>
        </div>
    )
}

export default SectionContainer;