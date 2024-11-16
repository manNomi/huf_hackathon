import styled from "styled-components";

export const CardContainer = styled.div`
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

export const Header = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ChatBox = styled.div`
  flex: 1;
  margin: 40px 0 16px 0;
  padding: 10px;
  background-color: #f1f0f0;
  border-radius: 8px;
  overflow-y: auto;
  color: #333;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => props.color};

  &:hover {
    opacity: 0.8;
  }
`;
