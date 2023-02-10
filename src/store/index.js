import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './shopSlice'
import userReducer from './userSlice'
import { fortniteApi } from './fortniteApi'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        user: userReducer,
        [fortniteApi.reducerPath]: fortniteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fortniteApi.middleware)
})