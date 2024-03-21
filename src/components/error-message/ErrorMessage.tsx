import * as S from './errorMessageStyles';

interface InputErrorMessageProps {
  children: React.ReactNode;
  mt?: string;
  mb?: string;
}

function InputErrorMessage({ children, mt, mb }: InputErrorMessageProps) {
  return (
    <S.InputErrorMessage mt={mt} mb={mb}>
      {children}
    </S.InputErrorMessage>
  );
}

export default InputErrorMessage;
