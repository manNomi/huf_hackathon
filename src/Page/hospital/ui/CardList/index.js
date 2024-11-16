import React, { useEffect, useRef, useState } from "react";
import { CardListContainer } from "./style";
import Card from "../Card";
import { io } from "socket.io-client";

const CardList = () => {
  const data = [
    {
      patientName: "김환자",
      messages: ["환자위치 : 용산구 동작동", "상태 : 매우 나쁨"],
    },
    { patientName: "박환자", messages: ["기분이 어떠신가요?", "좋습니다."] },
  ];

  const [nickname, setNickname] = useState("");

  const socket = useRef(null);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // 소켓 초기화
    socket.current = io("http://43.202.84.174:7700/");

    // 연결 성공 이벤트
    socket.current.on("connect", () => {
      console.log("Socket connected:", socket.current.connected);
    });

    // 연결 끊김 이벤트
    socket.current.on("disconnect", () => {
      console.log("Socket disconnected:", socket.current.connected);
    });

    socket.current.emit("join room", { room: 1, nickname: "의사" });

    socket.current.on("join message", (message) => {
      setDatas((prev) => [...prev, message]);
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.current.disconnect();
    };
  }, []); // 빈 의존성 배열로 한 번만 실행

  const sendStatus = (patientName, message, status) => {
    console.log(patientName);
    console.log(status);
    socket.current.emit("join room", { room: patientName, nickname: "의사" });
    socket.current.emit("chat message", { message, room: patientName, status });
  };

  return (
    <CardListContainer>
      {datas.map((item, index) => (
        <Card
          key={index}
          patientName={item.room}
          message={item.message}
          sendStatus={sendStatus}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
