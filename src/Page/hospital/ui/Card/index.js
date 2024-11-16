import {
  CardContainer,
  Header,
  ChatBox,
  ButtonsContainer,
  Button,
} from "./style";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Card = ({ patientName, message, sendStatus }) => {
  return (
    <CardContainer>
      <Header>{patientName}</Header>
      <ChatBox>
        {message.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </ChatBox>
      <ButtonsContainer>
        <Button
          onClick={() => {
            sendStatus({ patientName }, 1);
          }}
          color="green">
          초록
        </Button>
        <Button
          onClick={() => {
            sendStatus({ patientName }, 2);
          }}
          color="yellow">
          노랑
        </Button>
        <Button
          onClick={() => {
            sendStatus({ patientName }, 3);
          }}
          color="red">
          빨강
        </Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;
