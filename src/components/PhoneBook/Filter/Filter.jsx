import { Loader } from 'components/PhoneBook/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filter/slice';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(updateFilter(event.target.value));
  const loadingStatus = useSelector(state => state.contacts.isLoading);

  return (
    <>
      {loadingStatus && <Loader />}
      {!loadingStatus && (
        <input
          placeholder="Search for contacts by name"
          name="filter"
          type="search"
          value={filterValue}
          onChange={handleFilterChange}
        />
      )}
    </>
  );
};
