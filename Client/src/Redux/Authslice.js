import { createSlice } from '@reduxjs/toolkit'

const savedAuth = JSON.parse(localStorage.getItem('auth') || '{"isAuthenticated": false, "user": null}')

const initialState = {
    user: savedAuth.user,
    isAuthenticated: savedAuth.isAuthenticated,
    email: null
}

const authSlice = createSlice({
    name: "Auth reducer",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload || null
            localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: action.payload }))
        },

        logout: (state, action) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem('auth')
        }

    }
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer