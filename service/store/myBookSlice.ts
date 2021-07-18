import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * みつけたポケモン・ゲットしたポケモンの状態を管理する
 */

export type TMyBook = {
  get: number[]
  encounter: number[]
};

export const initialState: TMyBook = {
  get: [],
  encounter: []
};

type TAction = {
  status: 'get' | 'encounter',
  id: number
}
export const myBookSlice = createSlice({
  name: 'myBook',
  initialState,
  reducers: {
    updateMyBook: (state, action: PayloadAction<TAction>) => {

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
export default myBookSlice.reducer
export const { updateMyBook } = myBookSlice.actions