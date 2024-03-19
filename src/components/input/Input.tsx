import * as S from './inputStyles';

interface InputProps {
  placeholder?: string;
  type?: string;
}

function Input({ placeholder, type }: InputProps) {
  return <S.Input placeholder={placeholder} type={type} />;
}

export default Input;
