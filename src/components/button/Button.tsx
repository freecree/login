import { ButtonType } from '../../constants';
import * as S from './buttonStyles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  className,
  type = ButtonType.Filled,
  disabled,
  onClick,
}: ButtonProps) {
  const buttonComponents = {
    [ButtonType.Outlined]: S.OutlinedButton,
    [ButtonType.Filled]: S.FilledButton,
  };
  const ButtonComponent = buttonComponents[type];

  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonComponent>
  );
}

export default Button;
