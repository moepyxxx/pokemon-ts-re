import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BookPokemonState = {
  get: number[]
  encounter: number[]
};

export const initialState: BookPokemonState = {
  get: [],
  encounter: []
};

type TAction = {
  status: 'get' | 'encounter',
  id: number
}
export const bookPokemonSlice = createSlice({
  name: 'bookPokemon',
  initialState,
  reducers: {
    incrementPokemon: (state, action: PayloadAction<TAction>) => {

      const ids = state.encounter.concat(action.payload.id);

      switch (action.payload.status) {
        case 'encounter' :
          return {
            ...state,
            encouner: ids
          }
        case 'get' :
          return {
            ...state,
            get: ids
          }
      }
    }
  },
});
export default bookPokemonSlice.reducer