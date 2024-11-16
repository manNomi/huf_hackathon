import React, { useEffect, useRef, useState } from "react";
import { CardListContainer } from "./style";
import Card from "../Card";
import { io } from "socket.io-client";
import { getCookie } from "../../../../shared/lib/cookies";
import useDistance from "../../../../shared/api/useDistance";

const CardList = () => {
  const socket = useRef(null);

  const hp = getCookie("hp");
  const lat = getCookie("lat");
  const lon = getCookie("lon");

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // 소켓 초기화
    socket.current = io(process.env.REACT_APP_SOCKET);

    // 연결 성공 이벤트
    socket.current.on("connect", () => {
      console.log("Socket connected:", socket.current.connected);
    });

    // 연결 끊김 이벤트
    socket.current.on("disconnect", () => {
      console.log("Socket disconnected:", socket.current.connected);
    });

    socket.current.emit("join room", { room: 1, nickname: "의사" });

    socket.current.on("message", (message) => {
      console.log("Received message:", message);
      if (typeof message.status !== "number") {
        setDatas((prev) => [...prev, message]);
      } else {
        console.log("Filtered out message with numeric status:", message);
      }
    });
    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.current.disconnect();
    };
  }, []); // 빈 의존성 배열로 한 번만 실행

  const [time, loading] = useDistance(lon, lat);
  const ex = loading ? "잠시만" : time;
  const sendStatus = (patientName, hospitalName, status) => {
    socket.current.emit("room", { room: patientName, nickname: "의사" });
    socket.current.emit("chat message", {
      message: hospitalName,
      room: patientName,
      status,
      name: patientName,
      time: ex,
    });
  };

  return (
    <CardListContainer>
      {datas.map((item) => (
        <Card
          patientName={item.status}
          message={item.message}
          sendStatus={sendStatus}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
