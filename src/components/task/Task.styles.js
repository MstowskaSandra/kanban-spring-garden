import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: small;
  width: 80%;
  margin-bottom: 0.5rem;
  background-color: ${({ typeColor }) => typeColor || "#fff475"};
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 6px 12px rgba(0, 0, 0, 0.15);
  transform: rotate(${() => Math.random() * 4 - 2}deg);
  font-family: "Comic Sans MS", cursive, sans-serif;
  position: relative;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: #d62828;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: rotate(-1deg) scale(1.02);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 10px 18px rgba(0, 0, 0, 0.15);
  }
`;

export const TaskContent = styled.div`
  position: relative;
  width: 100%;
`;

export const TaskName = styled.p`
  margin-bottom: 0.25rem;
`;

export const TaskUser = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #283b0a;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding-top: 1rem;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

  img {
    margin: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.25rem;
  background: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  button {
    border: 2px solid transparent;
    background: transparent;
    padding: 0.125rem;
    border-radius: 6px;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
    }
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

