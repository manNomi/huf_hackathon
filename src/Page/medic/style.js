import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  position: relative;
`;

export const HospitalCard = styled.div`
  flex: 1;
  margin: 40px 0 16px 0;
  padding: 10px;
  background-color: #f1f0f0;
  border-radius: 8px;
  overflow-y: auto;
  color: #333;
  font-size: 14px;
`;