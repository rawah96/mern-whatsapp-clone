import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'
/*
  I want to use the router to 
    1. enter the chat
    2. if icon on top left clicked, go back to chats
    3. or maybe just compress/expand the window as the icon is clicked.
*/
function App() {
  //var date = new Date();
  let timestamp = new Date().toUTCString();
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat 
        name="Amani Alsinan" 
        lastSeen={`Last seen ${timestamp}`}
        message="                    مشتاق موت ال هالوجه        "
        receiver="Rawah Alsinan"
        receivedMessage="فارقني صار اهوايه"
        />
      </div>
    </div>
  );
}

export default App;
