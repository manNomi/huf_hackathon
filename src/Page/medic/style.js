import styled from "styled-components";

export const PatientInfo = styled.input`
  outline: none;
  border: 1px solid black;
  width: 180px;
  height: 420px;
  opacity: 0.7;
  border-radius: 8px;
  border: none;
`;

export const Main = styled.main`
  padding: 60px 0 0 260px;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.gray};
  gap: 36px;
  top: 16px;
  bottom: 16px;
  left: 16px;
  width: 200px;
  border-radius: 16px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  position: relative;
`;

export const HospitalCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f1f0f0;
  border-radius: 8px;
  overflow-y: auto;
  color: #333;
  font-size: 14px;
  background-color: ${({ hospital, theme }) =>
    hospital === 1
      ? theme.green
      : hospital === 2
      ? "yellow"
      : hospital === 3
      ? theme.red
      : "#f1f0f0"};

  &:hover {
    background-color: skyblue;
  }
  cursor: pointer;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p`
  padding: 10px;
  font-size: 30px;
  font-weight: 600;
`;

export const Submit = styled.input`
  background-color: white;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
