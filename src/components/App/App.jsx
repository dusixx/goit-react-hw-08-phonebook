import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { lazyImport } from 'utils';
import { useAuthRefresh } from 'hooks';

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
          element={token ? <Navigate to="contacts" /> : <LoginForm />}
        />
        <Route
          path="register"
          element={
            token ? <Navigate to="contacts" /> : <LoginForm signup={true} />
          }
        />
        <Route
          path="contacts"
          element={token ? <Contacts /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
