import { Navigation, UserMenu, AuthNav } from 'components/index';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" bg="#bf4352" w="100%" p={4} color="white">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
