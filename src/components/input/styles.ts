import styled from 'styled-components';
import colors from '../../colors';

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  padding: 0 15px;
  font-weight: 400;
  font-family: 'Basis Grotesque PRO';
  font-size: 15px;
  color: ${colors.dark};
  &:hover,
  &:focus-visible {
    border: 1px solid ${colors.main};
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray_lg};
  }
`;
