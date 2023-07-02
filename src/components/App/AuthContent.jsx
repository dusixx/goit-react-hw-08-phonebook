import React from 'react';
import { Navigate } from 'react-router-dom';
import { isStr } from 'utils';

export const AuthContent = ({ def = null, auth = null, token = null }) => {
  if (isStr(def)) def = <Navigate to={def} />;
  if (isStr(auth)) auth = <Navigate to={auth} />;

  return token ? auth : def;
};

// export const PrivateRoute = ({
//   path = null,
//   element: Element = null,
//   redirectTo = '/',
//   authorized = false,
//   ...restProps
// }) => (
//   <Route
//     path={path}
//     element={authorized ? <Navigate to={redirectTo} /> : Element}
//     {...restProps}
//   />
// );
