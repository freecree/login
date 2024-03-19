import * as S from './optionButtonsGroupStyles';
import GoogleIcon from '../../assets/icon_google.svg';
import GithubIcon from '../../assets/icon_github.svg';
import { ButtonType } from '../../constants';

function OptionButtonsGroup() {
  return (
    <S.OptionButtonsGroup>
      <S.OptionButton type={ButtonType.Outlined}>
        <img src={GoogleIcon} /> Google
      </S.OptionButton>
      <S.OptionButton type={ButtonType.Outlined}>
        <img src={GithubIcon} /> Github
      </S.OptionButton>
    </S.OptionButtonsGroup>
  );
}

export default OptionButtonsGroup;
