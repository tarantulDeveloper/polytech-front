import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload.isAuth;
        }
    }
})

export const {setIsAuth} = authSlice.actions;
export default authSlice.reducer;