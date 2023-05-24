import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            username: '',
            firstName: '',
            lastName: '',
            photoUrl: '',
            roles: [],
            id: 0
        }

    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo.username = action.payload.userInfo.username;
            state.userInfo.firstName = action.payload.userInfo.firstName;
            state.userInfo.lastName = action.payload.userInfo.lastName;
            state.userInfo.photoUrl = action.payload.userInfo.photoUrl;
            state.userInfo.roles = action.payload.userInfo.roles;
            state.userInfo.id = action.payload.userInfo.id
        },
        clearUserInfo: (state) => {
            state.username = '';
            state.firstName = '';
            state.userInfo = {
                firstName: '',
                lastName: '',
                photoUrl: '',
                roles: [],
                id: 0
            }
        }
    }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;