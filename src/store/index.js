import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './shopSlice'
import { fortniteApi } from './fortniteApi'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        [fortniteApi.reducerPath]: fortniteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fortniteApi.middleware)
})