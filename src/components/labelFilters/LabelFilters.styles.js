import styled from "styled-components";

export const LabelFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px;
  max-height: 40px;
  overflow-x: auto;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;
`;

export const LabelChip = styled.button`
  padding: 4px 8px;
  border: 1px solid ${(p) => p.color};
  background: ${(p) => (p.active ? p.color : "transparent")};
  color: ${(p) => (p.active ? "white" : p.color)};
  border-radius: 12px;
  font-size: 11px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ClearButton = styled.button`
  padding: 4px 8px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 11px;
  cursor: pointer;
`;
