import styled from '@emotion/styled';
import { PageContainer } from 'styles/shared';

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const MainContainer = styled(PageContainer)`
  padding-bottom: 40px;
  padding-top: 90px;

  /* @media screen and (min-width: 320px) {
    padding-top: 130px;
  } */
`;

export const Main = styled.main`
  /* background: linear-gradient(180deg, #ebebeb 0, transparent); */
  margin: 0 auto 0 auto;
  max-width: 1350px;
  min-height: 100vh;
  /* background-color: whitesmoke; */
`;
