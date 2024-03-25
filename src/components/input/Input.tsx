import * as S from './styles';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type?: string;
}

function Input({ onChange, onBlur, ...inputProps }: InputProps) {
  return <S.Input onChange={onChange} onBlur={onBlur} {...inputProps} />;
}

export default Input;
