import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import {Avatar, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <Avatar className="avatar"/>
                <div className="right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="left"></div>
            </div>
            <div className="search">
                <div className="search-container">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="chats">
                <SidebarChat name="Anooch"
                message="احبوق"
                />
            </div>
        </div>
    )
}

export default Sidebar
