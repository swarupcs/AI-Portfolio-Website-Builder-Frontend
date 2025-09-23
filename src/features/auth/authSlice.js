import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user data (used after successful signin/signup)
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },

    // Action to clear user data (used for logout)
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },

    // Action to update user profile
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

// Export actions
export const { setUser, clearUser, updateUserProfile } = authSlice.actions;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Export reducer
export default authSlice.reducer;
