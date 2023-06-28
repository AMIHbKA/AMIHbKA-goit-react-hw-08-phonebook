import { Form, Input, Label } from 'components/UI/Forms.styled';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Mail, Password, Profile } from 'components/UI/icons';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper flex ai="center">
      <Form onSubmit={handleSubmit}>
        <Label>
          Username
          <Input type="text" name="name" icon required />
          <Profile className="icon" />
        </Label>
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
        <button type="submit">Register</button>
      </Form>
    </Wrapper>
  );
};
