import Logo from '../../../assets/logo.svg';
import GoogleIcon from '../../../assets/icon_google.svg';
import GithubIcon from '../../../assets/icon_github.svg';
import { Wrapper, Title, InputsWrapper } from '../loginStyles';
import {
  Divider,
  ForgotPasswordLink,
  OptionButton,
  OptionButtonsGroup,
  SignUpCaption,
  SignUpLink,
} from './loginPageStyles';
import { ButtonType } from '../../../constants';
import { Input } from '../../../components/input/inputStyles';
import Button from '../../../components/button/Button';

function LoginPage() {
  return (
    <Wrapper>
      <img src={Logo} />
      <Title>Log in to your account</Title>
      <OptionButtonsGroup>
        <OptionButton type={ButtonType.Outlined}>
          <img src={GoogleIcon} /> Google
        </OptionButton>
        <OptionButton type={ButtonType.Outlined}>
          <img src={GithubIcon} /> Github
        </OptionButton>
      </OptionButtonsGroup>
      <Divider>OR</Divider>
      <InputsWrapper>
        <Input placeholder='Work email' type='email' />
        <div>
          <Input placeholder='Password' type='password' />
          <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
        </div>
      </InputsWrapper>
      <Button>Log in to Qencode</Button>
      <SignUpCaption>
        Is your company new to Qencode? <SignUpLink>Sign up</SignUpLink>
      </SignUpCaption>
    </Wrapper>
  );
}

export default LoginPage;
