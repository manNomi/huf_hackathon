import { Container, HospitalCard, Aside, Main, PatientInfo } from "./style";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const MedicPage = () => {
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
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

    socket.current.on("message", (message) => {
      setMessages((prevMessages) => {
        const exists = prevMessages.find(
          (prev) => prev.message.hospitalName === message.hospitalName
        );

        if (exists) {
          // hospitalName이 같고, status가 다른 경우 메시지 업데이트
          return prevMessages.map((prev) =>
            prev.message.hospitalName === message.hospitalName
              ? prev.message.status !== message.status
                ? { ...prev, message }
                : prev // status가 같으면 기존 메시지 유지
              : prev
          );
        } else {
          // hospitalName이 다르면 메시지 추가
          return [...prevMessages, { message }];
        }
      });
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.current.disconnect();
    };
  }, []); // 빈 의존성 배열로 한 번만 실행

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const joinRoom = (roomName) => {
    // 특정 room에 참여
    socket.current.emit("join room", { room: roomName });
    console.log(`Joined room: ${roomName}`);
  };

  const nameRef = useRef(null);

  return (
    <Main>
      <Aside>
        <p>응급 환자 상태 입력</p>
        <PatientInfo placeholder="환자 상태 입력" ref={nameRef} />
        <PatientInfo placeholder="환자 이름 입력" />
        <input
          type="submit"
          value={"전송"}
          onClick={() => {
            if (nameRef.current) {
              joinRoom(nameRef.current.value);
            }
          }}
        />
      </Aside>
      <Container>
        {messages.map((value) => (
          <HospitalCard hospital={value.status}>{value.hospital}</HospitalCard>
        ))}
      </Container>
    </Main>
  );
};

export default MedicPage;
