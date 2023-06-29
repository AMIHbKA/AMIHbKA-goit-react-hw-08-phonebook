import PropTypes from 'prop-types';
import { Trash } from '../../UI/icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync, selectContactById } from 'redux/contacts/slice';
import { Avatar } from 'components/UI/Avatar/Avatar';

export const ListItem = ({ id }) => {
  const contact = useSelector(state => selectContactById(state, id));
  const { name, number } = contact;
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.contacts.isLoading);

  const onDelete = () => {
    dispatch(deleteContactAsync(contact.id));
  };

  return (
    <li>
      <Avatar text={name} />
      <span>{name}</span>
      <a href={`tel:${number}`}>{number}</a>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete Contact"
        disabled={loadingStatus}
      >
        <Trash width="1em" height="1em" />
      </button>
    </li>
  );
};

ListItem.propTypes = { id: PropTypes.string.isRequired };
