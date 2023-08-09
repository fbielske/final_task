import { styled } from 'styled-components';
import { COLOR } from '../../../shared/theme/types';

interface IStyledButtonProps {
  fullwidth: number;
  outline: number;
  color?: COLOR;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  width: ${(props) => (props.fullwidth ? '100%' : '48%')};

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};
  border-radius: 0.375em;
  outline: none;
  padding: calc(0.5em - 1px) 1em;

  background-color: ${(props) =>
    props.outline
      ? props.theme.palette.light.main
      : props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};
  color: ${(props) =>
    props.outline && props.color
      ? props.theme.palette[props.color].main
      : props.outline
      ? props.theme.palette.dark.main
      : props.theme.palette.light.main};
  font-size: 1em;
  line-height: 1.5;

  cursor: pointer;

  &:hover {
    opacity: ${(props) => (props.outline ? 1 : 0.9)};
    transform: scale(1.02);
    transition: 0.5s;
  }
`;
