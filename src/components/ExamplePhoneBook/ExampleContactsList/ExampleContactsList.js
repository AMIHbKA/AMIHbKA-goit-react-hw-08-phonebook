import { useSelector } from 'react-redux';
import { ExampleListItem } from './ExampleListItem';
import { selectFilteredExampleContactsIds } from 'redux/example/slice';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { ContactListStyled } from 'components/PhoneBook/ContactsList/ContactsList.styled';
// import { Title } from 'components/UI/Title.styles';
import { InfoMessage } from 'components/UI/Messages';
// import { useTablet } from 'hooks/useWindowSize';

export const ExampleContactsList = () => {
  const contactIds = useSelector(selectFilteredExampleContactsIds);
  const filter = useSelector(state => state.filter);

  const renderedListItems = contactIds.map(contactId => (
    <ExampleListItem id={contactId} key={contactId} />
  ));

  const emptyText =
    !renderedListItems.length && !filter.length
      ? 'No contacts have been added yet ¯\\_ (ツ)_/¯'
      : !renderedListItems.length && filter.length
      ? 'No names or numbers were found ¯\\_ (ツ)_/¯'
      : null;
  // const isTablet = useTablet();

  return (
    <Wrapper>
      {/* {!isTablet && <Title>Phonebook</Title>} */}

      {renderedListItems.length ? (
        <ContactListStyled>{renderedListItems}</ContactListStyled>
      ) : (
        <InfoMessage>{emptyText}</InfoMessage>
      )}
    </Wrapper>
  );
};
