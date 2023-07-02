import styled from '@emotion/styled';

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 2px;

  font-size: 12px;
  line-height: 0;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;

  & input {
    appearance: unset;
  }
`;
