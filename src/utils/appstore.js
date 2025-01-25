import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gPTSlice from "./GPTSlice";
import configSlice from "./configSlice";



const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt:gPTSlice,
        lang:configSlice,
    }

})

export default appStore;



