import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { lazyImport } from 'utils';
import { useAuthRefresh } from 'hooks';
import { AuthContent } from './AuthContent';

const Contacts = lazyImport('pages/Contacts');
const LoginForm = lazyImport('components/LoginForm/LoginForm.jsx');

//
// App
//

export const App = ({ loader = <LoaderBar /> }) => {
  const { token } = useAuthRefresh();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <AuthContent def={<LoginForm />} auth="contacts" token={token} />
          }
        />
        <Route
          path="register"
          element={
            <AuthContent
              def={<LoginForm signup={true} />}
              auth="contacts"
              token={token}
            />
          }
        />
        <Route
          path="contacts"
          element={<AuthContent def="/" auth={<Contacts />} token={token} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
