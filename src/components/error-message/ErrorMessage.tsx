import * as S from './styles';

interface ErrorMessageProps {
  children?: React.ReactNode;
  mt?: string;
  mb?: string;
}

function ErrorMessage({ children, mt, mb }: ErrorMessageProps) {
  return (
    <S.ErrorMessage $mt={mt} $mb={mb}>
      {children}
    </S.ErrorMessage>
  );
}

export default ErrorMessage;
