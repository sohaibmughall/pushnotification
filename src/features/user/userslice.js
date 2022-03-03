import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        user: (state, param) => {
            const { payload } = param;
            state.user = { ...state.user, payload };
            
        },
    }
})

// Action creators are generated for each case reducer function
export const { user } = userSlice.actions

export default userSlice.reducer