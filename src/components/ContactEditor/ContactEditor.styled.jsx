import styled from '@emotion/styled';
import { ButtonPrimary } from 'styles/shared';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Button = styled(ButtonPrimary)`
  margin: 0 auto 0 auto;
  padding: 0;
  min-width: 80px;
  height: 35px;
`;
