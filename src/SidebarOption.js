import React from 'react'
import "./SidebarOption.css"
import {useHistory} from "react-router-dom";
import db from './firebase';

// history is basically when we are trying to go backward a page, forward a pg or modify its link
// its basically a track record
// whenever we click on something we force a redirect and basically push history
// id, addChannelOption is trying to be achieved which option channel nneds to be added

function SidebarOption({Icon, id, addChannelOption, title}) {
    const history= useHistory();

    const selectChannel=()=>{
        if(id){
            history.push(`/room/${id}`)
        } else{
            history.push(title);
        }
    };
    // room would be having id other pg wont.. case handled
    // loads only requird part nd not the entire thing

    const addChannel=()=>{
        const channelName = prompt("please enter the channel name");
        console.log("debug-- prompt");
        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {/* <Icon /> */}
            {/* <h2> {title} </h2> */}
            {/* if icon is passed, then only u are supposed to render this */}
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebarOption__channel">
                   <span className="sidebarOption__hash"> # </span> {title}
                </h3>
            )}

        </div>
    )
}

export default SidebarOption
