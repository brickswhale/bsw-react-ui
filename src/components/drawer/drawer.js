import React from 'react';
import './drawer.css';

const Drawer = (props) => {
    const {
        direction="left",
        height="256px",
        width="256px",
        coverage="full", 
        header=undefined,
        title="",
        closeIcon=null,
        footer=null,
        visible=false,
        mask=true,
        maskClosable=true,
        onClose={function(){}},
        children, 
        ...restProps 
    } = props;

    const handleOnClose = () => {
        if (onClose) {
            onClose()
        }
    }

    const handleMaskOnClick = () => {
        if (maskClosable) {
            handleOnClose()
        }
    }

    let contentWrapperStyle = {
        height: height,
        width: width
    }

    if (direction == "left" || direction == "right") {
        contentWrapperStyle = {
            width: width
        }
    }

    if (direction == "top" || direction == "bottom") {
        contentWrapperStyle = {
            height: height
        }
    }

    let contentWrapperTransform = {}
    if (!visible) {
        switch(direction) {
            case "left":
                contentWrapperTransform["transform"] = "translateX(-100%)"
                break;
            case "right":
                contentWrapperTransform["transform"] = "translateX(100%)"
                break;
            case "top":
                contentWrapperTransform["transform"] = "translateY(-100%)"
                break;
            case "bottom":
                contentWrapperTransform["transform"] = "translateY(100%)"
                break;
            default:
                break;
        }
    }

    const CloseIcon = () => (
        <div className="bsw-drawer-closeIcon" onClick={handleOnClose}>
            X
        </div>
    )

    let drawerHeader = header;
    if (header == undefined) {
        drawerHeader = (
            <div className={`bsw-drawer-header`} style={{justifyContent: title ? "space-between" : 'flex-end'}}>
                {title}
                {
                    closeIcon ? closeIcon : <CloseIcon/>
                }
            </div>
        )
    }
    

    return (
        <div className={`bsw-drawer bsw-drawer-direction-${direction} ${visible ? "bsw-drawer-open" : ""}`} {...restProps}>
            {
                mask ? <div className="bsw-drawer-mask" onClick={handleMaskOnClick}></div> : null
            }
            <div className="bsw-drawer-content-wrapper" style={{...contentWrapperStyle, ...contentWrapperTransform}}>
                <div className="bsw-drawer-content">
                    <div className="bsw-drawer-body-wrapper">
                        {drawerHeader}
                        <div className="bsw-drawer-body">
                            {children}
                        </div>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer;