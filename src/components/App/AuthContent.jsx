import { Navigate } from 'react-router-dom';
import { isStr } from 'utils';

export const AuthContent = ({ def = '/', auth, token }) => {
  if (isStr(def)) def = <Navigate to={def} />;
  if (isStr(auth)) auth = <Navigate to={auth} />;

  return token ? auth : def;
};
