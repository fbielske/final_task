import { styled } from 'styled-components';

export const StyledTableWrapper = styled.div`
  color: #676c7e;
  width: 90%;
  max-width: 1097px;
  overflow-x: auto;
  margin: 50px auto;
  background-color: white;
  padding-bottom: 24px;
  border-radius: 0.375em;
  box-shadow: 1px 1px 10px lightgrey;
  p {
    background-color: white;
  }
`;

export const StyledTable = styled.div`
  overflow-x: auto;
`;
export const StyledHeadline = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 95%;
  margin: 0 auto;
  font-size: 22px;
  padding: 44px 0 24px 0;
  color: black;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 1097px;
    font-size: 24px;
  }
`;

export const StyledTableTitles = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1.1fr 1.35fr;
  align-items: center;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  max-width: 1097px;
  padding: 17px 0 24px 0;
  border-bottom: 1.5px solid rgb(48, 48, 48);

  & > *:first-child {
    display: none;
    text-align: center;
  }

  & > *:nth-child(2) {
    width: 100px;
    text-align: left;
    margin-left: 20px;
  }
  & > *:nth-child(3) {
    width: 175px;
    text-align: left;
  }
  & > *:nth-child(4) {
    width: 350px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 1.1fr 1.1fr 1.35fr;

    & > *:first-child {
      display: inline;
      width: calc(87.5% / 3);
      text-align: left;
      padding: 0 17px 0 24px;
    }

    & > *:not(:first-child) {
      text-align: center;
      width: calc(87.5% / 3);
      white-space: nowrap;
      margin: 0;
    }
    & > *:last-child {
      text-align: left;
      width: calc(87.5% / 3);
      white-space: nowrap;
    }

    @media screen and (min-width: 1028px) {
      grid-template-columns: 1.1fr 1.1fr 1.22fr 1.35fr;

      & > *:first-child {
        width: calc(87.5% / 7);
        text-align: left;
      }
      & > *:not(:first-child) {
        width: calc(87.5% / 3);
        text-align: center;
      }
      & > *:last-child {
        text-align: left;
        width: calc(100% / 8);
      }
    }
  }
  h3 {
    font-weight: 500;
    font-size: 12px;
    color: grey;
    background-color: white;
  }
`;

export const StyledTableItem = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.375em;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 35px 17px 35px 24px;
  font-size: 14px;
  max-width: 1097px;
  height: 49px;
  color: black;

  &:nth-child(even) {
    background-color: #f2f2f2;

    p {
      background-color: #f2f2f2;
    }
  }
  & > *:first-child {
    display: none;
  }

  & > *:nth-child(2) {
    width: 120px;
    text-align: left;
  }
  & > *:nth-child(3) {
    width: 250px;
    text-align: left;
  }
  & > *:nth-child(4) {
    width: 140px;
    text-align: left;
  }
  & > *:last-child {
    text-align: right;
    width: 50px;
  }

  @media screen and (min-width: 768px) {
    & > *:first-child {
      display: inline;
      width: calc(87.5% / 6);
      text-align: left;
    }
    & > *:not(:first-child) {
      width: calc(87.5% / 3);
      text-align: center;
    }
    & > *:last-child {
      text-align: left;
      width: calc(100% / 8);
    }
  }
`;
export const Editable = styled.div``;
export const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledPagenation = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  margin-top: 20px;

  & > *:first-child,
  & > *:last-child {
    border-bottom: none;
  }

  button {
    background: none;
    color: black;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 15px;
    border-radius: 0px;
    font-size: 14px;
    margin: 8px 10px 8px 8px;
    border-width: 2px;
    padding: 0;

    &:hover {
      background-color: lightgray;
      border: none;
      border-radius: 0.375em;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 0 10px 0;

  & > *:last-child {
    width: 35%;
    height: 38px;
    font-size: 14px;
    font-weight: 500;
  }
  & > *:first-child {
    width: 47%;
    height: 38px;
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    width: 65%;

    & > *:last-child {
      width: 40%;
      height: 40px;
      font-size: 14px;
      font-weight: 500;
      max-width: 150px;
    }
    & > *:first-child {
      width: 50%;

      height: 40px;
      font-size: 14px;
      font-weight: 500;
      margin-right: 0px;
    }
  }
`;
