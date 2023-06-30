import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { data } from './data';

// const { ids, entities } = data;
const exampleAdapter = createEntityAdapter({
  selectId: example => example.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = exampleAdapter.getInitialState({
  ids: data.ids,
  entities: data.entities,
  isLoading: false,
  error: null,
});

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addExampleContact: (state, action) => {
      const exampleContactToAdd = action.payload;

      const exampleContactExists = Object.values(state.entities).find(
        ({ name, number }) =>
          name === exampleContactToAdd.name ||
          number === exampleContactToAdd.number
      );

      if (!exampleContactExists) {
        exampleAdapter.addOne(state, action.payload);
        toast.success('Contact successfully added', {
          toastId: 'added',
        });
      } else {
        toast.warning('This contact is already added');
      }
    },
    deleteExampleContact: (state, action) => {
      exampleAdapter.removeOne(state, action.payload);
      toast.success('The contact was successfully deleted', {
        toastId: 'deleted',
      });
    },
  },
});

export const { addExampleContact, deleteExampleContact } = exampleSlice.actions;
export const contactsExampleReducer = exampleSlice.reducer;

export const {
  selectAll: selectExample,
  selectById: selectExampleContactById,
} = exampleAdapter.getSelectors(state => state.example);

export const selectExampleContactIds = createSelector(selectExample, example =>
  example.map(contact => contact.id)
);

export const selectFilteredExampleContactsIds = createSelector(
  [selectExample, state => state.filter],
  (example, filter) =>
    example
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.replace(/\D/g, '').includes(filter)
      )
      .map(contact => contact.id)
);
