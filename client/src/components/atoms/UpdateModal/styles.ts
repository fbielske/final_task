import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(202, 202, 202, 0.8);
  z-index: 9999;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 0.375em;
`;
export const StyledMessage = styled.div`
  width: 100%;
  box-shadow: 1px 1px 5px lightgrey;
  background-color: initial;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: relative;
  text-align: center;
  border-radius: 0.375em;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    margin: 20px 20px 20px 0px;
  }
`;
