import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: {},
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    playVideo: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { playVideo } = videoSlice.actions;
export default videoSlice.reducer;
