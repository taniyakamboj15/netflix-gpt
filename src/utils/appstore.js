import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gPTSlice from "./GPTSlice";



const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt:gPTSlice,
    }

})

export default appStore;



