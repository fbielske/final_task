import styled from 'styled-components';

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background: none;
  border-radius: 0.375em;
  button {
    width: 15px;
    background: none;
    border: none;
  }
  span {
    background: none;

    i {
      background: none;
      color: grey;
    }
  }
`;

export const StyledModalContainer = styled.div`
  display: flex;
  height: 400px;
  margin: 20px;
  border-radius: 0.375em;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    border-radius: 0.375em;
    margin: 40px 0px;
  }
  input {
    width: 350px;
  }

  button {
    color: black;
    border: 1px solid lightgrey;
    width: 100px;

    &:hover {
      background-color: rgb(0, 209, 178);
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    height: initial;
    flex-direction: row;
    gap: 10px;

    button {
      width: 100px;
    }

    form {
      flex-direction: row;
      margin: 40px 0px 40px 0px;
    }
    input {
      width: initial;
    }
  }
`;
export const StyledButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;
