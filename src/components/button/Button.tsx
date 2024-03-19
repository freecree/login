import { ButtonType } from '../../constants';
import * as S from './buttonStyles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
}

function Button({
  children,
  className,
  type = ButtonType.Filled,
}: ButtonProps) {
  console.log('button');

  const buttonComponents = {
    [ButtonType.Outlined]: S.OutlinedButton,
    [ButtonType.Filled]: S.FilledButton,
  };
  const ButtonComponent = buttonComponents[type];

  return <ButtonComponent className={className}>{children}</ButtonComponent>;
}

export default Button;
