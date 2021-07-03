import React, { useState } from "react";
import styled from "styled-components";
import color from "../theme";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.black};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32em;
  height: 20em;
  margin: 12px;
  padding: 12px;
  border: 4px solid ${color.white};
  border-radius: 24px;
  color: ${color.white};

  h2 {
    margin-top: 0;
  }

  h2 > span {
    font-size: 40px;
  }

  input {
    border: 2px solid ${color.red};
    background-color: transparent;
    color: ${color.white};
    padding: 4px;
    margin: 8px 0;
    font-size: 24px;
  }

  button {
    width: 100px;
    padding: 8px 10px;
    margin-top: 20px;
    background-color: ${color.white};
    border: 0px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 20px;
  }

  button:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const LogInModal = ({ setUserName, setRoomName, connectToRoom }) => {
  return (
    <ModalContainer>
      <Modal>
        <h2>
          Wellcome To <span>🐺</span> Game!
        </h2>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="name"
        ></input>
        <label></label>
        <input
          type="text"
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="room name"
        ></input>
        <button onClick={() => connectToRoom()}>ENTER</button>
      </Modal>
    </ModalContainer>
  );
};

export default LogInModal;
