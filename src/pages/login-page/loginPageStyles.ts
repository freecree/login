import styled from 'styled-components';
import Button from '../../components/button/Button';
import colors from '../../colors';

export const OptionButtonsGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const OptionButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: calc(50% - 8px);
  border-radius: 6px;
`;

export const Divider = styled.div`
  color: ${colors.gray_md};
  font-weight: 500;
  font-size: 12px;
  margin: 30px 0;
  position: relative;
  width: 100%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: calc(50% - 14px);
    height: 1px;
    background-color: ${colors.gray_sm};
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 30px;
`;

export const ForgotPasswordLink = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  color: ${colors.main};
  text-align: right;
`;

export const SignUpCaption = styled.div`
  color: ${colors.dark};
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
`;

export const SignUpLink = styled.span`
  font-weight: 500;
  color: ${colors.main};
`;
