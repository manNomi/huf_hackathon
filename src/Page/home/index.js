import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnContainer, JobSelectBtn, Main } from "./style";
import { setCookie, deleteAllCookies } from "../../shared/lib/cookies";

const HomePage = () => {
  const navigate = useNavigate();
  const hpRef = React.useRef("");
  deleteAllCookies();
  return (
    <Main>
      <h1>서비스 이름</h1>
      <h3>직업을 선택</h3>
      <input type="text" placeholder="전화번호 입력" ref={hpRef} />
      <BtnContainer>
        
        <JobSelectBtn
          type="button"
          onClick={() => {
            setCookie("hp", hpRef.current.value, { path: "/" });
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
