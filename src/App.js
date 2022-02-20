import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import socketIOClient from "socket.io-client";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import VideoCall from './components/Videocall';
const ENDPOINT = "http://127.0.0.1:8080/";

function App() {

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.emit('getMessages' , {message : 'value'});

  // }, []);


  return (
    <Router>
      <div>
        {/* <Login /> */}
        {/* <main className="layout">
          <Sidebar />
          <Chat />
        </main> */}
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/video-call/:roomId" component={VideoCall} />

            </Switch>

      </div>
    </Router>

  );
}

export default App;
