import Logo from '../../assets/logo.svg';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import LoginWrapper from '../../components/login-wrapper/LoginWrapper';
import * as S from './styles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import LoginTitle from '../../components/login-title/LoginTitle';
import OptionButtonsGroup from '../../components/option-buttons-group/OptionButtonsGroup';
import { useInput } from '../../hooks/useInput';
import { login } from '../../services/LoginService';
import { ErrorLoginResponse } from '../../models/response/LoginResponse';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginPage() {
  const email = useInput('', 'Email', { isEmail: true, minLength: 15 });
  const password = useInput('', 'Password', { minLength: 8 });
  const [serverError, setServerError] = useState('');

  const isFormValid = () => {
    return email.isInputValid && password.isInputValid;
  };

  const handleSubmit = async () => {
    setServerError('');
    try {
      const response = await login(email.value, password.value);
      console.log('response: ', response.data);
      alert('Successful login');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const errorResponse = e as AxiosError<ErrorLoginResponse>;
        // console.log('error: ', errorResponse.response);
        if (errorResponse.response) {
          if (errorResponse.response.status == 401) {
            // console.log(
            //   'Error 401 (response.data.detail): ',
            //   errorResponse.response.data.detail,
            // );
            setServerError('Invalid user');
          } else if (errorResponse.response.status == 422) {
            // console.log(
            //   'Error 422 (response.data.detail): ',
            //   errorResponse.response.data.detail,
            // );
            setServerError('Validation Error');
          }
        } else {
          console.log('Network Error:', errorResponse.message);
          setServerError('Network error');
        }
      } else {
        console.log('Non-Axios Error:', e);
        setServerError('Oops, something went wrong');
      }
    }
  };

  return (
    <LoginWrapper>
      <img src={Logo} />
      <LoginTitle>Log in to your account</LoginTitle>
      <form style={{ width: '100%' }}>
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
            {email.value && email.emailError && (
              <ErrorMessage mt='10px'>{email.emailError}</ErrorMessage>
            )}
            {email.value && email.minLengthError && (
              <ErrorMessage mt='10px'>{email.minLengthError}</ErrorMessage>
            )}
          </div>
          {(email.isDirty || email.value) && (
            <div>
              <Input
                value={password.value}
                placeholder='Password'
                type='password'
                onChange={password.onChange}
                onBlur={password.onBlur}
              />
              {password.isDirty && password.minLengthError && (
                <ErrorMessage mt='10px'>{password.minLengthError}</ErrorMessage>
              )}
              <S.ForgotPasswordLink to='/login/forgot-password/'>
                Forgot your password?
              </S.ForgotPasswordLink>
            </div>
          )}
        </S.InputsWrapper>
        {serverError && <ErrorMessage mb='10px'>{serverError}</ErrorMessage>}
        <Button onClick={handleSubmit} disabled={!isFormValid()}>
          Log in to Qencode
        </Button>
        <S.SignUpCaption>
          Is your company new to Qencode? <S.SignUpLink>Sign up</S.SignUpLink>
        </S.SignUpCaption>
      </form>
    </LoginWrapper>
  );
}

export default LoginPage;
