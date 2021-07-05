import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../theme";
import { ModalContainer } from "./common/ModalContainer";
import { Modal } from "./common/Modal";
import icon from "../img/icon_middle.png";

const MyModal = styled(Modal)`
  position: relative;

  img {
    position: absolute;
    top: -122px;
  }

  h2 {
    margin-top: 0;
  }

  h2 > span {
    font-size: 40px;
  }

  input {
    border: 2px solid ${color.orange};
    background-color: transparent;
    color: ${color.white};
    padding: 10px;
    margin: 8px 0;
    font-size: 24px;
  }

  button {
    width: 120px;
    padding: 8px 10px;
    margin-top: 20px;
    background-color: ${color.white};
    border: 0px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 20px;
  }

  button:hover {
    background-color: ${color.orange};
    color: white;
    cursor: pointer;
  }
`;

const LogInModal = () => {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("chatRoom");

  return (
    <ModalContainer>
      <MyModal>
        <img src={icon} alt="wolf img" />
        <h2>Wellcome To The Wolf Game!</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Link
          onClick={(e) => (!userName ? e.preventDefault() : null)}
          to={`/chat?name=${userName}&room=${room}`}
        >
          <button type="submit">Ready?</button>
        </Link>
      </MyModal>
    </ModalContainer>
  );
};

export default LogInModal;
