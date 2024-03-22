import styled from 'styled-components';
import Button from '../button/Button';

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
