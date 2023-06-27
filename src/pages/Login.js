import { LoginForm } from 'components/index';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
