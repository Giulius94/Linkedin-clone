import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpointJobs, apiKey } from '../../api'

const initialState = {
    jobs: [],
    loading: false,
    favourites: []
}

export const fetchJobs = createAsyncThunk("jobSearch/fetch", async ( query = '' ) => {
    console.trace()
    const response = await axios.get(endpointJobs + `?search=${query}`, {
        headers: {
            'Authorization': apiKey
        }
    });
    console.log(response.data.data)
    return response.data.data
})

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {
        removeJob: ((state, action) => {
            console.log(action)
            state.jobs = state.jobs.filter(job => job.company_name !== action.payload.company_name)
        }),
        addFavourite(state, action) {
            console.log(action)
            state.favourites.push(action.payload)
        },
        removeFavourite(state, action) {
            console.log(action)
            return {
                ...state,
                favourites: state.favourites.filter(f => f.company_name !== action.payload.company_name)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false
            });
    }
})

const { reducer , actions } = jobsSlice;
export const { removeJob , addFavourite , removeFavourite } = actions
export default reducer