import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import queryString from "querystring";
import color from "../theme";
import { Modal } from "./common/Modal";
import { ModalContainer } from "./common/ModalContainer";

const ChatContainer = styled(ModalContainer)`
  flex-direction: column;
`;

const ChatsModal = styled(Modal)`
  width: 60vw;
  height: 100vh;
  align-items: center;
  justify-content: normal;

  .chatDisplay {
    width: 100%;
    height: 100%;
  }

  .inputBox {
    width: 100%;
    display: flex;
  }

  .inputBox > input {
    width: 90%;
    font-size: 24px;
    padding: 12px;
    margin: 0;
  }

  .inputBox > button {
    width: 100px;
    background-color: ${color.orange};
    color: ${color.white};
    cursor: pointer;
  }
`;

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("chatRoom");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    const data = queryString.parse(location.search);
    console.log(data);

    // setName 안먹는 에러
    setName(data["?name"]);
    console.log(name);

    // 두 번째 인자를 객체로 해야 넘어감.. 왜 그냥 userName 주면 안되는거지?
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnection");
      socket.off();
    };
  }, [ENDPOINT, name]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [message]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) socket.emit("sendMessage", message, () => setMessage(""));
  };

  console.log(message, messages);

  return (
    <ChatContainer>
      <ChatsModal>
        <p>Wellcome!</p>
        <div className="chatDisplay">Hello</div>
        <form className="inputBox">
          <input
            type="text"
            placeholder="message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
          <button onClick={() => sendMessage()}>Send</button>
        </form>
      </ChatsModal>
    </ChatContainer>
  );
};

export default Chat;
