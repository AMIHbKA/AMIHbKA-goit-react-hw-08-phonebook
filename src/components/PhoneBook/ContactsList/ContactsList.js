import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from './ListItem';
import { fetchContacts, selectFilteredContactsIds } from 'redux/contacts/slice';
import { useEffect } from 'react';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { ContactListStyled } from './ContactsList.styled';
import { Title } from 'components/UI/Title.styles';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactIds = useSelector(selectFilteredContactsIds);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderedListItems = contactIds.map(contactId => {
    return <ListItem id={contactId} key={contactId} />;
  });

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      {renderedListItems.length ? (
        <ContactListStyled>{renderedListItems}</ContactListStyled>
      ) : (
        <p>No contacts have been added yet ¯\_ (ツ)_/¯</p>
      )}
    </Wrapper>
  );
};
