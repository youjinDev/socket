import "./App.css";
import React, { useEffect, useState } from "react";
import LogInModal from "./components/LogInModal";
import Chat from "./components/Chat";
import io from "socket.io-client";

let socket;
const CONNECTION_PORT = "localhost:3001/";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const connectToRoom = () => {
    if (room.length === 0 || userName.length === 0) {
      alert("공백이 있습니다");
      return;
    }
    setLoggedIn(true);
    socket.emit("join_room", room);
    console.log("[connectToRoom]실행");
  };

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  const changeUserName = (userName) => {
    setUserName(userName.trim());
  };

  const setRoomName = (roomName = room) => {
    setRoom(roomName);
  };

  console.log(userName);

  return (
    <div className="App">
      {loggedIn ? (
        <Chat />
      ) : (
        <LogInModal
          setUserName={changeUserName}
          setRoomName={setRoomName}
          connectToRoom={connectToRoom}
        />
      )}
    </div>
  );
}

export default App;
