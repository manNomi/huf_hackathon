import React from "react";
import { CardListContainer } from "./style";
import Card from "../Card/Card";

const CardList = () => {
  const data = [
    {
      patientName: "김환자",
      messages: ["환자위치 : 용산구 동작동", "상태 : 매우 나쁨"],
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
