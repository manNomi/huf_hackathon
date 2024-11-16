import React from "react";
import { CardListContainer } from "./style";
import Card from "../Card/Card";

const CardList = () => {
  const data = [
    {
      patientName: "김환자",
      messages: ["안녕하세요.", "환자님 상태는 어떠세요?"],
    },
    { patientName: "박환자", messages: ["기분이 어떠신가요?", "좋습니다."] },
  ];
  return (
    <CardListContainer>
      {data.map((item, index) => (
        <Card
          key={index}
          patientName={item.patientName}
          messages={item.messages}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
