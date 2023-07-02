import styled from '@emotion/styled';
import { FlexCentered, TransitionBase } from 'styles/shared';

export const Bar = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  ${FlexCentered()};

  width: 40px;
  height: 40px;

  font-size: 24px;
  font-family: Verdana;
  line-height: 0;
  color: white;
  text-transform: uppercase;

  background-color: var(--color-orange);
  border-radius: 50%;
`;

export const UserMenu = styled.ul`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 110%;
  right: 0;
  max-width: 500px;

  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-sec);
  color: var(--color-text);
  background-color: white;
  overflow: hidden;
`;

export const MenuItem = styled.li`
  padding: 15px 20px;
  letter-spacing: -0.2px;
  overflow-x: hidden;
`;

export const MenuHeader = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Email = styled.p`
  opacity: 0.7;
  font-size: 11px;
`;

export const Text = styled.div`
  line-height: 1.2;
`;

export const Logout = styled(MenuItem)`
  ${TransitionBase('color')};

  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;

  font-weight: bold;
  font-size: 14px;

  background-color: var(--color-accent-lighter);
  cursor: pointer;

  &:last-child:hover {
    color: var(--color-blue);
  }
`;
