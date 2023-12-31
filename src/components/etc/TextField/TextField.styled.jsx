import styled from '@emotion/styled';
import { ButtonBase, FlexCentered, TransitionBase } from 'styles/shared';

export const Field = styled.label`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  height: ${({ height }) => height || '100%'};
  color: var(--color-text);
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;

  padding: 0;
  padding-right: ${({ paddingRight }) => paddingRight || '30px'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '35px'};

  font-family: inherit;
  font-size: inherit;
  background-color: white;

  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  outline: none;

  ${TransitionBase('box-shadow border-color ackground-colo')};

  &::placeholder {
    opacity: 0.5;
    text-transform: capitalize;
  }

  &:focus-visible {
    background-color: var(--color-accent-lighter);
    box-shadow: 0 0 0 0.25rem rgb(var(--color-blue-rgb), 0.2);
    border-color: rgb(var(--color-blue-rgb), 0.6);
  }
`;

export const ClearBtn = styled(ButtonBase)`
  position: absolute;
  top: 50%;
  right: 5px;

  height: 80%;
  padding: 3px;

  color: gray;
  transform: translateY(-50%);
  transition-property: color;

  &:focus-visible,
  &:hover {
    color: var(--color-black);
  }
`;

export const IconWrapper = styled.span`
  ${FlexCentered()};

  position: absolute;
  top: 50%;
  left: 10px;
  height: 60%;

  color: currentColor;
  transform: translateY(-50%);
`;
