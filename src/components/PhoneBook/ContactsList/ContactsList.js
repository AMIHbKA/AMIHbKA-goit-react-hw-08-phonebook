import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from './ListItem';
import { fetchContacts, selectFilteredContactsIds } from 'redux/contacts/slice';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactIds = useSelector(selectFilteredContactsIds);

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderedListItems = contactIds.map(contactId => {
    return <ListItem id={contactId} key={contactId} />;
  });

  return <ul>{renderedListItems}</ul>;
};
