import styled from 'styled-components';

export const InputErrorMessage = styled.p<{ mt?: string; mb?: string }>`
  color: red;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;
