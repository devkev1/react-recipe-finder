import styled from 'styled-components';

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  @media (max-width: 768px) {
   padding: 8px;
  }
`;

export const AppNameComponent = styled.div `
  display: flex;
  align-items: center;
`;

export const AppIcon = styled.img `
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SearchIcon = styled.img `
  width: 32px;
  height: 32px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 18px;
    width: 18px;
  }
`;

export const SearchComponent = styled.div `
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: fit-content;
  @media (max-width: 768px) {
    width: 160px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const SearchInput = styled.input `
  border: none;
  outline: none;
  width: 100%;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 12px;
  }
`;
