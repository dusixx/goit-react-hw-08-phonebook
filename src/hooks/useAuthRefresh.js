import { useEffect } from 'react';
import { useAuth } from 'redux/hooks';

export const useAuthRefresh = () => {
  const { refresh, token } = useAuth();

  useEffect(() => void refresh(), [refresh]);

  return { token };
};
