import { configureStore } from "@reduxjs/toolkit";

import videoReducer from "./videoSlice";

const appStore = configureStore (
    {
        reducer: {
            videos: videoReducer
        }
    }
);

export type RootState = ReturnType< typeof appStore.getState >

export default appStore;