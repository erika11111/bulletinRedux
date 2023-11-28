import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //it receives the state and an action
    postAdded: {
      reducer(state, action) {
        //and then gets payload-which is a form data
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((item) => item.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionsAdded } = postsSlice.actions;
export default postsSlice.reducer;
