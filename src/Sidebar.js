import React, { useState, useEffect }  from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

// import db from "./firebase";
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user }] = useStateValue();

    // const [channels, setChannels] = useState([]);
    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => (
    //         setChannels(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             name: doc.data().name
    //         })))
    //     ))
    // }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> NBS Technology</h2>
                    <h3>
                        <FiberManualRecordIcon />{user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
                
            </div>
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={AccessTimeIcon} title="Activity" />
            <SidebarOption Icon={EmojiEventsIcon} title="Challenge" />
            <SidebarOption Icon={SettingsIcon} title="Settings" />
            
            <hr />
            {/* <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))} */}
            
        </div>
    )
}

export default Sidebar
