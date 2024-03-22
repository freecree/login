import * as S from './inputStyles';

interface InputProps {
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

function Input({ value, placeholder, type, onChange, onBlur }: InputProps) {
  return (
    <S.Input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default Input;
