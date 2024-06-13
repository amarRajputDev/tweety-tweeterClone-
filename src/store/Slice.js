import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'; // Ensure nanoid is correctly imported

const initialState = {
  users : {username : null , fname : null},
  tweets: [{ id: null, tweet: null}],
  toggle: "hidden"
}

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    Addtweet: (state, action) => {
      const tweet = action.payload; 
      let username = state.users.username
      let fname = state.users.fname
      state.tweets.push({ id: nanoid(), tweet, username, fname }); // Push new tweet into array
    },
    togglebtn: (state, action) => {
      // Ensure action.payload is correctly handled
      state.toggle = action.payload === "fixed" ? "hidden" : "fixed";
    },
    adduser : (state , action) =>{
     const {username ,fname} = action.payload
      state.users.username = username
      state.users.fname = fname
      
    }
  },
});

export const { Addtweet, togglebtn,adduser } = tweetSlice.actions;

export default tweetSlice.reducer;
