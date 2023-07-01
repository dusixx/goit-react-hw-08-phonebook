import { NavStyled, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => (
  <NavStyled>
    <StyledNavLink to="/">Log in</StyledNavLink>
    <StyledNavLink to="register">Sign up</StyledNavLink>
  </NavStyled>
);
