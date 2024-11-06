import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoData } from "../utils/videoTypes";

const videoSlice = createSlice(
    {
        name: "videos",
        initialState: {
            videos: [] as VideoData[]
        },
        reducers: {
            addVideos: (state, action: PayloadAction<VideoData[]>) => {
                state.videos = action.payload
            }
        }
    }
);

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;