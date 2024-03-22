import * as S from './loginWrapperStyles';

function LoginTitle({ children }: { children: React.ReactNode }) {
  return <S.LoginWrapper>{children}</S.LoginWrapper>;
}

export default LoginTitle;
