import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies:null, 
        movieTrailer:null,
        popularMovie:null,
        topRated:null,
        trendingMovie:null,

    },
    reducers:{
        addNewPlayingMovies :(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;

        },
        addTrendingMovie:(state,action)=>{
            state.trendingMovie=action.payload;
        }

    }

})
export const {addNewPlayingMovies,addTrailer,addPopularMovie,addTopRated,addTrendingMovie}=movieSlice.actions;
export default movieSlice.reducer;



