import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        user: state => {
           
           
        },
    }
})

// Action creators are generated for each case reducer function
export const { user } = userSlice.actions

export default userSlice.reducer