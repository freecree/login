import Logo from '../../assets/logo.svg';
import InputErrorMessage from '../../components/input-error-message/InputErrorMessage';
import LoginWrapper from '../../components/login-wrapper/LoginWrapper';
import * as S from './loginPageStyles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import LoginTitle from '../../components/login-title/LoginTitle';
import OptionButtonsGroup from '../../components/option-buttons-group/OptionButtonsGroup';
import { useInput } from '../../hooks/useInput';

function LoginPage() {
  const email = useInput('', { isEmail: true });
  const password = useInput('', { minLength: 8 });

  const isFormValid = () => {
    return email.isInputValid && password.isInputValid;
  };

  return (
    <LoginWrapper>
      <img src={Logo} />
      <LoginTitle>Log in to your account</LoginTitle>
      <OptionButtonsGroup />
      <S.Divider>OR</S.Divider>
      <S.InputsWrapper>
        <div>
          <Input
            value={email.value}
            placeholder='Work email'
            type='email'
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          {email.isDirty && email.emailError && (
            <InputErrorMessage>{email.emailError}</InputErrorMessage>
          )}
        </div>
        {email.isDirty && (
          <div>
            <Input
              value={password.value}
              placeholder='Password'
              type='password'
              onChange={password.onChange}
              onBlur={password.onBlur}
            />
            {password.isDirty && password.minLengthError && (
              <InputErrorMessage>{password.minLengthError}</InputErrorMessage>
            )}
            <S.ForgotPasswordLink>Forgot your password?</S.ForgotPasswordLink>
          </div>
        )}
      </S.InputsWrapper>
      <Button disabled={!isFormValid()}>Log in to Qencode</Button>
      <S.SignUpCaption>
        Is your company new to Qencode? <S.SignUpLink>Sign up</S.SignUpLink>
      </S.SignUpCaption>
    </LoginWrapper>
  );
}

export default LoginPage;
