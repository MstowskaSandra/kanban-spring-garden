import styled from "styled-components";

export const LabelChip = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 500;
  margin: 2px 4px 2px 0;
  box-shadow: 2px 2px 4px #283b0a;
  line-height: 1.2;
  min-width: 24px;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  border: 2px solid;
  background-color: white;
  border-color: ${(props) => props.color || "#e0e0e0"};
  color: #333;

  &:hover {
    transform: scale(1.1);
  }
`;