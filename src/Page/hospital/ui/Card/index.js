import React from "react";
import {
  CardContainer,
  Header,
  ChatBox,
  ButtonsContainer,
  Button,
} from "./style";

const Card = ({ patientName, messages }) => {
  return (
    <CardContainer>
      <Header>{patientName}</Header>
      <ChatBox>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </ChatBox>
      <ButtonsContainer>
        <Button color="green">초록</Button>
        <Button color="yellow">노랑</Button>
        <Button color="red">빨강</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;
