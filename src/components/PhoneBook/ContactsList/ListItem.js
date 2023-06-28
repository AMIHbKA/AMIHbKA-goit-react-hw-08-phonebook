import PropTypes from 'prop-types';
import { Trash } from '../../../UI/icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync, selectContactById } from 'redux/contacts/slice';

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
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete Contact"
        disabled={loadingStatus}
      >
        <Trash width={18} height={18} />
      </button>
      {name}: <a href={`tel:${number}`}>{number}</a>
    </li>
  );
};

ListItem.propTypes = { id: PropTypes.string.isRequired };
