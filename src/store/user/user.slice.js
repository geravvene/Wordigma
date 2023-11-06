import { createSlice } from '@reduxjs/toolkit';

import { DataService } from '../../services/data.service';

const initialState = JSON.parse(window.localStorage.getItem(`user`));

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change: (state, { payload }) => {
      window.localStorage.setItem(`user`, JSON.stringify(payload));
      return payload;
    },
    toggleFavorite: (state, { payload }) => {
      const favorite = state.favorite;
      if (favorite.includes(payload)) {
        DataService.updateData(`users/${state._id}/favorite/del`, {
          id: payload,
        });
        state.favorite = favorite.filter((n) => n != payload);
      } else {
        DataService.updateData(`users/${state._id}/favorite/add`, {
          id: payload,
        });
        state.favorite = favorite.concat([payload]);
      }
    },
    clearFavorite: (state) => {
      DataService.updateData(`users/${state._id}/clear/favorite`);
      state.favorite = [];
    },
  },
});

export const { change, toggleFavorite, clearFavorite } = userSlice.actions;
export default userSlice.reducer;
