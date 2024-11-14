import { createSlice } from "@reduxjs/toolkit";

interface DrumState {
  display: string;
}

const initialState: DrumState = {
  display: "Press a key or click a pad",
};

const drumSlice = createSlice({
  name: "drum",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = drumSlice.actions;
export default drumSlice.reducer;
