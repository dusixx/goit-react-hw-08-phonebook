import { useEffect, useRef, useState } from 'react';
import { useAuth } from 'redux/hooks';
import { ButtonBase } from 'styles/shared';
import { IconLogout, IconArrowDown } from 'styles/icons';
import {
  Avatar,
  UserMenu,
  Bar,
  Logout,
  MenuHeader,
  Name,
  Email,
  Text,
} from './UserBar.styled';

const LOGOUT_FAILED = 'Logout failed';

//
// UserBar
//

export const UserBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logoutAsync } = useAuth();
  const barRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = ({ target }) => {
      !barRef.current?.contains(target) && setShowMenu(false);
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, []);

  const handleLogoutClick = () => {
    logoutAsync().catch(LOGOUT_FAILED);
  };

  if (!user.name) return;

  return (
    <Bar ref={barRef}>
      <ButtonBase
        type="button"
        title={user.name}
        onClick={() => setShowMenu(cur => !cur)}
        style={{ gap: 0 }}
      >
        <Avatar>{user.name[0]}</Avatar>
        <IconArrowDown size={20} />
      </ButtonBase>

      {showMenu && (
        <UserMenu>
          <MenuHeader>
            <Avatar>{user.name[0]}</Avatar>
            <Text>
              <Name>{user.name}</Name>
              <Email>{user.email}</Email>
            </Text>
          </MenuHeader>

          <Logout onClick={handleLogoutClick}>
            <IconLogout size={15} /> Logout
          </Logout>
        </UserMenu>
      )}
    </Bar>
  );
};
