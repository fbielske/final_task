import { styled, keyframes } from 'styled-components';
const spinAnimation = keyframes`  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  }`;
export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 9999;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLoader = styled.div`
  width: 60px;
  height: 60px;
  border: 8px dotted ${(props) => props.theme.palette.primary.main};
  border-top-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 50%;
  animation: ${spinAnimation} 0.75s infinite linear;
`;
