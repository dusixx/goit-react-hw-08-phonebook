import styled from '@emotion/styled';
import { TextField } from 'components/TextField';
import { ButtonPrimary } from 'styles/shared';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 90%;
  margin: 0 auto;
  padding: 15px 20px;

  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const FormTitle = styled.h2`
  letter-spacing: -0.1px;
`;

export const FormField = styled(TextField)`
  height: var(--field-height);
  padding-left: 40px;
`;

export const Button = styled(ButtonPrimary)`
  min-width: 100px;
  height: 35px;
`;
