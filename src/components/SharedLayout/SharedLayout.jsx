import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { Main, MainContainer } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <Header />

    <Main>
      <section>
        <MainContainer>
          <Suspense fallback={<LoaderBar />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </section>
    </Main>
  </>
);
