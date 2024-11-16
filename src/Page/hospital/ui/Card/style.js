import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 12px;
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
  background-color: white;
  width: 88%;
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
  margin-left: 8px;
  border-radius: 8px;
`;

export const ChatBox = styled.div`
  flex: 1;
  margin: 40px 0 16px 0;
  padding: 10px;
  background-color: white;
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
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ color, theme }) =>
    color === "green"
      ? theme.green
      : color === "yellow"
      ? "yellow"
      : color === "red"
      ? theme.red
      : "#f1f0f0"};

  &:hover {
    opacity: 0.8;
  }
`;
