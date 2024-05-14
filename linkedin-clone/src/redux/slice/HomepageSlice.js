import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey, endpointPosts } from "../../api";

const initialState = {
    homepageArr : [],
    loading : false,
}



export const getHomepagePost = createAsyncThunk("homepageArr/fetch", async () => {

    const response = await fetch(endpointPosts, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzODIxZTMxYTczZjAwMTlkNWM3OTQiLCJpYXQiOjE3MDYyNjMwNzAsImV4cCI6MTcwNzQ3MjY3MH0.Yxk5FPF7lVpohIeDeilL0GawF_-7PgOmaZkXro19qVE'
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    return response.json();
});

const homepage_slice = createSlice(
    {
        name: 'homepageUser',
        initialState : initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getHomepagePost.pending, (state,action)=>{
                state.loading = true
            })
            .addCase(getHomepagePost.rejected, (state,action)=>{
                state.loading = false
            })
            .addCase(getHomepagePost.fulfilled, (state,action)=>{
                console.log(action.payload)
                state.loading = false
                state.homepageArr = action.payload
            })
        }
    }
)

    const {reducer} = homepage_slice;
   /*  export const {addFavourite,removeFavourite} = actions; */

    export default reducer;