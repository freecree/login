import { ButtonType } from '../../constants';
import * as S from './buttonStyles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
}

function Button({
  children,
  className,
  type = ButtonType.Filled,
  disabled,
}: ButtonProps) {
  console.log('button');

  const buttonComponents = {
    [ButtonType.Outlined]: S.OutlinedButton,
    [ButtonType.Filled]: S.FilledButton,
  };
  const ButtonComponent = buttonComponents[type];

  return (
    <ButtonComponent disabled={disabled} className={className}>
      {children}
    </ButtonComponent>
  );
}

export default Button;
