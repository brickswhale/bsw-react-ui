import React from 'react';
import './drawer.css';

const Drawer = (props) => {
    const {
        position="left",
        height="256px",
        width="256px",
        header=undefined,
        title="",
        closable=true,
        closeIcon=null,
        footer=null,
        visible=false,
        mask=true,
        maskClosable=true,
        onClose={function(){}},
        bodyClassName="",
        bodyStyle={},

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

    if (position == "left" || position == "right") {
        contentWrapperStyle = {
            width: width
        }
    }

    if (position == "top" || position == "bottom") {
        contentWrapperStyle = {
            height: height
        }
    }

    let contentWrapperTransform = {}
    if (!visible) {
        switch(position) {
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
            <svg height="10pt" width="10pt" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
        </div>
    )

    let drawerHeader = header;
    if (header == undefined) {
        drawerHeader = (
            <div className={`bsw-drawer-header`} style={{justifyContent: title ? "space-between" : 'flex-end'}}>
                {title}
                {
                    closable ? (closeIcon ? closeIcon : <CloseIcon/>) : null
                }
            </div>
        )
    }
    

    return (
        <div className={`bsw-drawer bsw-drawer-position-${position} ${visible ? "bsw-drawer-open" : ""}`} {...restProps}>
            {
                mask ? <div className="bsw-drawer-mask" onClick={handleMaskOnClick}></div> : null
            }
            <div className="bsw-drawer-content-wrapper bsw-color-set-3" style={{...contentWrapperStyle, ...contentWrapperTransform}}>
                <div className="bsw-drawer-content">
                    <div className="bsw-drawer-body-wrapper">
                        {drawerHeader}
                        <div className={`bsw-drawer-body ${bodyClassName}`} style={bodyStyle}>
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