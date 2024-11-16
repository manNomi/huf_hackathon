import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnContainer, JobSelectBtn, Main } from "./style";
import { setCookie, deleteAllCookies } from "../../shared/lib/cookies";
import useDistance from "../../shared/api/useDistance";

const HomePage = () => {
  const navigate = useNavigate();
  const hpRef = React.useRef("");
  const lonRef = React.useRef(0);
  const latRef = React.useRef(0);
  const hospitalRef = React.useRef("");
  
  deleteAllCookies();

  return (
    <Main>
      <h1>구급차 신호등</h1>
      <h3>직업을 선택</h3>
      <input type="text" placeholder="전화번호 입력" ref={hpRef} />

      <h3>병원의 경우 위도/경도를 입력해주세요</h3>
      <input type="text" placeholder="병원 이름" ref={hospitalRef}/>
      <input type="text" placeholder="longtitude" ref={lonRef} />
      <input type="text" placeholder="latitude" ref={latRef} />
      <BtnContainer>
        
        <JobSelectBtn
          type="button"
          onClick={() => {
            setCookie("hp", hpRef.current.value, { path: "/" });
            setCookie("lon", lonRef.current.value, { path: "/" });
            setCookie("lat", latRef.current.value, { path: "/" });
            setCookie("hospital", hospitalRef.current.value, { path: "/" });
            navigate("/hospital");
          }}
        >
          의사
        </JobSelectBtn>
        <JobSelectBtn
          type="button"
          onClick={() => {
            setCookie("hp", hpRef.current.value, { path: "/" });
            navigate("/medic");
          }}
        >
          구급요원
        </JobSelectBtn>
      </BtnContainer>
    </Main>
  );
};

export default HomePage;
