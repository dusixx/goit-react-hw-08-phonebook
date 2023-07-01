import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from 'redux/hooks';
import { ButtonBase } from 'styles/shared';
import { IconLogout, IconArrowDown } from 'styles/icons';
import {
  Avatar,
  UserMenu,
  Bar,
  MenuItem,
  Name,
  Email,
  Logout,
} from './UserBar.styled';

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
    logoutAsync()
      .then(/* () => toast.success(`See you, ${user.name}`) */)
      .catch(`Logout failed`);
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
          <MenuItem>{user.name}</MenuItem>
          <MenuItem>{user.email}</MenuItem>

          <Logout onClick={handleLogoutClick}>
            <IconLogout size={20} /> Logout
          </Logout>
        </UserMenu>
      )}
    </Bar>
  );
};
