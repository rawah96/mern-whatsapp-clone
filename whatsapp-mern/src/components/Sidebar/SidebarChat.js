import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
function SidebarChat({name, message}) {
    return (
        <div className="sidebar-chat">
            <Avatar />
            <div className="info">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default SidebarChat
