import { Avatar } from 'components/UI/Avatar/Avatar';
import { Button } from 'components/UI/Button.styles';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = ({ closeMenu }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  // const { isLoggedIn } = useAuth();
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  const handleLogout = () => {
    handleClick();
    dispatch(logOut());
  };

  return (
    <Wrapper flex gap="1em" ai="baseline">
      <Avatar text={user.name} />
      <p>{user.name}</p>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
