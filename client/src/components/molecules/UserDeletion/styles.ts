import styled from 'styled-components';

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background: none;

  button {
    width: 25px;
    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 40px;

    span {
      background: none;

      i {
        background: none;
      }
    }
  }

  span {
    background: none;

    i {
      background: none;
      color: red;
    }
  }
`;

export const StyledModalButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;

  button {
    color: black;
    border: 1px solid lightgrey;
    width: 120px;

    &:hover {
      background-color: rgb(0, 209, 178);
      color: white;
    }
  }
`;
