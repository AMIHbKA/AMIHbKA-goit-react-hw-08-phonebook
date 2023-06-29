import { Loader } from 'components/PhoneBook/Loader/Loader';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filter/slice';
import { ContactInput } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(updateFilter(event.target.value));
  const loadingStatus = useSelector(state => state.contacts.isLoading);

  return (
    <Wrapper h="5em" pb="24px">
      {loadingStatus && <Loader />}
      {!loadingStatus && (
        <ContactInput
          className="filter"
          placeholder="Search for contacts by name or number"
          name="filter"
          type="search"
          value={filterValue}
          onChange={handleFilterChange}
        />
      )}
    </Wrapper>
  );
};
