import Logo from '../../assets/logo.svg';
import LoginWrapper from '../../components/login-wrapper/LoginWrapper';
import LoginTitle from '../../components/login-title/LoginTitle';
import Input from '../../components/input/Input';
import { useInput } from '../../hooks/useInput';
import Button from '../../components/button/Button';
import { ButtonVariant } from '../../constants';
import * as S from './styles';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const email = useInput('', 'Email', { isEmail: true, minLength: 15 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('in submit: ');
  };

  return (
    <LoginWrapper>
      <img src={Logo} />
      <LoginTitle>Forgot Password?</LoginTitle>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Input
          value={email.value}
          placeholder='Enter your email'
          type='email'
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        {email.isDirty && email.emailError && (
          <ErrorMessage mt='10px'>{email.emailError}</ErrorMessage>
        )}
        {email.isDirty && email.minLengthError && (
          <ErrorMessage mt='10px'>{email.minLengthError}</ErrorMessage>
        )}
        <S.ButtonsGroup>
          <Button disabled={!email.isInputValid}>Send</Button>
          <Link to={'/login/'}>
            <Button variant={ButtonVariant.Outlined}>Cancel</Button>
          </Link>
        </S.ButtonsGroup>
      </form>
    </LoginWrapper>
  );
}

export default ForgotPasswordPage;
