import { StyledHeader } from './Header.styled';
import { useHideOnScrollDown } from 'hooks/useHideOnScrollDown';
import { HeaderContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserBar } from 'components/SharedLayout/UserBar/UserBar';
import { useAuth } from 'redux/hooks';

export const Header = ({ children }) => {
  const [visible, onTop] = useHideOnScrollDown(true);
  const { token } = useAuth();

  return (
    <StyledHeader visible={onTop || visible}>
      <HeaderContainer>
        <Logo />
        {token ? <UserBar /> : <AuthNav />}
      </HeaderContainer>
    </StyledHeader>
  );
};
