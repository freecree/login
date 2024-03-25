import { ButtonVariant } from '../../constants';
import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  className,
  type,
  variant = ButtonVariant.Filled,
  disabled,
  onClick,
}: ButtonProps) {
  const buttonComponents = {
    [ButtonVariant.Outlined]: S.OutlinedButton,
    [ButtonVariant.Filled]: S.FilledButton,
  };
  const ButtonComponent = buttonComponents[variant];

  return (
    <ButtonComponent
      onMouseDown={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </ButtonComponent>
  );
}

export default Button;
