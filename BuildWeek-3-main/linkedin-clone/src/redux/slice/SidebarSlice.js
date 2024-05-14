import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar : [],
}

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

export const getSidebarSrc = createAsyncThunk("sidebarSrc/fetch", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzODIxZTMxYTczZjAwMTlkNWM3OTQiLCJpYXQiOjE3MDYyNjMwNzAsImV4cCI6MTcwNzQ3MjY3MH0.Yxk5FPF7lVpohIeDeilL0GawF_-7PgOmaZkXro19qVE";

    const response = await fetch(baseEndpoint, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
});

const sidebar_slice = createSlice(
    {
        name: 'sidebar',
        initialState : initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getSidebarSrc.pending, (state,action)=>{
                
            })
            .addCase(getSidebarSrc.rejected, (state,action)=>{

            })
            .addCase(getSidebarSrc.fulfilled, (state,action)=>{
                state.sidebar = action.payload
            })
        }
    }
)

    const {reducer} = sidebar_slice;
   /*  export const {addFavourite,removeFavourite} = actions; */

    export default reducer;