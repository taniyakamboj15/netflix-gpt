import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies:null, 
    },
    reducers:{
        addNewPlayingMovies :(state,action)=>{
            state.nowplayingmovies=action.payload;
        },

    }

})
export const {addNewPlayingMovies}=movieSlice.actions;
export default movieSlice.reducer;



