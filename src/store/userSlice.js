import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        signin(state, action) {
            state.user = action.payload.user
        },
        signout(state, action) {
            state.user = ''
        }
    },
})

export const { signin, signout } = userSlice.actions

export default userSlice.reducer