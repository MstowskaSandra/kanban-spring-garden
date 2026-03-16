import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 3px solid #283b0a;
  border-radius: 12px;
  background: #c0ff72;

  overflow: hidden;

`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #ecffc7;
  border-bottom: 3px solid #5e891b;
  gap: 0.5rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #283b0a;

    @media (max-width: 567px) {
      font-size: 1.5rem;
    }

    @media (min-width: 568px) and (max-width: 767px) {
      font-size: 2rem;
    }
  }

  img {
    width: 4rem;

    @media (max-width: 567px) {
      width: 2.5rem;
    }

    @media (max-width: 767px) {
      width: 3rem;
    }
  }

  @media (max-width: 567px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;

  @media (max-width: 567px) {
    padding: 0 1rem;
  }
`;

export const ToolbarBtn = styled.button`
  border-radius: 16px;
  width: 4rem;
  height: 2.5rem;
  box-shadow: 2px 2px 4px #283b0a;

  img {
    width: 1.25rem;
  }
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: thin;
  scrollbar-color: #5e891b transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5e891b;
    border-radius: 4px;
  }
`;

export const BoardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  min-width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;

export const ColumnsRow = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
`;

export const ColumnHeader = styled.div`
  flex: 0 0 280px;
  padding: 0.5rem;
  background: #f1f6e8;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #283b0a;
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
  color: #283b0a;
  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  span {
    font-size: 0.85rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;