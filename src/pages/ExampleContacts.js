import {
  ExampleContactForm,
  ExampleContactsList,
  ExampleFilter,
} from 'components/ExamplePhoneBook/index';
import { Helmet } from 'react-helmet';

const ExampleContacts = () => {
  return (
    <>
      <Helmet>
        <title>Example</title>
      </Helmet>
      <ExampleContactForm />
      <ExampleFilter />
      <ExampleContactsList />
    </>
  );
};

export default ExampleContacts;
