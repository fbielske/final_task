import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(202, 202, 202, 0.8);
  z-index: 9999;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledMessage = styled.div`
  width: 400px;
  height: 250px;
  background-color: rgb(241, 241, 241);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.375em;
  box-shadow: 1px 1px 10px lightgrey;
  font-size: 14px;
  position: relative;
  text-align: center;

  i {
    color: rgb(72, 199, 142);
    font-size: 22px;
    margin: 15px;
    border: 2px dotted rgb(72, 199, 142);
    border-radius: 59px;
    padding: 5px 7px;
  }
`;

export const StyledInvisibleButton = styled.button`
  background: none;
  width: 25px;
  border-radius: 59px;
  padding: 3px 4px;
  border: 1.5px solid black;
  position: absolute;
  top: 8px;
  right: 8px;
`;
