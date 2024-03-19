import styled from 'styled-components';
import colors from '../../colors';

export const Button = styled.button`
  font-family: 'Basis Grotesque PRO';
  font-weight: 500;
  height: 48px;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const OutlinedButton = styled(Button)`
  color: ${colors.dark};
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
`;

export const FilledButton = styled(Button)`
  color: ${colors.white};
  background-color: ${colors.main};
  border: none;
`;
