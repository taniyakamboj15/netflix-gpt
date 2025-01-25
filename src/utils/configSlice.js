import { createSlice } from "@reduxjs/toolkit";

const configSlice= createSlice({
    name:"lang",
    initialState:{
        configLang:null,
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.configLang=action.payload
        },
    }

})
export const{changeLanguage}=configSlice.actions;
export default configSlice.reducer;