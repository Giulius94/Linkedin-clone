import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { endpointProfile, apiKey } from '../../api'

const initialState = {
  navUser: {},
}

export const fetchNavUser = createAsyncThunk("navUser/fetch", async () => {
  //console.log("sono l'Uomo Focaccina")
  const response = await axios.get(endpointProfile + "me", {
    headers: {
      'Authorization': apiKey
    }
  });
  //console.log(response.data)
  return response.data
})

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchNavUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.navUser = action.payload;
      })
      .addCase(fetchNavUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  }
})

const { reducer } = myProfileSlice;
export default reducer