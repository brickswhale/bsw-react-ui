import React, { useState } from 'react';
import Drawer from '../components/drawer/drawer';

const DrawerSection = (props) => {
    const [ visible, setVisible ] = useState(false);
    const [ position, setPosition ] = useState("right");

    const onClose = () => {
        setVisible(false)
    }
    return (
        <div>
            <button onClick={()=>{setVisible(!visible)}}>Open Drawer</button>
        <Drawer
            visible={visible}
            onClose={onClose}
            position={position}
            // mask={false}
        >
            drawer here {position}
        </Drawer>
        
        </div>
    )
}

export default DrawerSection;