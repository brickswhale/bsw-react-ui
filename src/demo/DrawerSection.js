import React, { useState } from 'react';
import Drawer from '../components/drawer/drawer';

const DrawerSection = (props) => {
    const [ visible, setVisible ] = useState(true);
    const [ direction, setDirection ] = useState("left");

    const onClose = () => {
        setVisible(false)
    }
    return (
        <div>
            <button onClick={()=>{setVisible(!visible)}}>Open Drawer</button>
        <Drawer
            visible={visible}
            onClose={onClose}
            direction={direction}
            // mask={false}
        >
            drawer here {direction}
        </Drawer>
        
        </div>
    )
}

export default DrawerSection;