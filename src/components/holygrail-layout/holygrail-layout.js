import React, { cloneElement } from 'react';
import './holygrail-layout.css';

const HolyGrailLayout = (props) => {
    const { 
        header=null,
        headerClassName="",
        headerStyle={}, 

        footer=null, 
        footerClassName="",
        footerStyle={},

        leftSidebar=null, 
        rightSidebar=null,

        centered=true,
        headerInFlow=false,

        className="", 
        children,
        ...restProps
    } = props;

    let containerStyle = {
        display: "grid",
        gridTemplateColumns: "",
        gridTemplateRows: "",
        gridColumnGap: 0,
        gridRowGap: 0
    }

    let isCentered = centered ? "bsw-holygrail-layout-centered" : "";

    // if (headerInFlow) {
    //     return (
    //         <div className={`bsw-holygrail-layout ${className}`} {...restProps}>
    //             {
    //                 header ? 
    //                 ( 
    //                     <header className="bsw-holygrail-layout-header">
    //                         {header}
    //                     </header>
    //                 )
    //                 : null
    //             }
    //             {
    //                 leftSidebar ? 
    //                 (
    //                     <aside className="bsw-holygrail-layout-main-leftSidebar">
    //                         {leftSidebar}
    //                     </aside>
    //                 ) : null
    //             }
    //             <main className={`bsw-holygrail-layout-main-content ${isCentered}`}>
    //                 {children}
    //             </main>
    //             {
    //                 rightSidebar ? 
    //                 (
    //                     <aside className="bsw-holygrail-layout-main-rightSidebar">
    //                         {rightSidebar}
    //                     </aside>
    //                 ) : null
    //             }
    //             {
    //                 footer ?
    //                 (
    //                     <footer className="bsw-holygrail-layout-footer">{footer}</footer>
    //                 ) : null
    //             }
    //         </div>
    //     )
    // }

    const addSpacingPropsToChild = (element) => {
        let result = element;
        
        if (!element || !element.props || element.type == React.Fragment) {
            result = <div>{element}</div>
        }
        return cloneElement(result, {
            className: `${result.props.className ? result.props.className : ""} ${isCentered}`
        });
    } 

    const headerWithExtraProp = addSpacingPropsToChild(header);
    const footerWithExtraProp = addSpacingPropsToChild(footer);
    const childrenWithExtraProp = React.Children.map(children, child => {
        let result = child;

        if (!child || !child.props || child.type == React.Fragment) {
            result = <div>{child}</div>
        }

        let newProps = {
            className: `${result.props.className ? result.props.className : ""} ${leftSidebar == null && rightSidebar == null ? isCentered : ""}`
        }

        // a react component
        if (result.type.name && leftSidebar == null && rightSidebar == null) {
            newProps = {
                bswCentered: isCentered
            }
        }

        return cloneElement(result, newProps);
    });

    return (
        <div className={`bsw-holygrail-layout ${className}`} {...restProps}>
            {
                header ? 
                ( 
                    <header className={`bsw-holygrail-layout-header ${headerClassName}`} style={headerStyle}>
                        {headerWithExtraProp}
                    </header>
                )
                : null
            }
            <div className={`bsw-holygrail-layout-main-type1 ${leftSidebar == null && rightSidebar == null ? "" : isCentered}`}>
                {
                    leftSidebar ? 
                    (
                        <aside className="bsw-holygrail-layout-main-leftSidebar">
                            {leftSidebar}
                        </aside>
                    ) : null
                }

                <main className="bsw-holygrail-layout-main-content">
                    {childrenWithExtraProp}
                </main>
                {
                    rightSidebar ? 
                    (
                        <aside className="bsw-holygrail-layout-main-rightSidebar">
                            {rightSidebar}
                        </aside>
                    ) : null
                }

            </div>
            {
                footer ?
                (
                    <footer className={`bsw-holygrail-layout-footer ${footerClassName}`} style={footerStyle}>
                        {footerWithExtraProp}
                    </footer>
                ) : null
            }
        </div>
    )

    
}

export default HolyGrailLayout;