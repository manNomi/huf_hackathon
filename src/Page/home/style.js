import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
  width: 100%;
`;
export const JobSelectBtn = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f1f0f0;
  border-radius: 8px;
  color: #333;
  font-size: 14px;
  &:hover {
    background-color: skyblue;
  }
  cursor: pointer;
`;
