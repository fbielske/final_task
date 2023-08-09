import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(202, 202, 202, 0.7);
  z-index: 9999;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledUserForm = styled.div`
  width: 400px;
  height: 500px;
  background-color: rgb(241, 241, 241);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.375em;
  box-shadow: 1px 1px 10px lightgrey;
  font-size: 14px;
  padding: 0 10px;
  position: relative;
`;

export const StyledInputsDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  border-radius: 0.375em;

  h3 {
    margin-bottom: 40px;
    color: black;
    opacity: 0.7;
    font-weight: 500;
    padding: 0 10px;
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
  cursor: pointer;
`;
