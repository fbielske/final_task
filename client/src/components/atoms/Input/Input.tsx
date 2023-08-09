import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  icon?: string;
  placeholder?: string;
  name?: string;
  color?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  value,
  name,
  icon,
  placeholder,
  color,
  onChange,
}: IInputProps) => {
  const theme = useTheme();

  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (!inputWrapperRef.current?.contains(e.target)) {
        inputWrapperRef.current!.style.boxShadow = 'none';
        inputWrapperRef.current!.style.borderColor =
          theme!.palette.default.dark;
        iconRef.current!.style.color = theme!.palette.default.dark;
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current!.style.boxShadow = `0px 0px 1px 1px ${
      color ? theme!.palette[color].light : theme!.palette.primary.main
    }`;

    inputWrapperRef.current!.style.borderColor = color
      ? theme!.palette[color].dark
      : theme!.palette.default.dark;
    inputRef.current!.focus();
    iconRef.current!.style.color = theme!.palette.dark.main;
  };

  return (
    <StyledInputWrapper ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      <StyledInput
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
      />
    </StyledInputWrapper>
  );
};

export default Input;
