import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from 'redux/contacts/slice';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={loadingStatus}>
        Add contact
      </button>
    </form>
  );
};
