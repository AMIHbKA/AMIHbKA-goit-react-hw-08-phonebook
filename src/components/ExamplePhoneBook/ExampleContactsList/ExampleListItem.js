import PropTypes from 'prop-types';
import { Delete } from '../../UI/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteExampleContact,
  selectExampleContactById,
} from 'redux/example/slice';
import { Avatar } from 'components/UI/Avatar/Avatar';
import { ButtonIcon } from 'components/UI/Button.styles';

export const ExampleListItem = ({ id }) => {
  const contact = useSelector(state => selectExampleContactById(state, id));
  const { name, number } = contact;
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.example.isLoading);

  const onDelete = () => {
    dispatch(deleteExampleContact(contact.id));
  };

  return (
    <li>
      <Avatar text={name} />
      <span>{name}</span>
      <a href={`tel:${number}`}>{number}</a>
      <ButtonIcon
        type="button"
        onClick={onDelete}
        aria-label="Delete Contact"
        disabled={loadingStatus}
      >
        <Delete className="icon" />
      </ButtonIcon>
    </li>
  );
};

ExampleListItem.propTypes = { id: PropTypes.string.isRequired };
