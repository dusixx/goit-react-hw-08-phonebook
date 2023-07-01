import styled from '@emotion/styled';
import { TextField } from 'components/TextField';
import { TransitionBase } from 'styles/shared';
import { ButtonPrimary } from 'styles/shared';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 90%;
  margin: 0 auto;

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

  ${TransitionBase('box-shadow border-color')};

  &:focus-within {
    box-shadow: 0 0 0 0.3rem rgb(var(--color-blue-rgb), 0.2);
    border-color: rgb(var(--color-blue-rgb), 0.7);
  }
`;

export const Button = styled(ButtonPrimary)`
  min-width: 100px;
  height: 35px;
`;
