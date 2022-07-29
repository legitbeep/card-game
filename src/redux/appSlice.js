import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        someValue: 123,
    },
    reducers: {
        setParam: (state, action) => {

            if(action.payload.hasOwnProperty('someValue')) {
                state.someValue = action.payload.someValue
            }

        },
    },
})

export const { setParam } = appSlice.actions

export default appSlice.reducer