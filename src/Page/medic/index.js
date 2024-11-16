import {
  Container,
  HospitalCard,
  Aside,
  Main,
  PatientInfo,
  Text,
} from "./style";
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
        // 이전 메시지가 존재하고, 이름(name)이 다른 경우 메시지 초기화
        if (
          prevMessages.length > 0 &&
          prevMessages[0]?.message?.name !== message?.name
        ) {
          return [{ message }]; // 데이터 초기화 후 새로운 메시지 추가
        }

        // 동일한 hospitalName을 가진 메시지가 있는지 확인
        const exists = prevMessages.find(
          (prev) => prev.message?.hospitalName === message?.hospitalName
        );

        if (exists) {
          // 동일한 hospitalName이 있고 status가 다를 경우 메시지 업데이트
          return prevMessages.map((prev) =>
            prev.message.hospitalName === message.hospitalName
              ? prev.message.status !== message.status
                ? { ...prev, message }
                : prev // status가 같으면 기존 메시지 유지
              : prev
          );
        } else {
          // 동일한 hospitalName이 없는 경우 새로운 메시지 추가
          return [...prevMessages, { message }];
        }
      });
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.current.disconnect();
    };
  }, []); // 빈 의존성 배열로 한 번만 실행

  const joinRoom = (roomName, message) => {
    // 특정 room에 참여
    setMessages([]);
    socket.current.emit("chat message", {
      message,
      room: 1,
      status: roomName,
      name: roomName,
    });
    socket.current.emit("room", { room: roomName, nickname: "환자" });
  };

  const nameRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}시간 ${remainingMinutes}분`;
  };

  return (
    <Main>
      <Aside>
        <p>응급 환자 상태 입력</p>
        <PatientInfo placeholder="환자 상태 입력" ref={nameRef} />
        <PatientInfo placeholder="환자 이름 입력" ref={messageRef} />
        <input
          type="submit"
          value={"전송"}
          onClick={() => {
            if (nameRef.current) {
              joinRoom(nameRef.current.value, messageRef.current.value);
            }
          }}
        />
      </Aside>
      <Container>
        {messages.map((value) => (
          <HospitalCard hospital={value.message.status}>
            <Text>{value.message.message}</Text>
            <Text>
              {"걸리는 시간 : " + convertMinutesToTime(value.message.time.data)}
            </Text>
          </HospitalCard>
        ))}
      </Container>
    </Main>
  );
};

export default MedicPage;
