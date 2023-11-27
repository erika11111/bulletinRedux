import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
export default postsSlice.reducer;
