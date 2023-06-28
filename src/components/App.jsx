import { Route, Routes } from 'react-router-dom';
import { Layout, RestrictedRoute, PrivateRoute } from 'components/index';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login.js'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

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
          index
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
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
            <PrivateRoute redirectTo="/contacts" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
