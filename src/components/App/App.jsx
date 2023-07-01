import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';
import { lazyImport } from 'utils';
import { useAuth } from 'redux/hooks';
import { useEffect } from 'react';

const Home = lazyImport('pages/Home');
const Register = lazyImport('pages/Register');
const Contacts = lazyImport('pages/Contacts');

//
// App
//

export const App = ({ loader = <LoaderBar /> }) => {
  const { refresh, token } = useAuth();

  useEffect(() => void refresh(), [refresh]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            token ? <Navigate to="contacts" /> : <Home loader={loader} />
          }
        />
        <Route
          path="register"
          element={
            token ? <Navigate to="contacts" /> : <Register loader={loader} />
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
