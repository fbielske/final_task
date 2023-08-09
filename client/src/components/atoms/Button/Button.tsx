import { COLOR } from '../../../shared/theme/types';
import { StyledButton } from './styles';
import ICONS from '../../../assets/icons';

interface IButtonProps {
  text?: string;
  icon?: React.ReactNode;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  fullwidth?: boolean | undefined;
  outline?: boolean | undefined;
  color?: COLOR;
  disabled?: boolean;
}

const Button = ({
  text,
  icon,
  children,
  action,
  fullwidth,
  outline,
  color,
  disabled = false,
}: IButtonProps) => {
  return (
    <StyledButton
      onClick={action}
      fullwidth={fullwidth ? 1 : 0}
      outline={outline ? 1 : 0}
      color={color}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
      {children}
    </StyledButton>
  );
};

export default Button;
