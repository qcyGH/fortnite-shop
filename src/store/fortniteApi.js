import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fortniteApi = createApi({
    reducerPath: 'fortniteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fortnite-api.com/v2/',
        prepareHeaders: (headers, { getState }) => {
            const token = process.env.API_KEY

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
              headers.set('Authorization', `${token}`)
            }

            return headers
        }
    }),
    endpoints: (build) => ({
        getItems: build.query({
            query: () => 'shop/br',
        }),
        getNews: build.query({
            query: () => 'news',
        }),
    }),
})

export const { useGetItemsQuery, useGetNewsQuery } = fortniteApi