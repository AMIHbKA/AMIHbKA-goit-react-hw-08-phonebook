import { LinkStyled } from 'components/UI/Links';
import { Text } from 'components/UI/Paragraphs';
import { Title } from 'components/UI/Title.styles';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  const getContent = () => {
    if (!isLoggedIn) {
      return (
        <>
          <Text>
            You can see{' '}
            <LinkStyled to="/example">how our application works</LinkStyled> or{' '}
            <LinkStyled to="/login">sign in </LinkStyled> to your account to
            synchronize your contacts.
          </Text>
          <Text>
            If you still do not have an account, please{' '}
            <LinkStyled to="/register">register</LinkStyled>.
          </Text>
        </>
      );
    }
  };

  const content = getContent();
  return (
    <>
      <Title left>
        Welcome to our introductory app for storing your contacts
      </Title>
      {content}
    </>
  );
};

export default HomePage;
