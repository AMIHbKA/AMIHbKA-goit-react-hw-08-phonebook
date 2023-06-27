import { Route, Routes } from 'react-router-dom';
import { Layout, RestrictedRoute, PrivateRoute } from 'components/index';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Login } from 'pages/Login';

const RegisterPage = lazy(() => import('../pages/Register.js'));
// const LoginPage = lazy(() => import('../pages/Login.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>HomePage</div>} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/contacts"
              component={<div>Contacts</div>}
            />
          }
        />
      </Route>
    </Routes>
  );
};
