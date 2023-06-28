import { Form, Input, Label } from 'components/UI/Forms.styled';
import { Mail, Password } from 'components/UI/icons';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper flex ai="center">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" icon required />
          <Mail className="icon" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" icon required />
          <Password className="icon" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
    </Wrapper>
  );
};
