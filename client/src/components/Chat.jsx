import React, { useState } from "react";
import styled from "styled-components";
import color from "../theme";
import { Modal } from "./LogInModal";

const ChatContainer = styled(Modal)``;

const Chat = () => {
  return (
    <>
      <div>hello user</div>
      <div>당신은 거짓말쟁이 입니다</div>
    </>
  );
};

export default Chat;
