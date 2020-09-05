import React from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InesertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat({name, lastSeen, message, receiver, receivedMessage}) {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar clas/>
                <div className="header-info">
                    <h3>{name}</h3>
                    <p>{lastSeen}</p>
                </div>
                <div className="header-right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile /> 
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <p className="chat-message">
                    <span className="chat-name">{name}</span>
                    {message}
                    <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p>
                    <p className="chat-receiver">
                        <span className="chat-name">{receiver}</span>
                        {receivedMessage}
                        <span className="timestamp">
                            {new Date().toUTCString()}
                        </span>
                    </p>
                </p>
            </div>
            <div className="chat-footer">
                <InesertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
