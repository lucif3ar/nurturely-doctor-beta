import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      action.payload.map((user) => {
        if (!state.find((item) => item.id === user.id)) {
          state.push(user);
        }
      });
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
