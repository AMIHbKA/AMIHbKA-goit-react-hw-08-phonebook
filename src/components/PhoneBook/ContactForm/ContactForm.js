import { Button } from 'components/UI/Button.styles';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from 'redux/contacts/slice';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
} from './ContactForm.styled';
import { validateName, validateNumber } from 'utilities/validation';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.contacts.isLoading);
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;

    if (!validateName(name)) {
      alert('Введите имя, используя только буквы, апострофы, дефисы и пробелы');
      return;
    }

    if (!validateNumber(number)) {
      alert('Что-то там с циферками :)');
      return;
    }

    dispatch(
      addContactAsync({
        name,
        number,
      })
    );
    event.currentTarget.reset();
  };

  return (
    <Wrapper flex>
      <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
        <ContactLabel>
          Name
          <ContactInput
            ref={nameInputRef}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactLabel>
        <ContactLabel>
          Number
          <ContactInput
            ref={numberInputRef}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactLabel>
        <Button type="submit" disabled={loadingStatus}>
          Add contact
        </Button>
      </ContactFormStyled>
    </Wrapper>
  );
};
