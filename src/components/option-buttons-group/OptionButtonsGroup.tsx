import * as S from './styles';
import GoogleIcon from '../../assets/icon_google.svg';
import GithubIcon from '../../assets/icon_github.svg';
import { ButtonVariant } from '../../constants';

function OptionButtonsGroup() {
  return (
    <S.OptionButtonsGroup>
      <S.OptionButton variant={ButtonVariant.Outlined}>
        <img src={GoogleIcon} /> Google
      </S.OptionButton>
      <S.OptionButton variant={ButtonVariant.Outlined}>
        <img src={GithubIcon} /> Github
      </S.OptionButton>
    </S.OptionButtonsGroup>
  );
}

export default OptionButtonsGroup;
