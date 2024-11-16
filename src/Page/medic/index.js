import { Container, HospitalCard, Aside, Main, PatientInfo } from "./style";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const MedicPage = () => {
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  useEffect(() => {
    // 소켓 초기화
    socket.current = io("http://43.202.84.174:7700/");

    // 특정 room에 참여
    const roomName = "김환자";
    socket.current.emit("join", roomName);
    console.log(`Joined room: ${roomName}`);

    // 연결 성공 이벤트
    socket.current.on("connect", () => {
      console.log("Socket connected:", socket.current.connected);
    });

    // 연결 끊김 이벤트
    socket.current.on("disconnect", () => {
      console.log("Socket disconnected:", socket.current.connected);
    });

    // 메시지 수신 이벤트 리스너 추가
    socket.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, { message }]);
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.current.disconnect();
    };
  }, []); // 빈 의존성 배열로 한 번만 실행

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <Main>
      <Aside>
        <p>응급 환자 상태 입력</p>
        <PatientInfo placeholder="환자 상태 입력" />
        <input type="submit" value={"전송"} />
      </Aside>

      <Container>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={0}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
      </Container>
    </Main>
  );
};

export default MedicPage;
