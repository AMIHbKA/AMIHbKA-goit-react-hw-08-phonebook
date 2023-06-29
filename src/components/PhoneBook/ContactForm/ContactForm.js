import { Button } from 'components/UI/Button.styles';
import { Form, Input, Label } from 'components/UI/Forms.styled';
import { Contact, ContactAddIcon, Phone, Ssdf } from 'components/UI/icons';
import { FormWrapper, Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from 'redux/contacts/slice';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.contacts.isLoading);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    console.log('form', form);
    dispatch(
      addContactAsync({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper flex>
      <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
        <ContactLabel>
          Name
          <ContactInput
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </ContactLabel>
        <ContactLabel>
          Number
          <ContactInput
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
