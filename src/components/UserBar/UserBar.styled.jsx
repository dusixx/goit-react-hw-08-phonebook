import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';

export const Bar = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  ${FlexCentered()};

  width: 40px;
  height: 40px;

  font-size: 24px;
  color: white;
  text-transform: uppercase;

  background-color: var(--color-orange);
  border-radius: 50%;
`;

export const UserMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;

  position: absolute;
  top: 110%;
  right: 0;
  max-width: 500px;

  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-sec);
  color: var(--color-text);
  background-color: white;
`;

export const MenuItem = styled.li`
  padding: 10px 20px;
  overflow-x: hidden;
`;

export const Logout = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  cursor: pointer;
  &:last-child:hover {
    background-color: var(--color-accent-lighter);
  }
`;
