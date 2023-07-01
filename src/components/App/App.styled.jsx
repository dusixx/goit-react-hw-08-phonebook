import styled from '@emotion/styled';
import { calcCSSValue } from 'utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin: 0 auto 0 auto;
  padding: 10px;
  padding-top: 20px;

  width: ${({ width }) => calcCSSValue(width) || '100%'};
  min-width: 250px;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
